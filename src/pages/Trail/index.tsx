import * as Accordion from '@radix-ui/react-accordion';
import { useContext } from 'react';
import { HiSearch } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';

import EvolucaoLaranja from '../../assets/images/evolucao-laranja.png';
import { CircularProgress } from '../../components/CircularProgress';
import { Page } from '../../components/Page';
import { TrailContext } from '../../contexts/trails';
import { UserContext } from '../../contexts/user';
import type { UserTrail } from '../../types/trails';

export function Trail() {
  const { trails } = useContext(TrailContext);
  const { user } = useContext(UserContext);
  const { idTrail } = useParams();

  const trail = trails.find((item) => item.id === idTrail) as UserTrail;

  return (
    <Page.Root>
      <div className="bg-dominant-100 w-auto h-auto">
        <Page.Menu>
          <div className="flex items-center justify-center">
            <CircularProgress max={trail.progress?.max} completed={trail.progress?.completed} />
            <p className="ml-5 font-normal text-xs text-contrast-300 sm:text-base">
              {' '}
              {trail.progress?.completed} de {trail.progress?.max} assuntos concluídos
            </p>
          </div>
        </Page.Menu>
        <Page.Content>
          <div className="w-screen min-h-screen flex-col bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] p-6 sm:py-14 sm:px-16">
            <section className="flex flex-col items-center sm:flex-row sm:gap-16">
              <div>
                <h3 className="text-lg uppercase font-thin bg-contrast my-4 text-contrast-300 sm:text-xl ">
                  Olá, {user?.name}
                </h3>
                <h2 className="text-2xl font-medium  uppercase bg-contrast my-4 text-contrast-300">
                  VOCÊ ESTÁ NA TRILHA DE {trail.title}
                </h2>
                <p className="text-sm italic font-normal my-4 text-contrast-300 sm:text-xl">
                  &quot;Você sabia que o tempo médio para uma laranjeira dar frutos é de 24 meses após o plantio?&quot;
                </p>
              </div>

              <div className="sm:ml-24 sm:mr-16 ">
                <img src={EvolucaoLaranja} alt="" className="w-full max-w-md sm:w-[28.75rem] sm:h-40" />
              </div>
            </section>

            <Accordion.Root
              type="multiple"
              className="overflow-scroll scrollbar-thin
            bg-gray-200 dark:bg-gray-600 w-full rounded-2xl border-[1px] border-gray-900
              mt-10
            "
            >
              <div
                className="
                w-full py-4 px-8 flex items-center text-contrast-100 gap-4
                text-light text-sm border-gray-900
                sm:px-16
              "
              >
                <HiSearch className="w-5 h-5" />
                Busque por uma aula ou assunto
              </div>
              {trail.modules?.map((module) => (
                <Accordion.Item value={module.title} className="w-full border-t-[1px] border-gray-900">
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="flex justify-between items-center text-contrast-100 py-4 px-8 cursor-pointer"
                      asChild
                    >
                      <div>
                        <div>
                          <sup className="text-xs font-medium">MODULO</sup>
                          <h4 className="text-base font-medium">{module.title}</h4>
                        </div>

                        <CircularProgress max={module.progress?.max} completed={module.progress?.completed} />
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  {module.subjects?.map((subject, index) => (
                    <Accordion.Content className="border-t-[1px] border-gray-900">
                      <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                        <div>
                          <sup id="assunto" className="text-xs font-medium">
                            ASSUNTO
                          </sup>
                          <Link to={`/trail/${String(idTrail)}/module/${module.id}/subject/${index}`}>
                            <h4 className="text-base font-medium underline hover:opacity-80">{subject.title}</h4>
                          </Link>
                        </div>

                        <CircularProgress max={subject.progress?.max} completed={subject.progress?.completed} />
                      </div>
                    </Accordion.Content>
                  ))}
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
