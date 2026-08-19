import {type ReactNode, useEffect, useState} from "react";

interface AnimateOnMountProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    show?: boolean;
}

export default function AnimateOnMount({
                                           children,
                                           delay = 0,
                                           className = "",
                                           show = true,
                                       }: AnimateOnMountProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!show) {
            setVisible(false);
            return;
        }
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [show, delay]);

    return (
        <div
            className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
        >
            {children}
        </div>
    );
}
