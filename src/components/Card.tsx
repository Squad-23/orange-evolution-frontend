export interface CardProps {
    title: string;
    banner: string;
    duration: number;
    progress: number;
    description: string;
}

export function Card({ title, banner, description, progress, duration }: CardProps){
    

    return(
    <div className="w-[26.5rem] h-[38.625rem] bg-dominant-100 rounded-2xl flex overflow-clip">
        <div className="flex flex-col">
            <img src={ banner } alt={`${title} banner`} className="w-full"/>
            <h3 className="text-2xl font-semibold"> { title } </h3>
            <span>Tempo Estimado: { duration }</span>
            <p>{ description }</p>
            <p>{ progress }</p>
        </div>
    </div>    
)
}