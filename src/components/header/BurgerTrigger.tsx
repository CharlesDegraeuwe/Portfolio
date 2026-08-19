export default function BurgerButton() {
    const handleClick = () => {
        console.log("burger clicked");
    };

    return (
        <button onClick={handleClick} id="header_burger_btn">
            <div />
            <div />
        </button>
    );
}