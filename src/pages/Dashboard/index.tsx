import BannerUX from '../../assets/image-card-ux-ui.svg';
import BannerQA from '../../assets/image-card-qa.svg';
import BannerDev from '../../assets/image-card-dev.svg'; 
import TrilhaLaranja from '../../assets/trilha-da-laranja.svg';
import type { CardProps } from '../../components/Card';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

export function Dashboard(){
  const cards: CardProps[] = [
    {
      title: "UX/UI Design",
      banner: BannerUX,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas tincidunt. Praesent pharetra iaculis neque, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.",
      duration: 4000,
      progress: 10,
    },
    {
      title: "Desenvolvimento Full Stack",
      banner: BannerUX,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas tincidunt. Praesent pharetra iaculis neque, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.",
      duration: 4000,
      progress: 0,
    },
    {
      title: "QA (Quality Assurance)",
      banner: BannerQA,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas tincidunt. Praesent pharetra iaculis neque, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.",
      duration: 4000,
      progress: 0,
    },
  ]

  return(
      <div className="bg-gray-100 w-screen h-screen flex flex-col">
        <div className="">
        <Menu/>
        </div>

        <div className="bg-gradient-to-r from-[#FD7AC54D] to-[#267CBC26] w-screen h-[500px]">
          <div className="mx-16 my-16 flex">
            <div className="flex flex-col content-between w-1/2">
              <h1 className="text-[#00C19C] text-5xl font-semibold pb-7 ">Bem vinda, Maria Angélica</h1>
                <div className="flex flex-col space-y-10 text-[#333333]">
                  <div className="font-medium text-2xl">Escolha uma ou mais trilhas para seguir...</div>
                  <div className="font-medium text-xl"> Ao começar uma trilha você consegue acompanhar a sua evolução conforme consome os conteúdos!</div>
                  <div className="font-medium text-xl">Por meio das trilhas você planta a <strong>semente do seu conhecimento</strong> e, assim como uma laranjeira, futuramente você colherá os frutos dos seus estudos. Vamos nessa?</div>
                </div>
            </div>
            <div className="pl-36 w-auto">
              <img src={ TrilhaLaranja } alt=""/>
            </div>
          </div>
        </div>

        <div className="bg-dominant-200 w-screen px-10 py-11 flex ">
          <div className="flex space-x-4">
            {
              cards.map((card, index) => (
                <Card key={`Card_${String(index)}`} {...card} />
              ))
            }
          </div>
        </div>
        
        <Footer logofc=''/>


      </div>
    
  );
}