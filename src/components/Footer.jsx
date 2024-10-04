import LinkedIn from '/linkedin.svg';
import GitLogo from '/GitLogo.svg';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li className='social_media_logos'>
                    <a href="https://www.linkedin.com/in/andrea-solisg">
                    <img src={LinkedIn} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/Andreasolisgarcia">
                    <img src={GitLogo} alt="Git Logo" />
                    </a>
                </li>
                <li className='page_name'>readev</li>
                <li className='copyright'>©Andrea Solis</li>
            </ul>
        </footer>
    );
};

export default Footer;