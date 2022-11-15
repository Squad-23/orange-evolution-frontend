import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

import { Content } from './Content';

export function ContentAccordion() {
  return (
    <Accordion.Root type="multiple" className="p-6 overflow-y-scroll">
      <Accordion.Item
        value="item-1"
        className="bg-dominant-100 w-full rounded-2xl p-4 text-contrast-100 mt-6 first:mt-0"
      >
        <Accordion.Header className="flex items-center relative">
          <Checkbox.Root className="absolute rounded-full h-6 w-6 flex items-center justify-center border-2 radix-state-checked:border-0 border-gray-400 bg-gray-light-100 radix-state-checked:bg-brand-green flex-1">
            <Checkbox.Indicator className="text-white">
              <HiCheck />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <Accordion.Trigger
            className="group flex items-center relative ml-9 radix-state-open:text-brand-green"
            asChild
          >
            <div>
              <h3 className="mr-9 text-base font-normal">
                Guia definitivo de como migrar para UX Design: 5 passos para virar um UX Design
              </h3>
              <HiChevronDown className="absolute right-0 h-6 w-6 group-radix-state-open:rotate-180 transition-transform" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="px-2 flex flex-col gap-6">
          <div className="mt-4 flex flex-col gap-2">
            <span className="flex justify-between items-center">
              Tipo de Conteúdo
              <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">Artigo</strong>
            </span>
            <span className="flex justify-between items-center">
              Fonte
              <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">Orange Juice</strong>
            </span>
            <span className="flex justify-between items-center">
              Duração estimada
              <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">6 min</strong>
            </span>
          </div>

          <Content.Root className="flex sm:hidden">
            <Content.Resume>
              Se você quer saber de uma vez por todas qual é a fórmula mágica para conseguir fazer a migração de
              carreira para UX Design e começar a ganhar rios de dinheiro, este é o artigo para você…só que não.
            </Content.Resume>
            <Content.External />
            <Content.Glossary items={[{ title: 'UX Design', description: 'Design de Experiência do usuário.' }]} />
          </Content.Root>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
