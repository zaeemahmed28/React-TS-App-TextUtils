import { Link } from 'react-router-dom'

interface NavbarProps{
    title: string,
    mode: string,
    toggleFunction: () => void,
}

function NavigationBar({title, mode, toggleFunction}: NavbarProps){

    return(
      <>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                </div>
                <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={toggleFunction} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
      </>  
    );
}

export default NavigationBar;