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
    <div className="service-area-map">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="service-area-map-base"
        src="/assets/photos/service-area.jpg"
        alt="Reedy Concrete pump truck on a jobsite"
        width={1024}
        height={742}
      />
    </div>
  );
}
