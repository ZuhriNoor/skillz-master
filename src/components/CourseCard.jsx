export default function CourseCard({ icon, title, description, modules }) {
  return (
    <div className="bg-white text-gray-900 rounded-2xl p-8 flex flex-col">

      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
          <img src={icon} alt={`${title} icon`} className="h-8 w-8" />
        </div>
        <div className="md:h-24">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 mb-4">Course Modules:</h4>
        <ul className="space-y-3">
          {modules.map((module, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-[#101566] rounded-full"></span>
              <span className="text-gray-700">{module}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}