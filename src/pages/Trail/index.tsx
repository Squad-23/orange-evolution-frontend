import EvolucaoLaranja from '../../assets/images/evolucao-laranja.png'
import { Menu } from '../../components/Menu';

export function Trail(){
    return (

        <div className="bg-dominant-100 w-screen h-screen flex flex-col">
           <Menu/>
            
            <div className="w-full h-full bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] pt-7 px-6">
            
                <section className="mt-24 flex flex-col md:flex-row sm:ml-16">
                    <div className="">
                        <h3 className="text-base font-medium bg-contrast my-4 text-contrast-300 sm:text-xl "> VOCÊ ESTÁ NA TRILHA DE UX/UI DESIGN </h3>
                        <p className="text-sm italic font-normal my-4 text-contrast-300 sm:text-xl"> Você sabia que o tempo médio para uma laranjeira dar frutos é de 24 meses após o plantio?</p>
                    </div>
                
                    <div className="sm:ml-24 sm:mr-16 ">
                        <img src={ EvolucaoLaranja } alt="" className="w-80 h-28 sm:w-[28.75rem] sm:h-40" />
                    </div>
                </section>
            
            </div>
        </div>
)
}