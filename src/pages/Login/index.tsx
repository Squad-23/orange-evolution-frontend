import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OrangeLogo from '../../assets/images/orange-evolution.png';
import { Page } from '../../components/Page';
import { ThemeSwitcher } from '../../components/ThemeSwitch';
import { UserContext } from '../../contexts/user';

export function Login() {
  const [email, setEmail] = useState<string>('maria@gmail.com');
  const [password, setPassword] = useState<string>('maria');
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setAuthenticating(true);

    try {
      const user = await login(email, password);

      if (user) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Algo deu errado, tente novamente!');
      setAuthenticating(false);
    }
  };

  return (
    <Page.Root>
      <Page.Content>
        <div className="p-6 w-screen h-screen flex flex-col justify-center items-center">
          <div className="absolute top-10 right-10">
            <ThemeSwitcher />
          </div>

          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="bg-dominant-100 flex flex-col items-center justify-center w-full h-[34.38rem] rounded-2xl p-6 max-w-[26rem] shadow-[10px_13px_8px_rgba(0,0,0,0.2)] mt-10"
          >
            <img src={OrangeLogo} alt="" className="w-32 h-32" />
            <label className="text-contrast-200 font-semibold flex flex-col w-full pt-8 pb-2">
              Email
              <input
                type="email"
                placeholder="user@email.com"
                className="border-[2px] border-gray-400 rounded-[0.25rem] h-10 px-2 py-4 bg-white bg-opacity-30"
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </label>
            <label className="text-contrast-200 font-semibold flex flex-col w-full">
              Password
              <input
                type="password"
                placeholder="•••••••••••"
                className="border-[2px] border-gray-400 rounded-[0.25rem] h-10 p-2 bg-white bg-opacity-30"
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
              />
            </label>

            {/* feature a ser implementada no futuro */}
            <span className="underline text-[#267CBC] dark:text-blue-300 my-6 w-full">Esqueci minha senha</span>
            <button
              type="submit"
              className="rounded-2xl bg-brand-green hover:bg-teal-600 py-3 px-7 w-full text-xl text-gray-50 font-semibold disabled:opacity-50"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={handleSubmit}
              disabled={authenticating}
            >
              {authenticating ? 'Autenticando...' : 'Fazer login'}
            </button>

            <span className="text-red-400 mt-6 text-center">{error}</span>
          </form>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
