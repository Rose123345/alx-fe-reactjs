import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = (props) => {
    const userData = useContext(UserContext);

    // Use context data if available, otherwise use props
    const profileData = userData || props;

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{profileData.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{profileData.age}</span></p>
            <p>Bio: {profileData.bio}</p>
        </div>
    );
};

export default UserProfile;
