import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const geoDir = path.join(__dirname, "geo-tmp");
const outSvg = path.join(
  __dirname,
  "../public/assets/service-area-outlines.svg"
);
const outJson = path.join(__dirname, "state-outline-paths.json");

// Framing matched to the Google Maps–style base crop
const west = -97.85;
const east = -86.05;
const south = 40.05;
const north = 49.55;
const W = 1024;
const H = 1024;

function project([lon, lat]) {
  const x = ((lon - west) / (east - west)) * W;
  const y = ((north - lat) / (north - south)) * H;
  return [x, y];
}

/** Squared distance from point to segment */
function dist2(p, a, b) {
  const [x, y] = p;
  const [x1, y1] = a;
  const [x2, y2] = b;
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    const ex = x - x1;
    const ey = y - y1;
    return ex * ex + ey * ey;
  }
  let t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  t = Math.max(0, Math.min(1, t));
  const px = x1 + t * dx - x;
  const py = y1 + t * dy - y;
  return px * px + py * py;
}

/** Douglas–Peucker simplify in lon/lat degrees */
function simplify(ring, tolerance) {
  if (ring.length <= 4) return ring;
  const sqTol = tolerance * tolerance;

  function dp(points, first, last, keep) {
    let maxDist = 0;
    let index = -1;
    for (let i = first + 1; i < last; i++) {
      const d = dist2(points[i], points[first], points[last]);
      if (d > maxDist) {
        maxDist = d;
        index = i;
      }
    }
    if (maxDist > sqTol && index !== -1) {
      keep[index] = true;
      dp(points, first, index, keep);
      dp(points, index, last, keep);
    }
  }

  const keep = new Array(ring.length).fill(false);
  keep[0] = true;
  keep[ring.length - 1] = true;
  dp(ring, 0, ring.length - 1, keep);
  return ring.filter((_, i) => keep[i]);
}

function ringToPath(ring) {
  const simplified = simplify(ring, 0.004);
  const pts = simplified.map(project);
  if (pts.length < 3) return "";
  let d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) {
    d += `L${pts[i][0].toFixed(2)} ${pts[i][1].toFixed(2)}`;
  }
  return `${d}Z`;
}

function geomToPath(geometry) {
  const polys =
    geometry.type === "Polygon"
      ? [geometry.coordinates]
      : geometry.coordinates;
  // Outer rings only (index 0 of each polygon)
  return polys
    .map((poly) => ringToPath(poly[0]))
    .filter(Boolean)
    .join("");
}

function loadState(file, label) {
  const raw = JSON.parse(fs.readFileSync(path.join(geoDir, file), "utf8"));
  // File may be Feature or FeatureCollection or bare Geometry
  let geometry;
  if (raw.type === "FeatureCollection") {
    geometry = raw.features[0].geometry;
  } else if (raw.type === "Feature") {
    geometry = raw.geometry;
  } else {
    geometry = raw;
  }
  const d = geomToPath(geometry);
  console.log(`${label}: path length ${d.length}, starts ${d.slice(0, 40)}...`);
  return d;
}

const paths = {
  Minnesota: loadState("MN.geojson", "Minnesota"),
  Wisconsin: loadState("WI.geojson", "Wisconsin"),
  Iowa: loadState("IA.geojson", "Iowa"),
};

fs.writeFileSync(outJson, JSON.stringify(paths, null, 2));

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" aria-hidden="true">
  <path data-state="Minnesota" d="${paths.Minnesota}" stroke="#e0002c" stroke-width="3.25" stroke-linejoin="round" stroke-linecap="round"/>
  <path data-state="Wisconsin" d="${paths.Wisconsin}" stroke="#e0002c" stroke-width="3.25" stroke-linejoin="round" stroke-linecap="round"/>
  <path data-state="Iowa" d="${paths.Iowa}" stroke="#e0002c" stroke-width="3.25" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
`;

fs.writeFileSync(outSvg, svg);
console.log("Wrote", outSvg);
