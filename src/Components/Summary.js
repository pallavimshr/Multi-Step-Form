import { useOutletContext, Link } from "react-router-dom";

const Summary = () => {
  const { formData, handleFormDataChange } = useOutletContext();

  const handleTogglePlanType = () => {
    handleFormDataChange({ isYearly: !formData.isYearly });
  };

  
  const calculateTotal = () => {
    const planPrice = formData.isYearly ? formData?.pYearlyPrice : formData?.pMonthlyPrice;
    const addOnsTotal = formData?.selectedAddOns?.reduce((total, addon) => {
      return total + (formData.isYearly ? addon.aYearlyPrice : addon.aMonthlyPrice);
    }, 0);
    return planPrice + addOnsTotal;
  };

  const totalPrice = calculateTotal();

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between">
     
      <div className="mx-8 mt-8">
        <h1 className="text-4xl font-bold text-gray-900">Finishing up</h1>
        <p className="text-lg text-gray-400 mt-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      
      <div className="mx-8 my-4 p-4 bg-blue-100 border border-gray-300 rounded-lg shadow-md">
        
        <div className="mb-4 pb-2 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold text-gray-900">
                {formData.pName} ({formData.isYearly ? "Yearly" : "Monthly"})
              </p>
              <button
                className="text-blue-500 underline text-sm"
                onClick={handleTogglePlanType}
              >
                Change
              </button>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              ${formData.isYearly ? formData.pYearlyPrice : formData.pMonthlyPrice}
              {formData.isYearly ? "/yr" : "/mo"}
            </div>
          </div>
        </div>

        
        {formData.selectedAddOns?.length > 0 && (
          <div>
            {formData.selectedAddOns.map((addon, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p className="text-gray-400">{addon.aName}</p>
                <p className="text-gray-700">
                  +${formData.isYearly ? addon.aYearlyPrice : addon.aMonthlyPrice}
                  {formData.isYearly ? "/yr" : "/mo"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

     
      <div className="mx-2 my-4 p-4 ">
        <div className="flex justify-between items-center text-lg  text-gray-400">
          <p>Total ({formData.isYearly ? "per year" : "per month"})</p>
          <p className="text-xl font-bold text-blue-800">${totalPrice} {formData.isYearly ? "/yr" : "/mo"}</p>
        </div>
      </div>

      
      <div className="mx-8 mb-4 flex justify-between">
        <Link to="/addons">
          <button className=" text-gray-400 font-semibold py-2 px-4 rounded">
            Go Back
          </button>
        </Link>
        
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Confirm
          </button>
        
      </div>
    </div>
  );
};

export default Summary;
