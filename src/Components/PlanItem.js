const PlanItem = ({ name, monthlyPrice, imageSource, yearlyPrice, isYearly, isSelected, onSelect }) => {
  return (
      <div
          onClick={onSelect}
          className={`h-48 w-full m-4 p-4 relative flex flex-col border rounded-md shadow-sm cursor-pointer ${
              isSelected ? 'border-blue-500 bg-blue-100' : 'border-gray-200'
          }`}
      >
          <div className="absolute top-4 left-2 w-full h-1/2">
              <img
                  src={imageSource}
                  alt={name}
                  className="object-contain w-1/2 h-1/2 rounded-t-md"
              />
          </div>
          <div className="absolute bottom-4 left-4">
              <div className="text-lg font-bold mb-1">
                  {name}
              </div>
              <div className="text-sm text-gray-600">
                  {isYearly ? yearlyPrice : monthlyPrice}
              </div>
          </div>
      </div>
  );
};

export default PlanItem;
