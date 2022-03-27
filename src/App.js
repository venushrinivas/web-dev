import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import ExploreScreen from "./components/tuiter/explore-screen";
import HomeScreen from "./components/tuiter/home-screen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                  <Route path="/" exact={true} element={<Labs/>}/>
                  <Route path="/tuiter/explore" exact={true} element={<ExploreScreen/>}/>
                  <Route path="/tuiter/home" exact={true} element={<HomeScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
