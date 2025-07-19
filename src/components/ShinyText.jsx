const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={` ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(138, 1, 229, 0) 40%, rgba(138, 1, 229, 0.8) 50%, rgba(138, 1, 229, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;