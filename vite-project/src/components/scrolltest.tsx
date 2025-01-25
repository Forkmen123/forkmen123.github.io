// import React, { useState, useEffect } from 'react';

// const ScrollComponent: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const scrollThreshold = 200; // The scroll threshold to toggle visibility




//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > scrollThreshold) {
//         setIsVisible(false); // Hide text when beyond the threshold
//       } else {
//         setIsVisible(true); // Show text when below the threshold
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div style={{ height: "200vh", padding: "20px" }}>
//       <div
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.5s",
//         }}
//       >
//         <h1>This text toggles visibility based on the scroll threshold!</h1>
//       </div>
//     </div>

    
//   );
// };



// export default ScrollComponent;



import React, { useState, useEffect } from 'react';

const ScrollComponent: React.FC = () => {
  // State to store the current scroll position
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    // Function to update the scroll position
    const handleScroll = () => {
      setCurrentScrollY(window.scrollY); // Update the state with the current scroll position
      console.log('Current scroll position:' + window.scrollY)
    };

    // Add event listener to the window scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to ensure it runs only once when the component is mounted

  return (
      <p style={{position:'fixed'}}>{currentScrollY}</p>
  );
};

export default ScrollComponent;
