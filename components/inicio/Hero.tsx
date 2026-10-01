import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import Marquee from "../ui/Marquee";


const contenido={
    h1:{
        titulo1: "Webs que comunican, ",
        titulo2: "negocios que avanzan."
    },

    descripcion: "Creo sitios web y aplicaciones a medida que ayudan a las empresas a comunicar mejor.",
    cta:{
        nombre:"Cotizar Proyecto",
        href:"/#"
    },

    ctaProyecto:{
        nombre:"Ver proyectos",
        href:"/proyectos"
    }, 

    marquee:{
        titulo:"Con la confianza de"
    }

    
}
export default function Hero(){
    return(
        <section className="w-full bg-linear-to-b from-50% from-fondoprimario to-fondosecundario">
            <div className="max-w-7xl mx-auto px-5 py-28 flex flex-col items-center">
                <div className="flex flex-col items-center gap-4 mt-5">
                    <h1 className="font-heading text-5xl text-center uppercase lg:text-7xl max-w-4xl lg:max-w-6xl">
                        <span className="text-white">{contenido.h1.titulo1}</span> 
                        <br />
                        <span className="text-gray-400">{contenido.h1.titulo2}</span>
                    </h1>

                    <p className="font-body text-white text-lg md:text-xl text-center max-w-2xl mt-4">
                        {contenido.descripcion}
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row mt-12">
                        <Link
                        href={contenido.cta.href}
                        aria-label={contenido.cta.nombre}
                        className="
                        relative overflow-hidden
                        flex items-center gap-2 bg-brand px-4 py-2.5
                        text-white font-body rounded-full shadow-2xl 
                        transition-all duration-200 ease-in-out hover:-translate-y-1
                        group">
                            {contenido.cta.nombre}
                            <span className="bg-menuMobile/50 p-2 rounded-full animate-pulse group-hover:animate-none">
                                <RiWhatsappFill className="size-5
                                group-hover:rotate-4 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </span>
                                              
                        </Link>

                        <Link
                        href={contenido.ctaProyecto.href}
                        aria-label={contenido.ctaProyecto.nombre}
                        className="font-body text-gray-400 text-base px-4 py-2.5
                        border border-gray-400 rounded-full
                        hover:border-white hover:text-white
                        transition-colors duration-300 ease-in-out">
                            <span className="p-2">{contenido.ctaProyecto.nombre}</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-20">
                    <p className="font-body text-sm text-gray-400 ">
                        {contenido.marquee.titulo}
                    </p>
                </div>
                <Marquee />
            </div>
        </section>
    )
}