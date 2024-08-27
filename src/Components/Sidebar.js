import sidebarBackground from '../assets/bg-sidebar-desktop.svg';
import { useLocation, useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const listItems = [
    { number: 1, step: 'STEP 1', text: 'YOUR INFO' , path: '/'},
    { number: 2, step: 'STEP 2', text: 'SELECT PLAN' , path: '/plans' },
    { number: 3, step: 'STEP 3', text: 'ADD-ONS', path: '/addons'  },
    { number: 4, step: 'STEP 4', text: 'SUMMARY' , path: '/summary'},
  ];
  const handleNavigation = (path) => {
    if (path === location.pathname) return; 
    const currentIndex = listItems.findIndex(item => item.path === location.pathname);
    const targetIndex = listItems.findIndex(item => item.path === path);

    if (targetIndex <= currentIndex) {
      navigate(path);
    }
  };

    return (
     <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${sidebarBackground})` }}
    >
      <ul className="space-y-4">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start" 
           onClick={() => handleNavigation(item.path)}>
            
            <div className={`flex items-center justify-center w-12 h-12 m-4 font-semibold text-lg border-2 rounded-full mr-3 ${location.pathname === item.path ? 'bg-blue-300 border-blue-300 text-blue-800' : 'bg-transparent border-white text-white'}`}>
              {item.number}
            </div>
            <div>
              
              <p className="text-sm text-white mt-4 ">{item.step}</p>
              
              <p className="text-lg font-semibold text-white">{item.text}</p>
              
            </div>
          </li>
        ))}
      </ul>
      
    </div>
      
    );
  };
  
  export default Sidebar;