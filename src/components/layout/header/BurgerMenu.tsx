import AnimateOnMount from "./AnimateOnMount.tsx";
import type {SetStateAction} from "react";


interface BurgerMenuProps {
    isOpen: boolean;
    triggerButton: React.RefObject<HTMLButtonElement | null>;
}

const OPTIONS = [
    {
        href: "/",
        label: "home",
        delay: 550
    },
    {
        href: "/about",
        label: "about",
        delay: 650
    },
    {
        href: "/work",
        label: "work",
        delay: 750
    },
]
const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
    const {isOpen, triggerButton} = props;
    const toggleTrigger = () => {
        if(triggerButton.current) {
            triggerButton.current.click();
        }
    }
    return (<div className={`burger_menu ${isOpen ? "burger_active" : ""}`}>
        <div className={"burger_menu_outer_container"}>
            <div>
                <div>
                    {
                        OPTIONS.map((option, index) => (
                            <a href={option.href} onClick={() => toggleTrigger}>
                                <AnimateOnMount show={isOpen} delay={option.delay} className={"capitalize"}>
                                    {option.label}
                                </AnimateOnMount>
                            </a>
                        ))
                    }
                </div>
                <div>
                    <span>
                          <AnimateOnMount show={isOpen} delay={550}>
                        FIND ME ELSEWHERE
                          </AnimateOnMount>
                    </span>
                    <a href="https://www.instagram.com/charles.dgrw/" className={"home_a"}>
                        <AnimateOnMount show={isOpen} delay={650}>
                            Instagram
                        </AnimateOnMount>
                    </a>
                    <a href="https://www.linkedin.com/in/charles-degraeuwe-6293a1333/" className={"home_a"}>
                        <AnimateOnMount show={isOpen} delay={750}>
                            LinkedIn
                        </AnimateOnMount>
                    </a>
                    <a href="https://github.com/CharlesDegraeuwe" className={"home_a"}>
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
