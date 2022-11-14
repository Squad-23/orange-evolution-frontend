import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

interface CircularProgressProps {
  max: number;
  completed: number;
}

export function CircularProgress({ max, completed }: CircularProgressProps) {
  return (
    <div className="h-16 w-16">
      <CircularProgressbarWithChildren
        className="fill-red-600"
        value={(completed / max) * 100}
        strokeWidth={8}
        styles={buildStyles({
          trailColor: '#00C19C30',
          pathColor: `#00C19C`,
          textColor: '#f88',
          backgroundColor: '#3e98c7',
          strokeLinecap: 'round',
        })}
      >
        <span className="text-sm">
          {completed}/{max}
        </span>
      </CircularProgressbarWithChildren>
    </div>
  );
}
