const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 col-xxl-2 col-xl-2 col-lg-3 col-md-4">
                    <img src="${who.avatar}" class="wd-radius-64" height="64px" width="64px" alt=""/>
                </div>
                <div class="col-7 col-xxl-7 col-xl-7 col-lg-5 col-md-4 position-relative wd-left-10p">
                    <div class="mt-1 wd-font-bold">
                        ${who.userName}
                        ${who.nameIcon}
                    </div>
                    <div class="wd-list-text-override">
                        ${who.handle}
                    </div>
                </div>
                <div class="col-3 col-xxl-3 col-xl-3 col-lg-4 col-md-4 d-flex justify-content-between align-items-center">
                    <button class="btn btn-primary wd-tweet-override" type="button">Follow</button>
                </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem;