const UserProfile = (props) => {
    return (
        <div style={{ border: '2px solid gray', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'navy', marginTop: 0 }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkblue' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
