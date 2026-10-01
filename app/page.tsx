import Beneficios from "@/components/inicio/Beneficios";
import Hero from "@/components/inicio/Hero";
import Proyectos from "@/components/inicio/Proyectos";
import Servicios from "@/components/inicio/Servicios";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Beneficios />  
      <Proyectos />
      <Servicios />
    </main>
  );
}
