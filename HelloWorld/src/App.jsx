import React, { useState } from 'react';

function App() {
    const names = ['Mike', 'Bella', 'Hannah', 'Emma'];
    const [selectedName, setSelectedName] = useState(names[0]);
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage(`Hello - ${selectedName}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <select
                value={selectedName}
                onChange={e => setSelectedName(e.target.value)}
                style={{ marginBottom: '20px', width: '120px', textAlign: 'center' }}
            >
                {names.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            <button onClick={handleClick}>Click me</button>
            <input
                type="text"
                value={message}
                readOnly
                style={{ marginTop: '20px', width: '200px', textAlign: 'center' }}
                placeholder="Message will appear here"
            />
        </div>
    );
}

export default App; 