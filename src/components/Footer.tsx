import FCamaraLogo from '../assets/fcamara-logo.svg'
import InstagramLogo from '../assets/instagram-icon.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import YouTubeLogo from '../assets/youtube-icon.svg'

export function Footer() {
    return(
        <div className="bg-dominant-100 w-screen h-72">
                <div className="bg-dominant-100 flex items-center justify-evenly space-x-40 w-screen h-72 px-28 align-center ">
                    <a href="https://fcamara.com.br/" target="_blank" rel="noreferrer" className="bg-dominant-100"><img src={ FCamaraLogo } alt="Logo FCamara" /></a>
                        <p className="text-xs text-contrast-300 font-semibold bg-dominant-100">© 2022 FCamara Formação e Consultoria. Todos os direitos reservados.</p>
                        
                        <div className="flex flex-row w-40 h-11 bg-dominant-100">
                            <a href="https://www.youtube.com/c/GrupoFCamara">
                                <img src={ YouTubeLogo } alt="" />
                            </a>
                            <a href="https://www.instagram.com/grupo.fcamara/" target="_blank" rel="noreferrer">        
                                <img src={ InstagramLogo } alt="" />
                            </a>
                            <a href="https://br.linkedin.com/company/grupofcamara" target="_blank" rel="noreferrer">
                                <img src={ LinkedInLogo } alt=""  />  
                            </a>
                        </div>
                </div>
            </div>
)
}