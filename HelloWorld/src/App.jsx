import React, { useState } from 'react';

function App() {
    const names = ['Mike', 'Bella', 'Hannah', 'Emma'];
    const [selectedName, setSelectedName] = useState(names[0]);
    const [message, setMessage] = useState('');

    // Chat state
    const [chatInput, setChatInput] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [chatOpen, setChatOpen] = useState(false);

    const funnyReplies = [
        "I'm not lazy, I'm on energy-saving mode!",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I would tell you a joke about construction, but I'm still working on it.",
        "Did you just say something? Sorry, I was busy talking to myself.",
        "I'm not arguing, I'm just explaining why I'm right.",
        "If at first you don’t succeed, skydiving is not for you.",
        "I’m on a seafood diet. I see food and I eat it!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'"
    ];

    const handleClick = () => {
        setMessage(`Hello - ${selectedName}`);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userMsg = chatInput;
        const randomReply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
        setChatLog(log => [...log, { user: userMsg, bot: randomReply }]);
        setChatInput('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', minHeight: '100vh' }}>
            {/* Name selector and greeting */}
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

            {/* Chat open button */}
            <button
                onClick={() => setChatOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 100,
                    padding: '16px 28px',
                    borderRadius: '50px',
                    background: '#2b7a0b',
                    color: '#fff',
                    border: 'none',
                    fontSize: '18px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                }}
            >
                Open Chat
            </button>

            {/* Fullscreen Chat Overlay */}
            {chatOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(255,255,255,0.98)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.3s',
                    }}
                >
                    <div style={{ position: 'absolute', top: 24, right: 32 }}>
                        <button
                            onClick={() => setChatOpen(false)}
                            style={{
                                fontSize: '22px',
                                background: 'none',
                                border: 'none',
                                color: '#2b7a0b',
                                cursor: 'pointer',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                            }}
                            aria-label="Close Chat"
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ width: '100%', maxWidth: '500px', height: '70vh', background: '#fafafa', border: '1px solid #ccc', borderRadius: '16px', padding: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ marginTop: 0, textAlign: 'center', color: '#2b7a0b' }}>Funny ChatBot</h2>
                        <div style={{ flex: 1, minHeight: '120px', maxHeight: '50vh', overflowY: 'auto', marginBottom: '16px', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #eee' }}>
                            {chatLog.length === 0 && <div style={{ color: '#aaa' }}>No messages yet. Say hi!</div>}
                            {chatLog.map((entry, idx) => (
                                <div key={idx} style={{ marginBottom: '14px' }}>
                                    <div><strong>You:</strong> {entry.user}</div>
                                    <div style={{ color: '#2b7a0b', marginLeft: '12px' }}><strong>Bot:</strong> {entry.bot}</div>
                                </div>
                            ))}
                        </div>
                        {/* OpenAI ChatGPT Link Button */}
                        <a
                            href="https://chat.openai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                margin: '0 auto 18px auto',
                                width: 'fit-content',
                                background: '#10a37f',
                                color: '#fff',
                                padding: '10px 24px',
                                borderRadius: '6px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '16px',
                                boxShadow: '0 2px 8px rgba(16,163,127,0.10)',
                                transition: 'background 0.2s',
                            }}
                        >
                            Try real ChatGPT
                        </a>
                        <form onSubmit={handleChatSubmit} style={{ display: 'flex', gap: '10px' }}>
                            <input
                                type="text"
                                value={chatInput}
                                onChange={e => setChatInput(e.target.value)}
                                placeholder="Type your message..."
                                style={{ flex: 1, padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
                            />
                            <button type="submit" style={{ padding: '10px 24px', borderRadius: '6px', background: '#2b7a0b', color: '#fff', border: 'none', fontSize: '16px' }}>Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App; 