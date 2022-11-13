import FCamaraLogo from '../assets/images/fcamara.png';
import { InstagramIcon } from '../assets/svgs/InstagramIcon';
import { LinkedinIcon } from '../assets/svgs/LinkedinIcon';
import { YoutubeIcon } from '../assets/svgs/YoutubeIcon';

export function Footer() {
  return (
    <footer className="bg-dominant-100 w-screen h-72 flex flex-col px-28 py-20">
      <div
        className="
          flex-1 w-full bg-dominant-100
          flex items-center justify-evenly space-x-40 align-center
        "
      >
        <a href="https://fcamara.com.br/" target="_blank" rel="noreferrer" className="bg-dominant-100">
          <img src={FCamaraLogo} alt="Logo FCamara" className="invert dark:invert-0" />
        </a>
        <p className="text-xs text-contrast-300 font-semibold bg-dominant-100">
          © 2022 FCamara Formação e Consultoria. Todos os direitos reservados.
        </p>

        <div className="flex flex-row w-40 h-11 bg-dominant-100">
          <a href="https://www.youtube.com/c/GrupoFCamara">
            <YoutubeIcon />
          </a>
          <a href="https://www.instagram.com/grupo.fcamara/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://br.linkedin.com/company/grupofcamara" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
