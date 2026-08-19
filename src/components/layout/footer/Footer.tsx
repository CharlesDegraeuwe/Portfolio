const Footer = () => {
    const year = new Date().getFullYear();
    return (<div className={"min-w-0 h-fit flex flex-row items-center justify-end"}>
        <span className={"text-xs opacity-50"}>© 2026 {year != 2026 && "- " + year} Charles Degraeuwe</span>
    </div>)
}
export default Footer;