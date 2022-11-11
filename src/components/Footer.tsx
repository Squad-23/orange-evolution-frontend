import FCamaraLogo from '../assets/fcamara-logo.svg'
import InstagramLogo from '../assets/instagram-icon.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import YouTubeLogo from '../assets/youtube-icon.svg'

export function Footer(){
    return(
        <div className="bg-dominant-100 w-screen h-80">
            <div className="">
                <div className="flex ">
                    <img src={ FCamaraLogo} alt="Logo FCamara" />
                        <div className="flex flex-row">
                            <img src={ YouTubeLogo } alt="" />
                            <img src={ InstagramLogo } alt="" />
                            <img src={ LinkedInLogo } alt="" />  
                        </div>
                </div>
            </div>
        </div>
)
}