import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";
import NavigationSideBar from "./navigation-side-bar";
import WhoToFollow from "./who-to-follow";
import {useLocation} from 'react-router-dom';
import whoReducer from "../../tuiter/reducers/who-reducer";
import tuitsReducer from "../../tuiter/reducers/tuits-reducer";
import profileReducer from "../../tuiter/reducers/profile-reducer";
const reducers = combineReducers({tuits: tuitsReducer, who: whoReducer, profile: profileReducer})
const store = createStore(reducers);
const Tuiter = () => {
    const location = useLocation();
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSideBar current_page={location.pathname}/>
                </div>
                <div className="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-mid-content">
                    <Outlet/>
                </div>
                <div
                    className="wd-who-to-follow d-none d-xxl-block d-xl-block d-lg-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <WhoToFollow/>
                </div>
            </div>
        </Provider>
    )
};

export default Tuiter;