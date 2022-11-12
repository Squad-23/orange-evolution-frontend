import TrilhaLaranja from '../../assets/imagem-trilha-laranja.svg'
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';



export function Trail(){
    return (
        <div className="bg-dominant-100 w-screen h-screen bg-gradient-to-r from-[#FD7AC54D] to-[#267CBC26]">
            <Menu/>
                <div className="pt-7 px-16 flex from ">
                    <div className="flex flex-col   space-y-3">
                        <span className="flex flex-col">
                            <h3 className="text-xl font-">VOCÊ ESTÁ NA TRILHA DE UX/UI DESIGN </h3>
                            <h1 className="font-semibold text-[40px] text-brand-green">Boa noite, Maria Angélica</h1>
                            <p className="text-left italic pr-24">Você sabia que o tempo médio para uma laranjeira dar frutos é de 24 meses após o plantio?</p>
                        </span>
                            <img src={ TrilhaLaranja } alt="Imagem de evolução pé de laranja" className="pt-14 pb-40" />
                        <span className="flex flex-col  ">
                            <p className="text-4xl font-medium pb-16">Continue de onde você parou...</p>
                            <div>
                                <p className="text-xl font-medium pb-7">O INÍCIO</p>
                                <h1 className="text-5xl font-semibold text-[#861CD2] pb-36">Migração de carreira</h1>
                            </div>
                        </span>
                    </div>
                </div>
            <Footer/>
        </div>
)
}