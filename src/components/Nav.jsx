import PeaceSign from '/peaceSign.svg'

const Nav = () => {
    return (
        <nav>
            <div className="logo">rea.dev</div>
            <ul className="menu">
                <li>Projets</li>
                <li>CV</li>
                <li className='btn-contact'>Contact <img src={PeaceSign} alt="signe de paix" /></li>
            </ul>
            
        </nav>
    );
};

export default Nav;