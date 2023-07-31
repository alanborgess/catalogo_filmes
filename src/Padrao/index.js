import { Outlet } from "react-router-dom"
import Menu from "../Menu/menu"

function Padrao(){
    return(
        <>
        <Menu/>
        <Outlet/>
        </>
    )
}

export default Padrao