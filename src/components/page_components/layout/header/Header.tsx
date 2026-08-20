import BurgerButton from "./BurgerTrigger.tsx";
import {useRef, useState} from "react";
import BurgerMenu from "./BurgerMenu.tsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const triggerButton = useRef<HTMLButtonElement>(null);
    return (<div id="header_container">
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} triggerButton={triggerButton}/>
        <BurgerMenu isOpen={isOpen} triggerButton={triggerButton} />
    </div>)
}