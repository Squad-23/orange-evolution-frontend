import FCamaraLogo from '../assets/fcamara-logo.svg'
import InstagramLogo from '../assets/instagram-icon.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import YouTubeLogo from '../assets/youtube-icon.svg'

export function Footer(){
    return(
        <div className="bg-gray-100 w-screen h-80">
            <div className="bg-yellow-700">
                <div className="bg-red-800 flex ">
                    <img src={ FCamaraLogo} alt="Logo FCamara" />
                        <div className="bg-blue-600 flex flex-row">
                            <img src={ YouTubeLogo} alt="" />
                            <img src={ InstagramLogo } alt="" />
                            <img src={ LinkedInLogo } alt="" />  
                        </div>
                </div>
            </div>
        </div>
)
}