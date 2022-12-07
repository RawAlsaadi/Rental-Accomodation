// import Menu from './Menu';
import MainNav from './MainNav.js'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          Logo
        </Link>
        <MainNav /> 
        {/* <Menu /> */}
      </div>
    </header>
  );
};

export default Header;