import { Link } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";

const Header = ({ currentUser, logOut }: any) => {
    return (
        <HeaderWrapper>
            <nav className="header-container">
                <div className="header-left">
                    <div>
                        <Link to={"/home"}>
                            Home
                        </Link>
                    </div>
                </div>

                {currentUser ? (
                    <div className="header-right">
                        <div>
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </div>
                        <div>
                            <Link to={"/login"} onClick={logOut}>
                                LogOut
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="header-right">
                        <div>
                            <Link to={"/login"}>
                                Login
                            </Link>
                        </div>

                        <div>
                            <Link to={"/register"}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </HeaderWrapper>
    );
};

export default Header;
