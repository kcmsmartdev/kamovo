"use client"
import Link from "next/link"
import Image from "next/image"

import { RiMenu5Fill } from "react-icons/ri";
import { LuMoveRight } from "react-icons/lu";
import { RiMenu4Line } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { IoIosApps } from "react-icons/io";
import { FaHeadSideVirus } from "react-icons/fa6";

const Logo={
    href:"/",
    imagen:"/logo.svg",
    alt:"Kamovo"
}

const nav=[
    {id:1, nombre:"Inicio", href:"/"},
    {id:2, nombre:"Servicios", href:"#servicio", 
        child:[
            {id:1, Icon:TbWorldWww, nombre:"Diseño y desarrollo web", href:"/servicio/disenio-y-desarrollo-web"},
            {id:2, Icon:IoIosApps , nombre:"Aplicaciones web", href:"/servicio/aplicaciones-web"},
            {id:3, Icon:FaHeadSideVirus, nombre:"Soporte", href:"/servicio/soporte-web"},
        ]
    },
    {id:3, nombre:"Proyectos", href:"#proyectos"},
    {id:4, nombre:"Sobre mi", href:"#sobre-mi"},
]


const cta = {
    href:"/contacto",
    nombre:"Contacto",
}
export default function navbar(){
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()
    return(
        <header className="fixed top-0 left-0 z-50 w-full   bg-fondoprimario px-5 ">
            <nav className="relative z-20 flex flex-row justify-between items-center
            max-w-7xl mx-auto py-3.5">
                <Link
                href={Logo.href}>
                    <Image
                    src={Logo.imagen}
                    alt={Logo.alt}
                    width={128}
                    height={32}
                    fetchPriority="high"
                    className="w-32 h-8" />
                </Link>

            <ul className="hidden lg:flex flex-row items-center gap-5">
                {
                    nav.map((e)=>{
                        const esActivo = pathname ===e.href;
                        return(
                            <li key={e.id}
                            className="flex flex-row items-center gap-2 relative  group">
                                <Link
                                href={e.href}
                                className={`font-body text-base text-white flex items-center px-3.5 py-1.5 rounded-full 
                                ${esActivo ? "bg-menuMobile/20" :"hover:bg-menuMobile/20"}`}>
                                    {e.nombre}
                                </Link>

                                {e.child &&(
                                    <IoIosArrowDown className="size-4 text-white group-hover:rotate-180 transition-transform duration-300 ease-in-out" />
                                )}

                                {e.child &&(
                                    <div 
                                    className="absolute left-1/2 top-full z-50 w-2xl -translate-x-1/2 pt-1    
                                    invisible opacity-0 translate-y-2 pointer-events-none
                                    transition-all duration-300 ease-in-out
                                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                        
                                        <div className="bg-fondoprimario px-5 py-5 flex flex-row items-center justify-between  gap-5 shadow-fondosecundario/30 shadow-2xl rounded-4xl ">
                                            {
                                                e.child.map((e)=>{
                                                    const Icon = e.Icon;
                                                    return(
                                                        <Link
                                                        key={e.id}
                                                        href={e.href}
                                                        className="font-body text-white/80 text-base flex items-center gap-1
                                                        hover:bg-menuMobile/20 p-5 rounded-4xl">
                                                            <Icon className="size-3" />
                                                            {e.nombre}
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                )}
                            </li>
                        )
                    })
                }

                
            </ul>
            
            <Link
            href={cta.href}
            className="hidden border border-menuMobile/20 bg-menuMobile/20 font-body text-white
            lg:flex items-center gap-3 px-4 py-2 rounded-full
            group">
                {cta.nombre}
                <GoArrowRight  className="size-5 group-hover:scale-105 group-hover:-rotate-45 transition-transform duration-300 ease-in-out"/>
            </Link>



            <button
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="bg-menuMobile p-2 rounded-4xl lg:hidden"
            onClick={()=>setOpen(!isOpen)}>
                 {isOpen 
                 ? <RiMenu4Line className="size-7 text-white " /> 
                 : <RiMenu5Fill className="size-7 text-white"  />
                 }   
            </button>
            


            </nav>

            <div
            id="mobile-menu"
            aria-hidden={!isOpen}
            className={`absolute left-0 top-full z-10 w-full bg-fondoprimario p-5 transition-all duration-300 ease-in-out 
                ${isOpen ? "translate-y-0 opacity-100 shadow-fondoprimario shadow-2xl" : "-translate-y-full opacity-0 pointer-events-none"}`}>

                <ul className="flex flex-col gap-6 py-6">
                    {nav.map((e)=>{
                        const esActivo = pathname ===e.href
                        return(
                            <li key={e.id}>
                                <Link
                                href={e.href}
                                aria-label={e.nombre}
                                className={`font-body text-white text-xl px-4 py-2.5 rounded-4xl ${esActivo ? "bg-menuMobile/20" : ""}`}>
                                {e.nombre}
                                </Link>

                                {e.child &&(
                                    <div>
                                        {e.child.map((e)=>{

                                            return(
                                                <div key={e.id}
                                                className="px-7 py-2 ">
                                                     <Link
                                                    href={e.href}
                                                    className="font-body text-sm text-gray-400 border-b pb-1.5">
                                                    {e.nombre}
                                                    </Link>
                                                </div>
                                                   
                                            )
                                        })}
                                    </div>
                                )}
                            </li>
                        )
                    })} 

                    <Link
                    href={cta.href}
                    aria-label={cta.nombre}
                    className="font-body text-xl text-white bg-menuMobile/20 rounded-4xl
                    flex flex-row gap-2 items-center px-4 py-2.5
                    w-fit">
                        {cta.nombre}
                        <LuMoveRight className="size-3" />
                    </Link>
                    
                </ul>

            </div>
        </header>
    )
}