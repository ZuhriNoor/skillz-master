export default function SectorCard({ icon, name }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center">
      <img
        src={icon}
        alt={`${name} icon`}
        className="h-14 w-14 sm:h-16 sm:w-16 mx-auto mb-4 object-contain"
      />
      <p className="font-semibold text-[#101566] text-sm">{name}</p>
    </div>
  );
}