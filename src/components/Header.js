import logo from "../logo.svg";
import "../App.css"

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default Header;