import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     userName: 'Java',
                                     handle: '@Java',
                                     avatar: '/tuiter/assets/images/java.png'
                                 }
                             }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 col-xxl-2 col-xl-2 col-lg-3 col-md-4">
                    <img src={who.avatar} className="wd-radius-64" height="64px" width="64px" alt=""/>
                </div>
                <div className="col-7 col-xxl-7 col-xl-7 col-lg-5 col-md-4 position-relative wd-left-10p">
                    <div className="mt-1 wd-font-bold">
                        <label className="pe-1">{who.userName}</label>
                        <span className="fa-stack fa-1x wd-stack-correction wd-verified-override">
                            <i className="fas fa-circle fa-stack-1x"/>
                            <i className="fas fa-check fa-2xs fa-stack-1x fa-inverse color-black"/>
                        </span>
                    </div>
                    <div className="wd-list-text-override">
                        {who.handle}
                    </div>
                </div>
                <div className="col-3 col-xxl-3 col-xl-3 col-lg-4 col-md-4 d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary wd-tweet-override" type="button">Follow</button>
                </div>
            </div>
        </li>
    )
}
export default WhoToFollowListItem;