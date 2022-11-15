import * as Accordion from '@radix-ui/react-accordion';
import React, { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import * as ScrollArea from '@radix-ui/react-scroll-area'

import EvolucaoLaranja from '../../assets/images/evolucao-laranja.png';
import { CircularProgress } from '../../components/CircularProgress';
import { Page } from '../../components/Page';
import { TrailsServices } from '../../services/TrailsServices';


export function Trail() {
  const [trailsUser, setTrailsUser] = useState();
  const [nameUser, setNameUser] = useState();
  

  useEffect(() => {
    TrailsServices.getUserTrails()
      .then((response) => {
        setTrailsUser(response.data.trails[0]);
        setNameUser(response.data.name)
     }) .catch((error) => {console.log(error)});
  }, []);

  return (
    <Page.Root>
      <Page.Menu> 
        <div className="flex items-center justify-center">
        <CircularProgress max={100} completed={3}/>
        <p className='ml-5 font-normal text-xs text-contrast-300 sm:text-base'> 3 de 100 conteúdos concluídos</p>
        </div>
      </Page.Menu>
      <Page.Content>
        <div className="w-screen h-screen flex flex-col  bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] p-6 sm:py-14 sm:px-16">
          <section className="flex flex-col items-center sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-base font-bold uppercase bg-contrast my-4 text-contrast-300 sm:text-xl ">
               Oi, {nameUser} 
              </h3>
              <h2 className="text-base font-medium bg-contrast my-4 text-contrast-300 sm:text-xl">VOCÊ ESTÁ NA TRILHA DE {trailsUser?.title}</h2>
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
            className="
            bg-gray-200 dark:bg-gray-600 w-full rounded-2xl border-[1px] border-gray-900
              overflow-clip mt-10
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
          <div className="scroll-smooth">
            {trailsUser?.modules.map(module =>
                    <Accordion.Item   value={module.title} className="w-full border-t-[1px] border-gray-900">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex justify-between items-center text-contrast-100 py-4 px-8" asChild>
                        <div>
                          <div>
                            <sup className="text-xs font-medium">MODULO</sup>
                            <h4 className="text-base font-medium">{module.title}</h4>
                          </div>

                          <CircularProgress max={module.progress.max} completed={module.progress.completed} />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    {module.subjects.map(subject =>
                          <Accordion.Content className="border-t-[1px] border-gray-900">
                            <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                              <div>
                                <sup id="assunto"  className="text-xs font-medium">ASSUNTO</sup>
                                <h4 className="text-base font-medium">{subject.title}</h4>
                              </div>

                              <CircularProgress max={subject.progress.max} completed={subject.progress.completed} />
                            </div>
                          </Accordion.Content>
                    )}
                  </Accordion.Item>
            )}
</div>





            {/* <Accordion.Item value="item-1" className="w-full border-t-[1px] border-gray-900">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center text-contrast-100 py-4 px-8" asChild>
                  <div>
                    <div>
                      <sup className="text-xs font-medium">Teste</sup>
                      <h4 className="text-base font-medium">O início</h4>
                    </div>

                    <CircularProgress max={17} completed={15} />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="border-t-[1px] border-gray-900">
                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup id="assunto"  className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">Migração de carreira</h4>
                  </div>

                  <CircularProgress max={10} completed={2} />
                </div>

                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">Culture Code</h4>
                  </div>

                  <CircularProgress max={1} completed={0} />
                </div>

                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">Product Owner e Scrum Master</h4>
                  </div>

                  <CircularProgress max={4} completed={0} />
                </div>

                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">Desenvolvimento</h4>
                  </div>

                  <CircularProgress max={4} completed={0} />
                </div>

                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">UX Design</h4>
                  </div>

                  <CircularProgress max={4} completed={0} />
                </div>

              </Accordion.Content>
            </Accordion.Item> */}
          </Accordion.Root>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
