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
            <h3 className="text-2xl color font-semibold pt-5 px-6"> { title } </h3>
            <span className="pt-5 px-6 text-base font-medium">Tempo Estimado: { duration }</span>
            <p className="text-xl flex justify-center py-5">{ progress }</p>
            <p className="text-xl left px-5">{ description }</p>   
        </div>
    </div>    
)
}