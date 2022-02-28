import PostSummaryList from '../PostSummaryList';
const ExploreComponent = () => {
    return (`
        <div>
            <div class="wd-search-input-div d-inline-block">
                <i class="wd-padding-13 fas fa-search"></i>
                <input class="wd-search-input" type="text" placeholder="Search Tuiter"/>
            </div>
            <a class="wd-float-right pt-1" href="explore-settings.html">
                <i class="fas fa-cog fa-2x"></i>
            </a>
        </div>
        <div>
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class='position-relative'>
            <img class="pt-1" src="../assets/images/starship.jpeg" width="100%"/>
            <h2 class="wd-image-text ps-2">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `)
}
export default ExploreComponent;