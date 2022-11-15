import { Page } from '../../components/Page';

import { Content } from './Content';
import { ContentAccordion } from './ContentAccordion';

export function Subject() {
  return (
    <Page.Root>
      <Page.Menu />
      <Page.Content className="w-full h-full py-7 px-6 sm:p-16">
        <div className="flex sm:hidden flex-col gap-6">
          <div className="bg-dominant-200 rounded-2xl flex flex-col items-center overflow-clip">
            <div className="w-full flex flex-col sm:flex-row">
              <h2 className="bg-[#83CABC] text-gray-dark-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Migração de carreira
              </h2>
              <h2 className="bg-[#00C19C] text-gray-light-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Conteúdos
              </h2>
            </div>

            <ContentAccordion />
          </div>
        </div>

        <div className="w-full h-full hidden sm:flex flex-col gap-6">
          <div className="bg-dominant-200 rounded-2xl flex overflow-clip h-full">
            <div>
              <h2 className="bg-[#83CABC] text-gray-dark-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Migração de carreira
              </h2>
              <Content.Root className="hidden sm:flex bg-dominant-300 p-6">
                <Content.Title>Guia definitivo de como migrar para UX Design: 5 passos para virar um UX</Content.Title>
                <Content.Resume>
                  Se você quer saber de uma vez por todas qual é a fórmula mágica para conseguir fazer a migração de
                  carreira para UX Design e começar a ganhar rios de dinheiro, este é o artigo para você…só que não.
                </Content.Resume>
                <Content.External />
                <Content.Glossary items={[{ title: 'UX Design', description: 'Design de Experiência do usuário.' }]} />
              </Content.Root>
            </div>

            <div>
              <h2 className="bg-[#00C19C] text-gray-light-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Conteúdos
              </h2>

              <ContentAccordion />
            </div>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
