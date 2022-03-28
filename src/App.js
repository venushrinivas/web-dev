import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import ExploreScreen from "./components/tuiter/explore-screen";
import HomeScreen from "./components/tuiter/home-screen";
import Tuiter from "./components/tuiter";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index exact={true} element={<Labs/>}/>
                      <Route path="hello" exact={true} element={<HelloWorld/>}/>
                      <Route path="labs" exact={true} element={<Labs/>}/>
                      <Route path="tuiter" element={<Tuiter/>}>
                          <Route index element={<HomeScreen/>}/>
                          <Route path="home" element={<HomeScreen/>}/>
                          <Route path="explore" exact={true} element={<ExploreScreen/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
