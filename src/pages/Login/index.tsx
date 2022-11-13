import { Link } from 'react-router-dom';

import OrangeLogo from '../../assets/orange-evolution-logo.svg'
import { ThemeSwitcher } from '../../components/ThemeSwitch';



export function Login() {
  return (
    <div className="bg-dominant-100 w-screen h-screen">
      <div className="bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] w-screen h-screen">
      <span className="flex flex-row-reverse pr-40 pt-10 pb-8">
      <ThemeSwitcher/>
      </span>
      

      <div className="flex mx-[31.8125rem] bg-dominant-100 absolute h-[34.375rem] rounded-2xl py-10 box-border shadow-[10px_13px_8px_rgba(0,0,0,0.2)]">
        
        <form action="" className="flex flex-col px-8 ">
          
          <span className="">
            <img src={ OrangeLogo } alt="Logo Orange Evolution" className="flex w-[7.5rem] h-[7.5rem] mx-32 mb-8"/>
          </span>

            <div className="pb-4"> 
              <span className="text-contrast-200 sm:text-base md: text-base lg:text-base font-semibold">Email</span>
              <input type='email' className="mt-2 bg-dominant-200 rounded-[0.25rem] w-[22.375rem] border-gray-400 border-[2px] py-2 px-2 focus:outline-none" placeholder="user@email.com"/>
            </div>

            <div>
              <span className="text-contrast-200 font-semibold">Password</span>
              <input type='password' className="mt-2 bg-dominant-200 rounded-[0.25rem] w-[22.375rem] border-[2px] border-gray-400 text-contrast-200 py-2 px-2 focus:outline-none" placeholder="•••••••••••"/>
            </div>
          
            
              <button type="button" className="underline text-[#267CBC] text-left my-6 align-center"> Esqueci minha senha</button>

            
            <button type="button" className="w-[22.375rem] h-12 bg-[#00C19C] rounded-2xl text-xl text-gray-50 font-semibold">Fazer login</button>
          
        </form>
      </div>
      </div>
      
    </div>
  );
}
