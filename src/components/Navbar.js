import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = (props) => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () =>{
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Notify</h1>
                </Link>
                <nav>
                {user &&(
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user &&(
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;