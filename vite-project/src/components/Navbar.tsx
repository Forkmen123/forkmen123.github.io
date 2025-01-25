import { NavLink } from 'react-router-dom';
import Button from './Button'
import ScrollComponent from '../components/scrolltest'

const Navbar = () => {
  return (
    <>
      <nav className='sticky-top' style={{backgroundColor:'#F7FEF7'}}>
        <h2><NavLink to="/">TR</NavLink></h2>
      
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <div className="vr"></div>
          <NavLink to="/projets">
            <li>Projets</li>
          </NavLink>
          <div className="vr"></div>
          <NavLink to="/about">
            <li>À propos</li>
          </NavLink>

            <ScrollComponent />

        </ul>
        <NavLink to="/contact">
          <Button>Contacter</Button>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar