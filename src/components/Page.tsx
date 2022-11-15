import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { PropsWithChildren } from 'react';
import { HiChevronDown, HiLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import Avatar from '../assets/images/avatar-example.png';
import FCamaraLogo from '../assets/images/fcamara.png';
import OrangeEvolutionLogo from '../assets/images/orange-evolution.png';
import { DiscordIcon } from '../assets/svgs/DiscordIcon';
import { InstagramIcon } from '../assets/svgs/InstagramIcon';
import { LinkedinIcon } from '../assets/svgs/LinkedinIcon';
import { YoutubeIcon } from '../assets/svgs/YoutubeIcon';

import { ThemeSwitcher } from './ThemeSwitch';

function Root({ children }: PropsWithChildren) {
  return <div className="bg-dominant-200 w-full h-full flex flex-col">{children}</div>;
}

function Menu({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className="
        w-full h-20 py-2 px-8 z-10 fixed top-0
        bg-dominant-200 bg-opacity-80 backdrop-blur-md
        border-b-1 border-b-dominant-200
        flex justify-between
      "
      >
        <div className="flex gap-4">
          <Link to="/">
            <img src={OrangeEvolutionLogo} alt="Logo da Orange Evolution" className="w-16 h-16" />
          </Link>

          {children}
        </div>

        <div className="flex justify-between items-center gap-6">
          <a
            href="https://discord.gg/orangejuicetech"
            target="_blank"
            rel="noreferrer"
            className="
            hidden

            py-2 px-6
            rounded-xl bg-brand-green
            sm:flex gap-4 items-center
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

      <div className="mt-20" />
    </>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <section className="relative w-screen z-0">
      <div
        className="
        absolute w-full h-full opacity-30 z-[-1]
        bg-gradient-to-r from-brand-pink-100 to-[#D5FFAB]
        dark:bg-gradient-to-l dark:to-brand-cyan
      "
      />
      {children}
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="
      bg-dominant-100 w-full flex flex-col
      px-16 py-12
      sm:px-28 sm:py-20
    "
    >
      <div
        className="
          flex flex-col items-center gap-4

          flex-1 w-full bg-dominant-100
          sm:flex-row sm:justify-between align-center
        "
      >
        <a href="https://fcamara.com.br/" target="_blank" rel="noreferrer" className="bg-dominant-100">
          <img src={FCamaraLogo} alt="Logo FCamara" className="invert dark:invert-0" />
        </a>
        <p className="text-xs text-contrast-300 font-semibold bg-dominant-100 text-center">
          © 2022 FCamara Formação e Consultoria. Todos os direitos reservados.
        </p>

        <div className="flex flex-row w-full bg-dominant-100 justify-center sm:justify-end sm:w-auto">
          <a href="https://www.youtube.com/c/GrupoFCamara">
            <YoutubeIcon />
          </a>
          <a href="https://www.instagram.com/grupo.fcamara/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://br.linkedin.com/company/grupofcamara" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export const Page = {
  Root,
  Menu,
  Content,
  Footer,
};
