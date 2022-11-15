import { Link } from 'react-router-dom';

import BannerQA from '../assets/images/banner-qa.png';
import type { UserTrail } from '../types/trails';
import { convertMinutesToHours } from '../utils/convertMinutesToHours';

export interface CardProps {
  trail: UserTrail;
}

export function Card({ trail }: CardProps) {
  const { id, description, duration, progress, title } = trail;

  const percentageProgress = Math.floor(progress.completed > 0 ? (progress.completed / progress.max) * 100 : 0);

  return (
    <Link
      to={`/trail/${id}`}
      className="
        flex-1 rounded-2xl overflow-clip
        bg-gray-light-300 dark:bg-gray-dark-100 text-contrast-200 shadow-md
        flex flex-col

        transition-transform cursor-pointer
        hover:-translate-y-4 hover:shadow-2xl
        focus:-translate-y-4 focus:shadow-2xl
      "
    >
      <img src={BannerQA} alt={`${title} banner`} className="w-full h-44 object-cover" />

      <div className="p-6 flex flex-col gap-5">
        <h3 className="text-2xl color font-semibold"> {title} </h3>
        <span className="text-base font-medium">Tempo Estimado: {convertMinutesToHours(duration)}</span>

        <div
          aria-label="Seu progresso na trilha"
          className="w-full h-8 bg-white bg-opacity-30 rounded-full overflow-clip relative"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
            {progress.completed}/{progress.max} módulos
          </span>
          <div
            className="
              h-full bg-brand-orange-400
              text-base font-medium text-blue-100 text-center
              p-0.5 leading-none
            "
            style={{ width: `${percentageProgress}%` }}
          />
        </div>

        <p className="text-xl">{description}</p>
      </div>
    </Link>
  );
}
