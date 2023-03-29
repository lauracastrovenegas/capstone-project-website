import Button from "./Button";

function Navbar() {
    return (
        <nav>
            <Button isActive={window.location.pathname === "/"} text="Assistive Tech"/>
            <Button isActive={window.location.pathname === "/asl"} text="Learn ASL"/>
        </nav>
    )
}

export default Navbar;