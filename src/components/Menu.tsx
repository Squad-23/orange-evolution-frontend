import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HiChevronDown, HiLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import Avatar from '../assets/images/avatar-example.png';
import OrangeEvolutionLogo from '../assets/images/orange-evolution.png';
import { DiscordIcon } from '../assets/svgs/DiscordIcon';

import { ThemeSwitcher } from './ThemeSwitch';

export function Menu() {
  return (
    <div
      className="
        w-full h-20 py-2 px-8 z-10 fixed
        bg-dominant-200 bg-opacity-80 backdrop-blur-md
        border-b-1 border-b-dominant-200
        flex justify-between
      "
    >
      <Link to="/">
        <img src={OrangeEvolutionLogo} alt="Logo da Orange Evolution" className="w-16 h-16" />
      </Link>

      <div className="flex justify-between items-center gap-6">
        <a
          href="https://discord.gg/orangejuicetech"
          target="_blank"
          rel="noreferrer"
          className="
            py-2 px-6
            rounded-xl bg-brand-green
            flex gap-4 items-center
            text-white font-bold text-xl
            hover:bg-teal-600
          "
        >
          <DiscordIcon />
          Comunidade Orange
        </a>

        <ThemeSwitcher />

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex gap-1 items-center rounded-full" aria-label="Opções de Usuário">
              <img src={Avatar} alt="Imagem de avatar" className="w-12 h-12" />

              <HiChevronDown
                className="
                  text-contrast-200 text-2xl
                "
              />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal className="mt-2">
            <DropdownMenu.Content className="bg-white rounded-md shadow p-1 mr-5 z-10">
              <DropdownMenu.Item className="flex gap-2 items-center py-1 px-3">
                <HiLogout />
                Sair da conta
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
