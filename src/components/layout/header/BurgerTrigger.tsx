import {type SetStateAction, useState} from "react";

interface BurgerButtonProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
    const {isOpen, setIsOpen} = props;
    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <button
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
