import PlanItem from "./PlanItem";
import { planData } from "../utils/data";
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Plans = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [warning, setWarning] = useState(""); // State for warning message
    const { formData, handleFormDataChange } = useOutletContext();
    const navigate = useNavigate();

    const handleSwitchChange = (event) => {
        setIsYearly(event.target.checked);
    };

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setWarning(""); 
    };

    const handleNextStep = () => {
        if (selectedPlan) {
            handleFormDataChange({
                pName: selectedPlan.pName,
                pMonthlyPrice: selectedPlan.pMonthlyPrice,
                pYearlyPrice: selectedPlan.pYearlyPrice,
                isYearly
            });
            navigate("/addons"); 
        } else {
            setWarning("Please select a plan before proceeding.");
        }
    };
    
    return (
        <div className="w-full h-full flex flex-col">
            <div className="mx-8 mt-8 flex-1">
                <h1 className="text-4xl font-bold text-gray-900">Select your plan</h1>
                
                <p className="text-lg text-gray-400 mt-2">
                    You have the option of monthly or yearly billing.
                </p>

                <div className="flex space-x-4 mt-4">
                    {planData.map((plan) => (
                        <PlanItem
                            key={plan.pName}
                            name={plan.pName}
                            monthlyPrice={plan.pMonthlyPrice}
                            imageSource={plan.imageSource}
                            yearlyPrice={plan.pYearlyPrice}
                            isYearly={isYearly}
                            isSelected={selectedPlan?.pName === plan.pName}
                            onSelect={() => handlePlanSelect(plan)}
                        />
                    ))}
                </div>

                <div className="mt-8 bg-blue-100 p-4 rounded-lg flex items-center justify-center">
                    <span className={`text-gray-700 ${isYearly ? 'text-gray-300' :'font-bold'}`}>Monthly</span>
                    <Switch
                        checked={isYearly}
                        onChange={handleSwitchChange}
                        color="primary"
                    />
                    <span className={`text-gray-700 ${isYearly ? 'font-bold' : 'text-gray-300'}`}>Yearly</span>
                </div>

                {warning && <p className="text-red-500 text-center mt-4">{warning}</p>} 
            </div>

            <div className="p-4 rounded-lg flex items-center justify-between bg-white">
                <Link to="/">
                    <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded">Go Back</button>
                </Link>
                <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
};

export default Plans;
