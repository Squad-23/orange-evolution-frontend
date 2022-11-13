import BannerQA from '../../assets/images/banner-qa.png';
import { OrangeTrail } from '../../assets/svgs/OrangeTrail';
import type { CardProps } from '../../components/Card';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

export function Dashboard() {
  const cards: CardProps[] = [
    {
      title: 'UX/UI Design',
      banner: BannerQA,
      description:
        'Lorem, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.',
      duration: 4000,
      progress: 51,
    },
    {
      title: 'Desenvolvimento Full Stack',
      banner: BannerQA,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas tincidunt. Praesent pharetra iaculis neque, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.',
      duration: 2000,
      progress: 0,
    },
    {
      title: 'QA (Quality Assurance)',
      banner: BannerQA,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas tincidunt. Praesent pharetra iaculis neque, et commodo leo faucibus at. Proin at interdum tortor, ac viverra tellus. Phasellus convallis laoreet magna eget scelerisque. Nunc iaculis turpis non dui venenatis finibus. Sed scelerisque pulvinar odio, id finibus lectus ultrices in.',
      duration: 1000,
      progress: 0,
    },
  ];

  return (
    <div className="bg-dominant-200 w-full h-full flex flex-col">
      <Menu />

      <section className="relative w-screen z-0 mt-20">
        <div
          className="
            absolute w-full h-full opacity-30 z-[-1]
            bg-gradient-to-r from-[#FD7AC5] to-[#267CBC]
            dark:bg-gradient-to-l
          "
        />

        <div
          className="
            w-screen flex flex-col gap-10
            p-12
            sm:px-16 sm:py-32 sm:items-center sm:flex-row
          "
        >
          <div
            className="
              flex flex-col gap-10 w-auto sm:max-w-[38rem] text-contrast-100
            "
          >
            <h2 className="text-brand-pink-700 dark:text-brand-green text-4xl font-semibold">
              Bem vinda, Maria Angélica
            </h2>

            <h3 className="text-3xl">Escolha uma ou mais trilhas para seguir...</h3>

            <div className="flex flex-col font-medium text-xl gap-6">
              <p>Ao começar uma trilha você consegue acompanhar a sua evolução conforme consome os conteúdos!</p>
              <p>
                Por meio das trilhas você planta a <strong>semente do seu conhecimento</strong> e, assim como uma
                laranjeira, futuramente você colherá os frutos dos seus estudos. Vamos nessa?
              </p>
            </div>
          </div>

          <OrangeTrail />
        </div>
      </section>

      <section className="bg-dominant-200 w-screen p-10 flex flex-col gap-10 sm:flex-row">
        {cards.map((card, index) => (
          <Card key={`Card_${String(index)}`} {...card} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
