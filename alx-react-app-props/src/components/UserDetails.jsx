import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div style={{ border: '2px solid purple', padding: '20px', margin: '20px', borderRadius: '5px', backgroundColor: '#f0e6ff' }}>
            <h2 style={{ color: 'purple' }}>User Details (Using Context API)</h2>
            <p style={{ fontSize: '16px' }}><strong>Name:</strong> {userData.name}</p>
            <p style={{ fontSize: '16px' }}><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

export default UserDetails;
