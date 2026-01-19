import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '20px', border: '2px solid blue', margin: '20px', textAlign: 'center', borderRadius: '5px' }}>
            <h2>Counter Application</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ padding: '10px 15px', margin: '5px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)} style={{ padding: '10px 15px', margin: '5px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>
                Decrement
            </button>
            <button onClick={() => setCount(0)} style={{ padding: '10px 15px', margin: '5px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '4px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;
