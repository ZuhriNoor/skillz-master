export default function BenefitItem({ icon, text }) {
  return (
    <div className="bg-[#F6F7F9] rounded-xl p-4 flex items-center gap-4">
      {/* Icon */}
      <img 
        src={icon} 
        alt={text} 
        className="h-10 w-10 object-contain " 
      />
      {/* Text */}
      <p className="font-semibold text-[#101566]">
        {text}
      </p>
    </div>
  );
}