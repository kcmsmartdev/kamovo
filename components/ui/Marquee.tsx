import Image from "next/image";

const LOGOS = [
  { src: "/logos/logo-aurumCustoms.svg", alt: "Aurum Customs" },
  { src: "/logos/logo-aurumLogistics.svg", alt: "Aurum Logistics" },
  { src: "/logos/logo-aurumMetals.svg", alt: "Aurum Metals" },
] as const;

const REPEAT = 3;

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  const items = Array.from({ length: REPEAT }, () => LOGOS).flat();

  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((logo, index) => (
        <li
          key={`${logo.src}-${index}`}
          className="
            mx-5 flex h-10 w-24 shrink-0 items-center justify-center
            opacity-70 grayscale transition duration-300
            sm:mx-8 sm:h-12 sm:w-32
            md:hover:opacity-100 md:hover:grayscale-0
          "
        >
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            width={140}
            height={48}
            unoptimized
            className="max-h-full max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  return (
    <section
      aria-label="Clientes que confían en nosotros"
      className="marquee-mask relative w-full min-w-0 max-w-full overflow-hidden py-8 sm:py-10"
    >
      <div className="marquee-track flex w-max">
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </section>
  );
}