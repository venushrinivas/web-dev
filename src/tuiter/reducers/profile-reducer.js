const ProfileReducer = (state = {
    firstName: 'Venu Shrinivas',
    lastName: 'Ramakrishnan',
    handle: '@venushrinivas',
    profilePicture: '/tuiter/assets/images/nypost.png',
    bannerPicture: '/tuiter/assets/images/img_2.png',
    bio: 'Graduate Student, Software Engineer, Tech Enthusiast.',
    website: 'https://www.linkedin.com/in/venushrinivas/',
    location: 'Boston, MA',
    dateOfBirth: '1990-04-01',
    dateJoined: '2015-05-01',
    followingCount: 325,
    followersCount: 583,
    tuitCount: 5403
}, action) => {
    switch(action.type) {
        case 'update-profile':
            state = action.currentProfile;
            return state;
        default: return state;
    }
}
export default ProfileReducer;