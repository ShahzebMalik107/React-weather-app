import '../UI/CSS/main.css'
import Container from '../UI/container/container';

const Footer =()=>{
    return(
        <footer className="footer">
            <Container className="footer__main">
                <div className="footer__main__follow">
                    <h2>Follow Me</h2>
                    <ul>
                        <li><a href="https://github.com/ShahzebMalik107">GitHub</a></li>
                        <li><a href="https://codepen.io/shahzebmalik">CodePen</a></li>
                        <li><a href="https://www.linkedin.com/in/shahzeb-malik-632533180/">Linkedin</a></li>
                    </ul>
                </div>
                <div className="Contact_Me">
                    <h2>Contact Me</h2>
                    <ul>
                        <li><a href="tal:03165977334">P: +92-136-5977334</a></li>
                        <li><a href="mailto:shahzebworks@gmail.com">shahzebworks@gmail.com</a></li>
                    </ul>
                </div>
            </Container>
            <div className="footer__bottom">
                    <p>Build By <a href="https://shahzebmalik.com" target="_blank">Shahzeb Malik</a></p>
                </div>
        </footer>
    );
}

export default Footer;