/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { useContext } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

import { TrailContext } from '../../contexts/trails';
import { UserContext } from '../../contexts/user';
import type { UserContent } from '../../types/trails';
import { convertMinutesToHours } from '../../utils/convertMinutesToHours';

import { Content } from './Content';

interface ContentAccordionProps {
  contents: UserContent[];
  setContent?: React.Dispatch<React.SetStateAction<UserContent>>;
}

export function ContentAccordion({ contents, setContent }: ContentAccordionProps) {
  const { privateApi, user } = useContext(UserContext);
  const { getUserTrails } = useContext(TrailContext);

  return (
    <Accordion.Root type="multiple" className="p-6 overflow-y-auto w-full">
      {contents.map((content, index) => (
        <Accordion.Item
          value={`item-${String(index + 1)}`}
          key={`item_${String(index)}`}
          className="bg-dominant-100 w-full rounded-2xl p-4 text-contrast-100 mt-6 first:mt-0"
        >
          <Accordion.Header className="flex items-center relative">
            <Checkbox.Root
              defaultChecked={content.completed}
              className="absolute rounded-full h-6 w-6 flex items-center justify-center border-2 radix-state-checked:border-0 border-gray-400 bg-gray-light-100 radix-state-checked:bg-brand-green flex-1"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => {
                await privateApi.patch(`/user/${user.id}/content`, { idContent: content.id });
                getUserTrails();
              }}
            >
              <Checkbox.Indicator className="text-white">
                <HiCheck />
              </Checkbox.Indicator>
            </Checkbox.Root>

            <Accordion.Trigger
              className="group flex items-center relative ml-9 radix-state-open:text-brand-green"
              asChild
            >
              <div className="w-full">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <h3
                  onClick={() => (setContent ? setContent(content) : {})}
                  className="mr-9 text-base font-normal cursor-pointer w-full"
                >
                  {content.title}
                </h3>
                <HiChevronDown className="absolute right-0 h-6 w-6 group-radix-state-open:rotate-180 transition-transform" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="px-2 flex flex-col gap-6">
            <div className="mt-4 flex flex-col gap-2">
              <span className="flex justify-between items-center">
                Tipo de Conteúdo
                <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">{content.fileType}</strong>
              </span>
              <span className="flex justify-between items-center">
                Fonte
                <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">{content.source}</strong>
              </span>
              <span className="flex justify-between items-center">
                Duração estimada
                <strong className="ml-2 py-1 px-2 bg-gray-500 bg-opacity-20 rounded">
                  {convertMinutesToHours(content.time)}
                </strong>
              </span>
            </div>

            <Content.Root className="flex sm:hidden">
              <Content.Resume>{content.abstract}</Content.Resume>
              <Content.External href={content.link} />
              <Content.Glossary items={[{ title: 'UX Design', description: 'Design de Experiência do usuário.' }]} />
            </Content.Root>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
