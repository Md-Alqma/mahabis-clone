
import { Link } from 'react-router-dom';
import './Logo.css';
import mlogo from './mlogo.svg'
function Logo() {
  return (
    <Link to={'/'}><div className='logoDiv'>
    <img src={mlogo} alt="dd" />
    <h1 className='h1'>mahabis</h1>
  </div></Link>
  );
}

export default Logo;
