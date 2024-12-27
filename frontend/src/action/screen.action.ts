import { NavigateFunction } from "react-router"

export default function responsivePage(setScreen: React.SetStateAction<number|any>){
        return addEventListener("resize", ()=>{
            setScreen(window.innerWidth)
        })
}