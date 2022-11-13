import { useContext } from "react"

import { ThemeContext } from "../contexts/theme"

export function InstagramIconSVG() {
    const { theme } = useContext(ThemeContext);
    const treeColor = theme === "light" ? "#111827" : "#D2D5DA" ;


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="45"
      fill="none"
      viewBox="0 0 44 45"
    >
      <path
    
        d="M21.995 31.875c-2.561 0-2.863-.014-3.863-.057a6.864 6.864 0 01-2.274-.468 4.805 4.805 0 01-2.739-2.735 6.843 6.843 0 01-.436-2.274c-.058-.996-.058-1.322-.058-3.86 0-2.564.014-2.864.058-3.857a6.844 6.844 0 01.437-2.27 4.796 4.796 0 012.74-2.736 6.809 6.809 0 012.274-.437c.995-.056 1.322-.056 3.86-.056 2.583 0 2.88.014 3.863.056.78.015 1.55.163 2.28.437a4.8 4.8 0 012.741 2.736c.279.737.427 1.517.439 2.305.058.996.058 1.321.058 3.858 0 2.536-.015 2.869-.058 3.853a6.852 6.852 0 01-.438 2.276 4.81 4.81 0 01-2.742 2.736 6.89 6.89 0 01-2.276.436c-.994.057-1.32.057-3.866.057zm-.036-17.104c-2.546 0-2.81.012-3.805.057a5.2 5.2 0 00-1.737.323 3.11 3.11 0 00-1.79 1.78 5.208 5.208 0 00-.324 1.754c-.055 1.007-.055 1.271-.055 3.796 0 2.495.01 2.798.055 3.799.01.593.119 1.18.324 1.736a3.112 3.112 0 001.79 1.779 5.128 5.128 0 001.737.323c1.008.058 1.273.058 3.805.058 2.554 0 2.819-.012 3.805-.058a5.175 5.175 0 001.738-.323 3.12 3.12 0 001.78-1.777 5.234 5.234 0 00.324-1.755h.012c.044-.994.044-1.259.044-3.798 0-2.54-.011-2.807-.056-3.8a5.248 5.248 0 00-.324-1.734 3.12 3.12 0 00-1.78-1.78 5.153 5.153 0 00-1.738-.323c-1.007-.057-1.27-.057-3.805-.057zm.036 12.512a4.813 4.813 0 01-4.449-2.964 4.801 4.801 0 011.04-5.239 4.818 4.818 0 015.246-1.044 4.806 4.806 0 012.973 4.44 4.816 4.816 0 01-4.81 4.807zm0-7.928a3.121 3.121 0 00-3.123 3.119 3.121 3.121 0 003.123 3.119 3.121 3.121 0 003.123-3.119 3.128 3.128 0 00-3.123-3.119zm4.997-.741a1.121 1.121 0 11.007-2.243 1.121 1.121 0 01-.007 2.243z"
        fill={treeColor}
      />
    </svg>
  );
}