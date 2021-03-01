import CarList from './CarList';
import car from '../../imgs/kia.jpg';

export default function LoadingPage() {
  const loggedInUser = localStorage.getItem('jwtoken');
  const welcome = (
    <div className="landing-age">
      <img className="caritemImgCar" src={car} alt="kia" />
      <h2>Welcome to Cars</h2>
      <p>Find your dream car with affordable price.</p>
    </div>
  );

  return (
    <div>
      { loggedInUser ? <CarList /> : welcome }
    </div>
  );
}
