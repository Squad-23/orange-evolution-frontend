import { Link } from 'react-router-dom';


export function Login() {


  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-[#ffa000] text-5xl font-extrabold">Orange Evolution </h1>
        <div className="m-5 p-5 box-border">
          <div className="h-full">
            <div className="bg-gradient-to-br from-[#ff5a23] to-[#ffa000] backdrop-blur-3xl  w-max rounded-3xl overflow-hidden p-77-55-33-95 shadow-xl">
              
              <form className="w-full p-10">
                <span className="text-3xl font-black text-white flex center justify-center mb-10">Bem-vindo </span>
                
                <div className="w-full relative border-orange-700 bottom-2 border-solid mb-3">
                  <input 
                    className="bg-white justify-center top-5 rounded-md ml-3"
                    type="email"
                    
                    />
                    <span className="absolute block w-full h-full top-0 left-0 text-lg pointer-events-none" data-placeholder="Email">Email </span>
              </div>

              <div className="w-full relative mb-3">
                <input 
                  className="text-[15px] ml-3"
                  type="password"
                  
                  />
                <span className="absolute block w-full h-full top-0 left-0 pointer-events-none" data-placeholder="Password"> Senha </span>
              </div>
              
              <div className="flex justify-center align-center pb-13">
                <button type="button" className="text-[15px] border-solid border-r-10 rounded-md shadow-2xl mt-5 uppercase bg-indigo-900 justify-center align-center  w-40 h-12">Login</button>
              </div>

              <div className="flex justify-center align-center mt-12">
                <span className="p-5">Não possui conta?</span>
                
                <a className="text[15] p-5" href="https://github.com/">Criar conta</a>
                </div>


              </form>
            </div>
          </div>
      </div>

      <Link to="/" className="bg-slate-900 px-8 py-2 rounded text-white">
        Trocar de página
      </Link>
    </div>
  );
}
