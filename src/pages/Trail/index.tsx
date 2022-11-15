import * as Accordion from '@radix-ui/react-accordion';
import { HiSearch } from 'react-icons/hi';

import EvolucaoLaranja from '../../assets/images/evolucao-laranja.png';
import { CircularProgress } from '../../components/CircularProgress';
import { Page } from '../../components/Page';

export function Trail() {
  return (
    <Page.Root>
      <Page.Menu />
      <Page.Content>
        <div className="w-screen h-screen bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] p-6 sm:py-14 sm:px-16">
          <section className="mt-24 flex flex-col items-center sm:flex-row sm:gap-16">
            <div className="">
              <h3 className="text-base font-medium bg-contrast my-4 text-contrast-300 sm:text-xl ">
                VOCÊ ESTÁ NA TRILHA DE UX/UI DESIGN
              </h3>
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
              overflow-clip
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
            <Accordion.Item value="item-1" className="w-full border-t-[1px] border-gray-900">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center text-contrast-100 py-4 px-8" asChild>
                  <div>
                    <div>
                      <sup className="text-xs font-medium">MÓDULO</sup>
                      <h4 className="text-base font-medium">O início</h4>
                    </div>

                    <CircularProgress max={17} completed={15} />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="border-t-[1px] border-gray-900">
                <div className="flex justify-between items-center text-contrast-100 py-4 px-8 bg-purple-300 bg-opacity-30 border-t-[1px] border-gray-600">
                  <div>
                    <sup className="text-xs font-medium">ASSUNTO</sup>
                    <h4 className="text-base font-medium">Migração de carreira</h4>
                  </div>

                  <CircularProgress max={10} completed={2} />
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
