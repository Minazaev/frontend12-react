import Logo from '../components/Logo';
import Menu from '../components/Menu';

function Header() {
  return (
    <div className="container">
        <div className='header'>
            <Logo></Logo>
            <Menu></Menu>
        </div>
    </div>
  );
}

export default Header;
