import { Link } from 'react-router-dom';

import OrangeLogo from '../../assets/orange-evolution-logo.svg'
import { ThemeSwitcher } from '../../components/ThemeSwitch';



export function Login() {
  return (
    <body className="bg-dominant-100 w-screen h-screen">
      <div className="bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] w-screen h-screen f">
      <span className="flex flex-row-reverse pr-40 pt-10 pb-8 shadow-">
        <ThemeSwitcher/>
      </span>
      

      <div className="flex mx-[31.8125rem] bg-dominant-100 h-[34.375rem] rounded-2xl py-10 box-border shadow-[10px_13px_8px_rgba(0,0,0,0.2)]">
        <form action="" className="flex flex-col items-center px-8 ">
          
          <img src={OrangeLogo} alt="" className="flex w-[7.5rem] h-[7.5rem] mb-8"/>
            <div className="pb-4"> 
              <span className="text-contrast-200 font-medium ">Email</span>
              <input type='email' className="bg-dominant-200 rounded-[0.25rem] w-[22.375rem] border border-gray-400 py-2 px-2 focus:outline-none" placeholder='user@gmail.com'/>
            </div>

            <div>
              <span className="text-contrast-200 font-medium">Password</span>
              <input type='password' className="bg-dominant-200 rounded-[0.25rem] w-[22.375rem] border border-gray-400 text-contrast-200 py-2 px-2 focus:outline-none"/>
            </div>
          
            <a href="" className="mt-4">Esqueci minha senha</a>
            
            <button type="button" className="w-[22.375rem] h-12 bg-[#00C19C] rounded-2xl mt-4 text-xl text-gray-50 font-semibold">Fazer login</button>
          
        </form>
      </div>
      </div>
      
    </body>
  );
}
