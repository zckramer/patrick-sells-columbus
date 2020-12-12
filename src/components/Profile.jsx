import profilePicture from '../media/profile.jpg';

const Profile = () => {
    return (
        <div className="Profile-Panel">
        <div className="Profile-Panel__Picture">
            <img src={profilePicture} alt="Patrick Powell" />
        </div>
        <div className="Profile-Panel__Intro">
            <p>
                Thank you for your interest in me! This is where an introduction will go. 
                Here you can place your mission statement and tout some numbers, statistics, and name-drops...
            </p>
        </div>
    </div>

    )
}
export default Profile;