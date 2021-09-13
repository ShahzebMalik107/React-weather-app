import Container from "../UI/container/container";
import '../UI/CSS/main.css';
const Header = () => {
    return (
        <header className="header">
            <Container className="header__main">
                <section className="logo">
                    <a href="/"><img src="https://shahzebmalik.com/accets/logo.png" alt="Logo" /></a>
                </section>
                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="https://shahzebmalik.com/#About" target="_blank">About</a></li>
                        <li><a href="https://shahzebmalik.com/#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </Container>

        </header>
    );
}

export default Header;