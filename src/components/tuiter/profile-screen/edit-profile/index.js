import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const [currentProfile, setProfile] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputChanged = (event, id) => {
        switch(id) {
            case 'firstName':
                setProfile({...currentProfile, firstName: event.target.value});
                break;
            case 'lastName':
                setProfile({...currentProfile, lastName: event.target.value});
                break;
            case 'website':
                setProfile({...currentProfile, website: event.target.value});
                break;
            case 'bio':
                setProfile({...currentProfile, bio: event.target.value});
                break;
            case 'location':
                setProfile({...currentProfile, location: event.target.value});
                break;
            case 'dateofbirth':
                setProfile({...currentProfile, dateOfBirth: event.target.value});
                break;
            default:
                break;
        }
    }
    const save = () => {
        const action = {
            type: 'update-profile',
            currentProfile
        }
        dispatch(action);
        navigate("/tuiter/profile");
    }
    return(
        <>
            <div className="d-flex justify-content-between wd-edit-profile-header">
                <div className="d-flex justify-content-start align-items-center">
                    <Link to="/tuiter/profile">
                        <i className="fa fa-times wd-cursor-pointer"/>
                    </Link>
                    <div className="ps-3 wd-color-white wd-font-bold">
                        Edit Profile
                    </div>
                </div>
                <button onClick={save} className="btn btn-primary justify-content-end wd-tweet-override me-2 mb-1"><label className="fw-bold wd-cursor-pointer">Save</label></button>
            </div>
            <img className="pt-1" src={currentProfile.bannerPicture} width="100%" alt=""/>
            <div className="position-relative wd-profile ps-3">
                <div className="d-flex flex-row justify-content-between">
                    <img className="rounded-circle" src={currentProfile.profilePicture} width="150px" alt=""/>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <input type="text" onChange={(event)=>{inputChanged(event, "firstName")}} className="form-control bg-black text-white border-light" id="firstName" value={currentProfile.firstName}/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <input type="text" onChange={(event)=>{inputChanged(event, "lastName")}} className="form-control bg-black text-white border-light" id="lastName" value={currentProfile.lastName}/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <input type="text" onChange={(event)=>{inputChanged(event, "website")}} className="form-control bg-black text-white border-light" id="website" value={currentProfile.website}/>
                    <label htmlFor="website">Web Site</label>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <textarea onChange={(event)=>{inputChanged(event, "bio")}} className="form-control bg-black text-white border border-light" style={{height: "80px"}} id="bio" value={currentProfile.bio}/>
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <input type="text" onChange={(event)=>{inputChanged(event, "location")}} className="form-control bg-black text-white border-light" id="location" value={currentProfile.location}/>
                    <label htmlFor="location">Location</label>
                </div>
                <div className="form-floating mt-3 wd-edit-form">
                    <input type="date" onChange={(event)=>{inputChanged(event, "dateofbirth")}} className="form-control bg-black text-white border-light" id="dateofbirth" value={currentProfile.dateOfBirth}/>
                    <label htmlFor="dateofbirth">Date of Birth</label>
                </div>
            </div>
        </>
    );
}
export default EditProfile;