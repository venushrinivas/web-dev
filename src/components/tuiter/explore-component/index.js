import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <>
            <div>
                <div className="wd-search-input-div d-inline-block">
                    <i className="wd-padding-13 fas fa-search"/>
                    <input className="wd-search-input" type="text" placeholder="Search Tuiter"/>
                </div>
                <a className="wd-float-right pt-1" href="explore-settings.html">
                    <i className="fas fa-cog fa-2x"/>
                </a>
            </div>
            <div>
                <ul className="nav nav-tabs mt-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-sm-none d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className='position-relative'>
                <img className="pt-1" src="/tuiter/assets/images/starship.jpeg" width="100%" alt=""/>
                <h2 className="wd-image-text ps-2">SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </>
    )
}
export default ExploreComponent;