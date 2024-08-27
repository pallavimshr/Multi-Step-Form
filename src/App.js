import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Plans from "./Components/Plans";
import './index.css';
import { createBrowserRouter, Outlet } from "react-router-dom";
import PersonalInfo from "./Components/PersonalInfo";
import AddOns from "./Components/AddOns";
import Summary from "./Components/Summary";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pName: "",
    pMonthlyPrice: "",
    pYearlyPrice: "",
    isYearly : false,
    aName:"",
    aMonthlyPrice:"",
    aYearlyPrice:"",
  });

  const handleFormDataChange = (data) => {
    
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
  };
  useEffect(() => {
    console.log("App Form Data:", formData);
  }, [formData]);
  
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-1/2 h-2/3 bg-white rounded-lg shadow-md">
        <div className="w-1/3 p-4 rounded-lg h-full">
          <Sidebar />
        </div>
        <div className="w-2/3 m-4 bg-purple-100">
          <Outlet context={{ formData, handleFormDataChange }} />
        </div>
      </div>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/addons",
        element: <AddOns/>,
      },
      {
        path: "/summary",
        element: <Summary/>,
      },
    ],
  },
]);

export default App;
