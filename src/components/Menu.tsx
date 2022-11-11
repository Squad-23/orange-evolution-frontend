import Avatar from '../assets/avatar.svg'
import DiscordLogo from '../assets/discord-logo.svg'
import Arrow from '../assets/icon-arrow.svg'
import OrangeLogo from '../assets/orange-evolution-logo.svg'


import { ThemeSwitcher } from './ThemeSwitch'


export function Menu() {
    return (
      <div className="w-full h-32">
          <div className="bg-dominant-100">
            <div className="py-3 px-16">

              <div className="flex justify-between">
                <img src={ OrangeLogo } alt="" className="" />
                <div className="flex w-[504px] items-center ">
                  <button type="button" className="rounded-2xl bg-[#00C19C] w-80 h-11 flex justify-center items-center text-white font-bold text-xl mr-6">
                  <img src={ DiscordLogo } alt="Logo Discord" className="mr-3"/>
                    Comunidade Orange
                  </button>
                  <ThemeSwitcher/>
                  <img src={ Avatar } alt="Imagem de avatar" className="ml-6" />
                  <img src={ Arrow } alt="Seta para baixo" />
                </div>
              </div>
            </div>
          </div>
      </div>

)
}
  