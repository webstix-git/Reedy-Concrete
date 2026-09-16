import fs from "fs";

const p = JSON.parse(fs.readFileSync("scripts/state-outline-paths.json", "utf8"));

function bbox(d) {
  const nums = [...d.matchAll(/([\d.]+)\s+([\d.]+)/g)].map((m) => [
    +m[1],
    +m[2],
  ]);
  let minX = 1e9,
    maxX = -1e9,
    minY = 1e9,
    maxY = -1e9,
    sx = 0,
    sy = 0;
  for (const [x, y] of nums) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
    sx += x;
    sy += y;
  }
  const n = nums.length;
  return {
    minX: minX.toFixed(0),
    maxX: maxX.toFixed(0),
    minY: minY.toFixed(0),
    maxY: maxY.toFixed(0),
    cx: ((sx / n / 1024) * 100).toFixed(1) + "%",
    cy: ((sy / n / 1024) * 100).toFixed(1) + "%",
  };
}

for (const k of Object.keys(p)) console.log(k, bbox(p[k]));
