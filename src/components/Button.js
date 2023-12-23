import React from 'react';

function Button({ displayName, triggerFunction }) {
  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
  };

  return (
    <button style={buttonStyles} onClick={triggerFunction}>
      {displayName}
    </button>
  );
}

export default Button;
