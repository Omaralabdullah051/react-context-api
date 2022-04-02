import React from 'react';

const HoverCounter = ({ count, handleEvent, theme }) => {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h2 style={style} onMouseOver={handleEvent}>Hovered {count} times</h2>
        </div>
    )
}

export default HoverCounter;