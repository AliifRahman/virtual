import logo from './logo.svg';
import './App.css';
import ListRoom from './pages/user/ListRoom/ListRoom';
import Home from './pages/user/Home/Home';
import RegisterRoom from './pages/user/RegisterRoom/RegisterRoom';
import RouterPages from './pages/RouterPages';
import DetailRoom from './pages/user/DetailRoom/DetailRoom';
import Cart from './pages/user/Purchase/Cart';
import Complete from './pages/user/Purchase/Complete';
import WishList from './pages/user/WishList/WishList';
import HomeSeller from './pages/seller-section/Home'


function App() {
  return (
    <div className="App">
      <RouterPages />
    </div>
  );
}


//External Link JS
document.writeln("<script type='text/javascript' src='assets/user/js/main.js'></script>");
document.writeln("<script type='text/javascript' src='assets/user/assets/validate.js'></script>");
document.writeln("<script type='text/javascript' src='http://maps.googleapis.com/maps/api/js'></script>");
document.writeln("<script type='text/javascript' src='assets/user/js/markerclusterer.js'></script>");
document.writeln("<script type='text/javascript' src='assets/user/js/map_tours_half_screen.js'></script>");
document.writeln("<script type='text/javascript' src='assets/user/js/infobox.js'></script>");

export default App;
