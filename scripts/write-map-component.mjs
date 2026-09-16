import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const paths = JSON.parse(
  fs.readFileSync(path.join(__dirname, "state-outline-paths.json"), "utf8")
);

const comp = `export type MapPin = {
  name: string;
  top: string;
  left: string;
};

const defaultPins: MapPin[] = [
  { name: "Minnesota", top: "32%", left: "34%" },
  { name: "Wisconsin", top: "42%", left: "70%" },
  { name: "Iowa", top: "78%", left: "40%" },
];

type ServiceAreaMapProps = {
  pins?: MapPin[];
};

const outlines = {
  Minnesota: ${JSON.stringify(paths.Minnesota)},
  Wisconsin: ${JSON.stringify(paths.Wisconsin)},
  Iowa: ${JSON.stringify(paths.Iowa)},
} as const;

export default function ServiceAreaMap({ pins = defaultPins }: ServiceAreaMapProps) {
  return (
    <div className="service-area-map" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="service-area-map-base"
        src="/assets/service-area-map.png?v=outline6"
        alt=""
        width={1024}
        height={1024}
      />
      <svg
        className="service-area-map-outlines"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d={outlines.Minnesota}
          stroke="#e0002c"
          strokeWidth="3.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d={outlines.Wisconsin}
          stroke="#e0002c"
          strokeWidth="3.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d={outlines.Iowa}
          stroke="#e0002c"
          strokeWidth="3.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <ul className="service-area-map-pins">
        {pins.map((pin) => (
          <li key={pin.name} style={{ top: pin.top, left: pin.left }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/icon-location-pin.svg" alt="" width={28} height={28} />
            <span>{pin.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, "../components/ServiceAreaMap.tsx"),
  comp
);
console.log("ServiceAreaMap.tsx updated");
