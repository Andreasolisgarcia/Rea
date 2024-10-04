import PeaceSign from '/peaceSign.svg'

const Nav = () => {
    return (
        <nav>
            <div className="logo">rea.dev</div>
            <ul className="menu">
                <li><a href='#projects'>Projets</a></li>
                <li><a href='/CV_DEVWEB_SOLIS_Andrea.pgf' download='/CV_DEVWEB_SOLIS_Andrea.pdf'>CV</a></li>
                {/* <a href="mailto:andrea.solisg@gmail.com" class="btn-contact">
                <li>
                Contact <img src={PeaceSign} alt="signe de paix" />   
                </li>
                </a>  */}
            </ul>
            
        </nav>
    );
};

export default Nav;