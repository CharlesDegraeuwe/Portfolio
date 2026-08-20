import {type SetStateAction, useState} from "react";

interface BurgerButtonProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    triggerButton: React.RefObject<HTMLButtonElement | null>;
}

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
    const {isOpen, setIsOpen, triggerButton} = props;
    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <button
            ref={triggerButton}
            aria-description={"burger-trigger-button"}
            type={"button"}
            onClick={handleClick}
            className={`header_burger_btn ${isOpen ? "active" : ""}`}
        >
            <div/>
            <div/>
        </button>
    );
}

export default BurgerButton;
