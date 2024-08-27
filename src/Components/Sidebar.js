import sidebarBackground from '../assets/bg-sidebar-desktop.svg';
const Sidebar = () => {
  const listItems = [
    { number: 1, step: 'STEP 1', text: 'YOUR INFO' },
    { number: 2, step: 'STEP 2', text: 'SELECT PLAN' },
    { number: 3, step: 'STEP 3', text: 'ADD-ONS' },
    { number: 4, step: 'STEP 4', text: 'SUMMARY' },
  ];
    return (
        
        
      <div
      className="w-full h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${sidebarBackground})` }}
    >
      <ul className="space-y-4">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start ">
            
            <div className="flex items-center justify-center w-12 h-12 m-4 text-white border-2 border-white-200 rounded-full mr-3">
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