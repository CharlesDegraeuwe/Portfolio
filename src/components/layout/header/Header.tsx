import BurgerButton from "./BurgerTrigger.tsx";
import {useState} from "react";
import BurgerMenu from "./BurgerMenu.tsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (<div id="header_container">
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>)
}