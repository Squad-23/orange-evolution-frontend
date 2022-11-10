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
            <div className="flex flex-col content-between w-1/2">
              <h1 className="text-[#00C19C] text-5xl font-semibold pb-7 ">Bem vinda, Maria Angélica</h1>
                <div className="flex-col text-[#333333]">
                  <p className="font-medium text-2xl pb-10">Escolha uma ou mais trilhas para seguir...</p>
                  <p className="font-medium text-xl pb-5"> Ao começar uma trilha você consegue acompanhar a sua evolução conforme consome os conteúdos!</p>
                  <p className="font-medium text-xl">Por meio das trilhas você planta a <strong>semente do seu conhecimento</strong> e, assim como uma laranjeira, futuramente você colherá os frutos dos seus estudos. Vamos nessa?</p>
                </div>
            </div>
            <div className="pl-36 w-auto">
              <img src={ TrilhaLaranja } alt=""/>
            </div>
          </div>
        </div>
      </div>
    
  );
}