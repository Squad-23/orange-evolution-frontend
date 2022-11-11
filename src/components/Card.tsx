import ImageCard from '../assets/image-card-ux-ui.svg'


export function Card(){
    return(
    <div className="w-[425px] h-[618px] bg-[#D9D9D9] rounded-2xl flex">
        <div className="flex flex-col">
            <img src={ ImageCard } alt="Ux/Ui" className="w-100 px-2 "/>
            <div className="">UX/UI Design</div>
        </div>
            



    </div>    
)
}