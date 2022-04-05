import React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const options2 = { year: 'numeric', month: 'long' };
    const navigate = useNavigate();
    return(
        <>
            <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-arrow-left wd-cursor-pointer" onClick={()=>{navigate(-1)}}/>
                <div className="ps-3">
                    <div className="wd-color-white wd-font-bold">
                        {profile.firstName+" "+profile.lastName}
                    </div>
                    <div className="wd-gray-text">
                        {profile.tuitCount} Tuits
                    </div>
                </div>
            </div>
            <img className="pt-1" src={profile.bannerPicture} width="100%" alt=""/>
            <div className="position-relative wd-profile ps-3">
                <div className="d-flex flex-row justify-content-between">
                    <img className="rounded-circle" src={profile.profilePicture} width="150px" alt=""/>
                    <Link to="edit-profile">
                        <button className="btn btn-primary justify-content-end wd-tweet-override mt-3 me-3 wd-edit-button"><label className="fw-bold wd-cursor-pointer">Edit Profile</label></button>
                    </Link>
                </div>
                <div className="pt-2" style={{paddingLeft: '4px'}}>
                    <div className="wd-color-white h5 wd-font-bold mb-0">
                        {profile.firstName+" "+profile.lastName}
                    </div>
                    <div className="wd-gray-text">
                        {profile.handle}
                    </div>
                    <div className="mb-3">
                        <a href={profile.website} target="_blank">
                            {profile.website}
                        </a>
                    </div>
                    <div className="wd-color-white">
                        {profile.bio}
                    </div>
                    <div className="pt-2 d-flex">
                        <div className="wd-gray-text">
                            <i className="fas fa-map-marker-alt pe-1"/>
                                {profile.location}
                        </div>
                        <div className="wd-gray-text ps-3">
                            <i className="fas fa-birthday-cake pe-1"/>
                            {'Born ' + new Date(profile.dateOfBirth).toLocaleDateString('en-US',options)}
                        </div>
                        <div className="wd-gray-text ps-3">
                            <i className="fas fa-calendar-alt pe-1"/>
                            {'Joined ' + new Date(Date.parse(profile.dateJoined)).toLocaleDateString('en-US',options2)}
                        </div>
                    </div>
                    <div className="d-flex pt-2">
                        <div>
                            <label className="wd-font-bold wd-color-white">
                                {profile.followingCount}
                            </label>
                            <label className="ps-1 wd-gray-text">
                                Following
                            </label>
                        </div>
                        <div className="ps-3">
                            <label className="wd-font-bold wd-color-white">
                                {profile.followersCount}
                            </label>
                            <label className="ps-1 wd-gray-text">
                                Followers
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;