import { Link } from 'react-router-dom';
import CarList from './CarList';
import car from '../../imgs/kia.jpg';

export default function LoadingPage() {
  localStorage.setItem('signInErr', '');
  const loggedInUser = localStorage.getItem('jwtoken');
  const welcome = (
    <div className="landing-age">
      <h2>Welcome to Cars</h2>
      <img className="caritemImgCar" src={car} alt="kia" />
      <p>Find your dream car with affordable price.</p>
      <div className="sign-links">
        <div><Link to="/SignIn" className="sign-btn">Sign In</Link></div>
        <span>|</span>
        <div><Link to="/SignUp" className="sign-btn">Sign Up</Link></div>
      </div>
    </div>
  );

  return (
    <div>
      { loggedInUser ? <CarList /> : welcome }
    </div>
  );
}
