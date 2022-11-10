import TrilhaLaranja from '../../assets/trilha-da-laranja.svg';
import { Menu } from '../../components/Menu';


export function Dashboard(){
  return(
      <div className="bg-gray-100 w-screen h-screen flex flex-col gap-4">
        <div className="">
        <Menu/>
        </div>
        <div className="bg-gradient-to-r from-[#FD7AC54D] to-[#267CBC26] w-screen h-[500px]">
          <div className="mx-16 my-16 flex ">
            <div>
              <h1 className="text-[#00C19C] text-5xl font-semibold ">Bem vinda, fulana</h1>
                <div className="flex  mr-32 h-72 w-auto">
                  <p className="font-medium text-2xl">Escolha uma ou mais trilhas para seguir...</p>
                  <p className="font-medium text-xl"> Ao começar uma trilha você consegue acompanhar a sua evolução conforme consome os conteúdos!</p>
                  <p className="font-medium text-xl">Por meio das trilhas você planta a <strong>semente do seu conhecimento</strong> e, assim como uma laranjeira, futuramente você colherá os frutos dos seus estudos. Vamos nessa?</p>
                </div>
            </div>
            <img src={ TrilhaLaranja } alt="" className="flex-shrink-0"/>
          </div>
        </div>
      </div>
    
  );
}