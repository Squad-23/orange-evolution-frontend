import DiscordLogo from '../assets/discord-logo.svg'
import OrangeLogo from '../assets/orange-evolution-logo.svg'

import { Text } from './Text'
import { ThemeSwitcher } from './ThemeSwitch'


export function Menu() {
    return (
      <div className="bg-gray-100 w-full h-32">
          <div className="bg-gray-100 mx-16 my-3 justify-between">
            <div>
              <img src={ OrangeLogo } alt="Logo Orange Evolution" className="w-100 h-100 flex-grow-0"/>
                <div className="flex justify-end">
                  <button type="button" className="rounded-2xl bg-[#00C19C] w-80 h-11 text-white font-bold text-lg">
                    <div className="flex justify-center">
                      <img src={ DiscordLogo } alt="Logo Discord" className="mr-3"/>
                      <Text>Comunidade Orange</Text>
                    </div>
                  </button>
                  <ThemeSwitcher/>
                  <img src="" alt="" />
                </div>
            </div>

          </div>

      </div>

)}
  