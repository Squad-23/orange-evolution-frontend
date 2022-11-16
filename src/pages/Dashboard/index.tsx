import { useContext } from 'react';

import { OrangeTrail } from '../../assets/svgs/OrangeTrail';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';
import { TrailContext } from '../../contexts/trails';
import { UserContext } from '../../contexts/user';

export function Dashboard() {
  const { user } = useContext(UserContext);
  const { trails } = useContext(TrailContext);

  return (
    <Page.Root>
      <Page.Menu />

      <Page.Content>
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
              Bem vindo(a), {user.name}!
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
      </Page.Content>

      <section className="bg-dominant-200 w-screen p-10 flex flex-col gap-10 sm:flex-row">
        {trails.map((trail, index) => (
          <Card key={`Card_${String(index)}`} trail={trail} />
        ))}
      </section>

      <Page.Footer />
    </Page.Root>
  );
}
