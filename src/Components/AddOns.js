import { useState, useEffect} from "react";
import { useNavigate, Link, useOutletContext} from "react-router-dom";
import { addonData } from "../utils/data";

const AddOns = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Initialize selectedAddOns state from formData
    if (formData.selectedAddOns) {
      setSelectedAddOns(formData.selectedAddOns);
    }
  }, [formData.selectedAddOns]);
 
  const handleCheckboxChange = (addon) => {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(addon)) {
        return prevSelected.filter((item) => item !== addon);
      } else {
        return [...prevSelected, addon];
      }
    });
  };

  const handleNextStep = () => {
    if (selectedAddOns.length === 0) {
      setWarning("Please select at least one add-on before proceeding.");
      return;
    }
    
    handleFormDataChange({ selectedAddOns });
    navigate('/summary');
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="mx-4 md:mx-8 mt-4 md:mt-8 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Pick add-ons</h1>
        <p className="text-base md:text-lg text-gray-400 mt-1 md:mt-2">Add-ons help enhance your gaming experience</p>

        <div className="mt-4 md:mt-8 space-y-4 md:space-y-6">
          {addonData.map((addon, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 border rounded-lg shadow-md ${
                selectedAddOns.includes(addon) ? 'border-blue-500 bg-light-blue-100' : 'border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-blue-500 border-gray-300 rounded-sm focus:ring-blue-500"
                  checked={selectedAddOns.includes(addon)}
                  onChange={() => handleCheckboxChange(addon)}
                />
                <div>
                  <p className="text-sm md:text-base font-bold text-gray-900">{addon.aName}</p>
                  <p className="text-xs md:text-sm text-gray-400">{addon.detail}</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                {`+$ ${formData.isYearly ? addon.aYearlyPrice : addon.aMonthlyPrice}`}
                {formData.isYearly ? '/yr' : '/mo'}
              </p>
            </div>
          ))}
        </div>
        {warning && <p className="text-red-500 text-center mt-4">{warning}</p>} 
      </div>

      <div className="p-4 flex flex-col md:flex-row justify-between bg-white space-y-2 md:space-y-0 md:space-x-2">
        <Link to="/plans" className="w-full md:w-auto">
          <button className="text-gray-400 font-semibold">Go Back</button>
        </Link>
        <button
          onClick={handleNextStep}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
