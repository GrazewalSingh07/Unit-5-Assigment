import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar=()=>
{
    return (<div>
        <div className="navbar">
            <div className="product">
                <Link className="link" to={`/product`}>
                Product page
                </Link>
            </div>
            <div className="login">Login</div>
            <div className="signup">Signup</div>
        </div>
    </div>)
}