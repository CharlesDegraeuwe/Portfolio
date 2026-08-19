import AnimateOnMount from "./AnimateOnMount.tsx";
import type {SetStateAction} from "react";


interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
    const {isOpen, setIsOpen} = props;
    return (<div className={`burger_menu ${isOpen ? "burger_active" : ""}`}>
        <div className={"burger_menu_outer_container"}>
            <div>
                <div>
                    <a href="/" onClick={() => setIsOpen(false)}>
                        <AnimateOnMount show={isOpen} delay={550}>
                            Home
                        </AnimateOnMount>
                    </a>
                    <a href="/work" onClick={() => setIsOpen(false)}>
                        <AnimateOnMount show={isOpen} delay={650}>
                            Work
                        </AnimateOnMount>
                    </a>
                    <a href="/blog" onClick={() => setIsOpen(false)}>
                        <AnimateOnMount show={isOpen} delay={750}>
                            Blog
                        </AnimateOnMount>
                    </a>
                </div>
                <div>
                    <span>
                          <AnimateOnMount show={isOpen} delay={550}>
                        FIND ME ELSEWHERE
                          </AnimateOnMount>
                    </span>
                    <a href="" className={"home_a"} >
                        <AnimateOnMount show={isOpen} delay={650}>
                            Instagram
                        </AnimateOnMount>
                    </a>
                    <a href="" className={"home_a"}>
                        <AnimateOnMount show={isOpen} delay={750}>
                            LinkedIn
                        </AnimateOnMount>
                    </a>
                    <a href="" className={"home_a"}>
                        <AnimateOnMount show={isOpen} delay={850}>
                            GitHub
                        </AnimateOnMount>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}

BurgerMenu.displayName = "BurgerMenu"
export default BurgerMenu;
