export type MapPin = {
  name: string;
  top: string;
  left: string;
};

type ServiceAreaMapProps = {
  pins?: MapPin[];
};

export default function ServiceAreaMap(_props: ServiceAreaMapProps = {}) {
  return (
    <div className="service-area-map" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="service-area-map-base"
        src="/assets/service-area-map.jpg?v=ref1"
        alt=""
        width={1024}
        height={742}
      />
    </div>
  );
}
