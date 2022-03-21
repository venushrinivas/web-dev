import React from "react";
import NavigationSideBar from "../navigation-side-bar";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                <NavigationSideBar current_page={'Home'}/>
            </div>
            <div className="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-mid-content">
                <PostList/>
            </div>
            <div
                className="wd-who-to-follow d-none d-xxl-block d-xl-block d-lg-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <PostSummaryList/>
            </div>
        </div>
    )
};
export default HomeScreen;