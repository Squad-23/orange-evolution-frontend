import TrilhaLaranja from '../../assets/imagem-trilha-laranja.svg'
import { Menu } from '../../components/Menu';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function Trail(){
    return (
        <div className="bg-dominant-100 bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] flex flex-col dark:bg-gradient-to-l w-screen h-screen">
           
            <div className="w-screen">
                <Menu/>
            </div>

            <div className="flex flex-col px-16 mt-40">
                <div className="">
                    <h2 className="text-xl font-normal pb-7">VOCÊ ESTÁ NA TRILHA DE UX/UI DESIGN </h2>
                    <p className="text-xl italic font-medium">Você sabia que o tempo médio para uma laranjeira dar frutos é de 24 meses após o plantio?</p>
                </div>

                <img src={ TrilhaLaranja } alt="" className="h-40 w-[28.75rem]"/>
            </div>


            
            <div className="px-16 w-80">
                <input type="search" className="w-screen h-20 bg-dominant-200 rounded-lg border-[2px] border-contrast-100 overflow-hidden pl-16" placeholder='Busque por uma aula ou assunto'/>
                
                <div className="bg-dominant-200 border-[2px] border-contrast-100 w-screen pl-16 py-5">
                    <p className="font-normal text-sm pb-2">MÓDULO</p>
                    <p className="font-medium text-xl">O início</p>
                </div>

                <div className="bg-dominant-200 border-[2px] border-contrast-100 w-screen pl-16 py-5">
                    <p className="font-normal text-sm pb-2">MÓDULO</p>
                    <p className="font-medium text-xl">Fundamentos de UX</p>
                </div>
                
                <div className="bg-dominant-200 border-[2px] border-contrast-100 w-screen pl-16 py-5">
                    <p className="font-normal text-sm pb-2">MÓDULO</p>
                    <p className="font-medium text-xl">Fundamentos de UI</p>
                </div>

                <div className="bg-dominant-200 border-[2px] border-contrast-100 w-screen pl-16 py-5 rounded-lg">
                    <p className="font-normal text-sm pb-2">MÓDULO </p>
                    <p className="font-medium text-xl">Opcional</p>
                </div>
            </div>



        </div>
)
}