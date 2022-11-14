import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';



export function CircularProgress(){
    return(
        <div className="w-16 h-16 flex items-center justify-center">
            <CircularProgressbar
            value={0.66} maxValue={1} 
            text={`${0.66 * 100}%`}
            styles= {buildStyles({
                rotation: 0.25,
                textSize: '16px',
                strokeLinecap: 'butt',
                pathColor: `rgba(62, 152, 199)`,
                textColor: '#F3F4F6',
                trailColor: '#00C19C',
                backgroundColor: '#00C19C',
        })}/>
        </div>
    )
}