import OrangeLogo from '../../assets/orange-evolution.png'
import { ThemeSwitcher } from '../../components/ThemeSwitch';



export function Login() {
  return (

    <div className="bg-dominant-100 bg-gradient-to-r from-[#FD7AC54D] to-[#D5FFAB80] dark:bg-gradient-to-l p-6 w-screen h-screen flex flex-col justify-center items-center">
      
      <div className="absolute top-10 right-10">
        <ThemeSwitcher/>
      </div>

      <form className="bg-dominant-100 flex flex-col items-center justify-center w-full h-[34.38rem] rounded-2xl p-4 max-w-[22rem] shadow-[10px_13px_8px_rgba(0,0,0,0.2)] mt-10">
        <img src={ OrangeLogo } alt="" className="w-32 h-32" />
          <label className='text-contrast-200 font-semibold flex flex-col w-full pt-8 pb-2'> Email
            <input type="email" placeholder='user@email.com' className="border-[2px] border-gray-400 rounded-[0.25rem] h-10 p-2 focus:outline-none" />
          </label>
          <label className='text-contrast-200 font-semibold flex flex-col w-full'>Password
            <input type="password" placeholder='•••••••••••' className="border-[2px] border-gray-400 rounded-[0.25rem] h-10 p-2"/>
          </label>
      
        {/* feature a ser implementada no futuro */}
        <p className="underline text-[#267CBC] my-6 pr-40 align-center"> Esqueci minha senha</p>
        <button type="button" className="bg-[#00C19C] rounded-2xl  py-3 px-7 w-full text-xl text-gray-50 font-semibold">Fazer login</button>

      </form>
    </div>
  );
}
