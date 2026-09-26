
import { Link } from "react-router-dom"
import Button from "./Button"
import { Tent } from "lucide-react";
function NavBar() {


    return (
        <header className="bg-blue-100 p-5 flex gap-2 justify-between items-center shadow-md">
            <Tent size={48} color="blue" />
            <nav>
                <Link to='/' className="text-blue-800 hover:text-blue-900">Home Page</Link>
            </nav>
            <div className="flex gap-2">
                <Button size="sm"><p>Add task</p></Button>
                <Button varient="secondray" size="sm"><p>Contact</p></Button>
            </div>
        </header>
    )
}

export default NavBar
