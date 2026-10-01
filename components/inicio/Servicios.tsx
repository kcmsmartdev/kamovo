
const contenido ={
    eyesbrow:"NUESTROS SERVICIOS",
    h2:"Soluciones digitales para lo que tu negocio necesita.",
    servicios:{
        servicio1:{
            eyesbrow:"DISEÑO Y DESARROLLO WEB",
            h2:"dffdf",

        }
    }
}

export default function Servicios(){
    return(

        <section className="w-full relative overflow-hidden bg-fondoprimario" >
            <div className="max-w-7xl mx-auto px-5 py-28 flex flex-col items-center gap-4">
                <span className="font-body text-xs text-gray-400 tracking-widest">
                    {contenido.eyesbrow}
                </span>
                <h2 className="font-heading text-white text-3xl lg:text-5xl  text-center mb-4 max-w-3xl uppercase">
                    {contenido.h2   }
                </h2>

                <div className="w-full flex flex-col mt-20">
                    <div className="w-full bg-fondosecundario/80 p-5 rounded-4xl">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}