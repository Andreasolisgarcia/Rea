import LinkedIn from '/linkedin.svg';
import GitLogo from '/GitLogo.svg';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li className='social_media_logos'>
                <img src={LinkedIn} alt="LinkedIn Logo" />
                <img src={GitLogo} alt="Git Logo" />
                </li>
                <li className='page_name'>rea.dev</li>
                <li className='copyright'>©Andrea Solis</li>
            </ul>
        </footer>
    );
};

export default Footer;