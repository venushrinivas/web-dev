import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                ${NavigationSidebar('Home')}
            </div>
            <div class="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-mid-content">
                ${PostList()}
            </div>
            <div class="wd-who-to-follow d-none d-xxl-block d-xl-block d-lg-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);