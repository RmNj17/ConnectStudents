import React from 'react';
const Loop = () => {
    const loops = [
        'Connecting Minds, Empowering Education',
        'Empowering Education through Digital Dialogue',
        'Revolutionizing Education with Interactive Discussions',
      ];
  
    return (
      <div>
        {loops.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };
 export default Loop;