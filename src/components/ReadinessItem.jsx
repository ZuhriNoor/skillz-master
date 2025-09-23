export default function ReadinessItem({ icon, text, iconPosition }) {
  // Determine the classes for the icon based on the iconPosition prop
  const iconClasses = `absolute top-1/2 -translate-y-1/2 w-16 h-16 bg-[#4E5697] rounded-full  ${
    iconPosition === 'left' 
      ? 'left-0 -translate-x-1/3'  // Position on the left edge and pull it left
      : 'right-0 translate-x-1/3' // Position on the right edge and push it right
  }`;

  return (
    // The container must be relative for the absolute positioning of the icon to work
    <div className="relative w-full flex justify-center">
      
      {/* The pill-shaped background */}
      <div className="w-full md:w-11/12 bg-indigo-100 rounded-full px-12 py-4 text-center">
        <p className="font-semibold text-brand-primary">
          {text}
        </p>
      </div>

      {/* The floating icon */}
      <div className={iconClasses}>
        <img src={icon} alt="Readiness module icon" className="w-full h-full p-2" />
      </div>

    </div>
  );
}