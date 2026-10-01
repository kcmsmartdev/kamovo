
import { TbWorld } from "react-icons/tb";
import { TbMouse2 } from "react-icons/tb";
import { TbShieldCheckeredFilled } from "react-icons/tb";


const contenido = {
    eyesbrow:"¿POR QUÉ CON KAMUVO?",
    h2:{
        titulo1:"Una web que hace más por tu negocio—",
        titulo2:"Diseño, tecnología y estrategia para comunicar mejor, generar confianza y crecer."
    },

    benficios: [
        {id:1, Icon:TbWorld, titulo:"Presencia", descripcion:"Un sitio web moderno y bien construido ayuda a que tu negocio tenga una presencia digital coherente, sólida y acorde a lo que ofrece."},
        {id:2, Icon:TbMouse2, titulo:"Experiencia", descripcion:"Una estructura clara, diseño responsive y una experiencia cuidada permiten que tus visitantes encuentren fácilmente la información que buscan."},
        {id:3, Icon:TbShieldCheckeredFilled, titulo:"Confianza", descripcion:"Una web profesional comunica atención al detalle y seriedad, ayudando a que los visitantes conozcan mejor tu negocio y consideren tus servicios."},
    ]


}
export default function Beneficios(){
    return(
       <section className="w-full relative overflow-hidden bg-fondoprimario">
            <div
            className="absolute z-10 opacity-10 bg-brand size-120 -left-60 top-0 rounded-full backdrop-blur-lg lg:hidden" />

            
            <div className="max-w-7xl mx-auto px-5 py-28 relative z-20">
                <span className="font-body text-xs text-gray-400 tracking-widest">{contenido.eyesbrow}</span>
                <h2 className="font-body text-4xl md:text-5xl text-white mt-4">
                     {contenido.h2.titulo1}
                    <span className="text-gray-400">{contenido.h2.titulo2}</span>
                </h2>

                <div className="flex flex-col gap-5 sm:flex-row mt-12">
                    {
                        contenido.benficios.map((e)=>{
                            const Icon = e.Icon
                            return(
                                <article key={e.id} className="px-3 py-10  shadow-fondosecundario  group
                                transition-all duration-300 ease-in-out">

                                    <div className="flex gap-3 items-center mb-4">
                                        <div className="size-10 bg-fondosecundario/30 flex items-center justify-center rounded-2xl">
                                        <Icon className="size-6 text-fondosecundario group-hover:text-brand" />
                                        </div>

                                        <h3 className="font-body text-xl lg:text-2xl text-white">
                                            
                                            {e.titulo}
                                        </h3>
                                    </div>

                                    <p className="font-body text-lg text-gray-400">
                                        {e.descripcion}
                                    </p>
                                </article>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}