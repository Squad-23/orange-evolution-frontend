import EvolucaoLaranja from '../../assets/images/evolucao-laranja.png'
import { Menu } from '../../components/Menu';
import { CircularProgress } from '../../components/CircularProgress';
import Accordion from '@radix-ui/react-accordion';




export function Trail(){
    return (

        <div className="bg-dominant-100 w-screen h-screen flex flex-col">
           <Menu/>
            
            <div className="w-full h-full bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] pt-7 px-6">
            
            <section className="mt-24">
                <h3 className="text-base font-medium bg-contrast pb-4 text-contrast-300 md:text-xl "> VOCÊ ESTÁ NA TRILHA DE UX/UI DESIGN </h3>
                <p className="text-sm italic font-normal text-contrast-300 sm:text-xl"> Você sabia que o tempo médio para uma laranjeira dar frutos é de 24 meses após o plantio?</p>

            <img src={ EvolucaoLaranja } alt="" />

            </section>
            
            </div>

   


        </div>
)
}