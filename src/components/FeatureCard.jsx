
export default function FeatureCard({ image, title, description, isFeatured = false }) {

  const baseClasses = "rounded-2xl p-8 text-center flex flex-col items-center";


  const conditionalClasses = isFeatured
    ? "border bg-white border-accent" 
    : "bg-indigo-50 border-brand-accent"; 

  return (

    <div className={`${baseClasses} ${conditionalClasses}`}>
      <img 
        src={image} 
        alt={title} 
        className="h-32 w-auto mb-6" 
      />
      
      <h3 className="text-2xl font-bold text-[#101566] mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}