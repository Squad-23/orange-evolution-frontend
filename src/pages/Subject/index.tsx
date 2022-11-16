import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '../../components/Page';
import { TrailContext } from '../../contexts/trails';
import type { UserContent } from '../../types/trails';

import { Content } from './Content';
import { ContentAccordion } from './ContentAccordion';




export function Subject() {
  const [content, setContent] = useState<UserContent>({} as UserContent);

  const { idTrail, idModule, indexSubject } = useParams();
  const { trails } = useContext(TrailContext);

  const subject = trails.find((trail) => trail.id === idTrail)?.modules.find((module) => module.id === idModule)
    ?.subjects[Number(indexSubject)];

  return (
    <Page.Root>
      <Page.Menu />
      <Page.Content className="w-full h-full py-7 px-6 sm:p-16">
        <div className="flex sm:hidden flex-col gap-6">
          <div className="bg-dominant-200 rounded-2xl flex flex-col items-center overflow-clip">
            <div className="w-full flex flex-col sm:flex-row">
              <h2 className="bg-[#83CABC] text-gray-dark-200 w-full px-7 py-3 text-xl font-semibold text-center">
                {subject?.title}
              </h2>
              <h2 className="bg-[#00C19C] text-gray-light-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Conteúdos
              </h2>
            </div>

            {subject && <ContentAccordion contents={subject.contents} />}
          </div>
        </div>

        <div className="w-full h-full hidden sm:flex flex-col gap-6">
          <div className="bg-dominant-200 rounded-2xl flex overflow-clip h-full w-full">
            <div className="w-full">
              <h2 className="bg-[#83CABC] text-gray-dark-200 w-full px-7 py-3 text-xl font-semibold text-center">
                {subject ? subject.title : '...'}
              </h2>

              {content.id ? (
                <Content.Root className="hidden sm:flex bg-dominant-300 p-6 w-full">
                  <Content.Title>{content.title}</Content.Title>
                  <Content.Resume>{content.subject}</Content.Resume>
                  <Content.External href={content.link} />
                  <Content.Glossary
                    items={[{ title: 'UX Design', description: 'Design de Experiência do usuário.' }]}
                  />
                </Content.Root>
              ) : (
                <h3 className="text-3xl w-full text-center text-contrast-200 mt-16">
                  Selecione um conteúdo para visualizar
                </h3>
              )}
            </div>

            <div>
              <h2 className="bg-[#00C19C] text-gray-light-200 w-full px-7 py-3 text-xl font-semibold text-center">
                Conteúdos
              </h2>

              {subject && <ContentAccordion contents={subject.contents} setContent={setContent} />}
            </div>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
