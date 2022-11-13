import { useContext } from "react"

import { ThemeContext } from "../contexts/theme"

export function LinkedinIconSVG() {

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
        fill={ treeColor }
        fillRule="evenodd"
        d="M16.812 15.653c0 1.038-.79 1.877-2.025 1.877-1.188 0-1.978-.84-1.953-1.877-.025-1.088.765-1.903 1.976-1.903 1.212 0 1.978.815 2.002 1.903zM12.933 31.1V19.014h3.756v12.085h-3.756zM19.7 22.87c0-1.507-.05-2.792-.1-3.855h3.263l.173 1.656h.074c.495-.767 1.73-1.927 3.732-1.927 2.471 0 4.325 1.631 4.325 5.189V31.1H27.41v-6.698c0-1.558-.544-2.62-1.903-2.62-1.038 0-1.656.717-1.902 1.408-.1.248-.149.593-.149.94v6.97h-3.756v-8.23H19.7z"
        clipRule="evenodd"
      />
    </svg>
  );
}
