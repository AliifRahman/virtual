import './App.css';
import RouterPages from './pages/RouterPages';

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
