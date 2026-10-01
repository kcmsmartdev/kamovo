import Link from "next/link"
import Image from "next/image"

import { GrFormNextLink } from "react-icons/gr";
import { GoNorthStar } from "react-icons/go";

const contenido={
    h2:"Estos son los últimos proyectos web",
    descripcion:"Cada proyecto responde a un objetivo diferente, pero todos comparten el mismo enfoque: diseño estratégico, desarrollo sólido y atención al detalle.",

    proyecto:{
        proyecto1:{
            titulo:"Aurum Customs",
            descripcion:"",
            href:"/",
            sitioweb:"",
            imagen:"",
        },
        proyecto2:{
            titulo:"Aurum Logistics",
            descripcion:"",
            href:"/",
            sitioweb:"",
            imagen:"",
        },
        proyecto3:{
            titulo:"Aurum Metals",
            descripcion:"",
            href:"/",
            sitioweb:"",
            imagen:"",
        },
        proyecto4:{
            titulo:"Voley Media",
            descripcion:"",
            href:"/",
            sitioweb:"",
            imagen:"",
        }
    }
}

export default function Proyectos(){
    return(
        <section className="w-full bg-fondoprimario">
            <div className="max-w-7xl mx-auto px-5 py-28 flex flex-col items-center">
                <h2 className="font-heading text-white text-3xl lg:text-5xl  text-center mb-4 max-w-2xl uppercase">
                    {contenido.h2   }
                </h2>
                <p className="font-body text-gray-400 text-xl max-w-2xl text-center">
                    {contenido.descripcion}
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-center mt-32">


                    
                    <div className="group relative h-80 md:h-120 w-full overflow-hidden">
                        
                        <div className=" absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{backgroundImage: "url('/img1.jpg')",}}/>
                        <div className=" absolute inset-0  bg-black/35  transition-colors duration-500  group-hover:bg-black/45"/>

    
                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                            <h3
                            className="
                                font-heading text-3xl font-bold text-white
                                transition-transform duration-500 ease-out
                                group-hover:-translate-y-1">
                                Presencia
                            </h3>

                            <p
                            className="max-w-sm  translate-y-3 opacity-70 font-body text-white/70 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                Una imagen digital profesional, moderna y coherente
                                con tu negocio.
                            </p>
                        </div>
                    </div>
                    
                    <div className="group relative h-80 md:h-120 w-full overflow-hidden">
                        
                        <div className=" absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{backgroundImage: "url('/img1.jpg')",}}/>
                        <div className=" absolute inset-0  bg-black/35  transition-colors duration-500  group-hover:bg-black/45"/>

    
                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                            <h3
                            className="
                                font-heading text-3xl font-bold text-white
                                transition-transform duration-500 ease-out
                                group-hover:-translate-y-1">
                                Presencia
                            </h3>

                            <p
                            className="max-w-sm  translate-y-3 opacity-70 font-body text-white/70 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                Una imagen digital profesional, moderna y coherente
                                con tu negocio.
                            </p>
                        </div>
                    </div>

                    <div className="group relative h-80 md:h-120 w-full overflow-hidden">
                        
                        <div className=" absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{backgroundImage: "url('/img1.jpg')",}}/>
                        <div className=" absolute inset-0  bg-black/35  transition-colors duration-500  group-hover:bg-black/45"/>

    
                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                            <h3
                            className="
                                font-heading text-3xl font-bold text-white
                                transition-transform duration-500 ease-out
                                group-hover:-translate-y-1">
                                Presencia
                            </h3>

                            <p
                            className="max-w-sm  translate-y-3 opacity-70 font-body text-white/70 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                Una imagen digital profesional, moderna y coherente
                                con tu negocio.
                            </p>
                        </div>
                    </div>



                    <div className="group relative h-80 md:h-120 w-full overflow-hidden">
                        
                        <div className=" absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{backgroundImage: "url('/img1.jpg')",}}/>
                        <div className=" absolute inset-0  bg-black/35  transition-colors duration-500  group-hover:bg-black/45"/>

    
                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                            <h3
                            className="
                                font-heading text-3xl font-bold text-white
                                transition-transform duration-500 ease-out
                                group-hover:-translate-y-1">
                                Presencia
                            </h3>

                            <p
                            className="max-w-sm  translate-y-3 opacity-70 font-body text-white/70 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                Una imagen digital profesional, moderna y coherente
                                con tu negocio.
                            </p>
                        </div>
                    </div>
               

                    
                </div>
            </div>
        </section>
    )
}