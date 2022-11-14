import { Menu } from '../../components/Menu';


export function Subject(){
    return(
        <div className="bg-dominant-100 w-screen h-screen flex flex-col">
            <Menu/>
            <div className="w-full h-full  bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] dark:bg-gradient-to-l from-[#FD7AC54D] to-[#D5FFAB80] pt-7 px-6">
                

                <section className="bg-dominant-200 mt-20 rounded-2xl flex flex-col px-4 py-6 items-center ">
                <h2 className="bg-[#83CABC] text-contrast-300 w-full "> Migração de carreira</h2>
                <h2 className="bg-[#00C19C] text-dominant-100 w-full"> Conteúdos</h2>

                <div className="bg-dominant-100 w-auto h-auto rounded-2xl font-normal text-base sm:text-xl pl-2 py-3 mt-6 mb-6">
                    <label className="text-contrast-300 font-normal text-xl">
                    <input type="checkbox" className="rounded-2xl mr-3 w-5 h-5 accent-[#00C19C]"/> Guia definitivo de como migrar para UX Design: 5 passos para virar um UX Design
                    </label>
                </div>

                <div className="bg-dominant-100 w-auto h-auto rounded-2xl mr-3 font-normal text-base sm:text-xl pl-2 py-3 mb-6 flex">
                    <label className="text-contrast-300 font-normal text-xl">
                    <input type="checkbox" className="rounded-2xl w-5 h-5 accent-[#00C19C]"/> Design Thinking e carreira: como migrei de Psicologia para UX Design
                    </label>
                </div>

                <div className="bg-dominant-100 w-auto h-auto rounded-2xl mr-3 font-normal text-base sm:text-xl pl-2 py-3 mb-6">
                    <label className="text-contrast-300 font-normal text-xl">
                    <input type="checkbox" className="mr-3 w-5 h-5 accent-[#00C19C]"/> De advogada a desenvolvedora: um relato sobre minha migração de carreira e dicas para quem pretende seguir o mesmo caminho
                    </label>
                </div>
                </section>
            </div>

        </div>
    )
}