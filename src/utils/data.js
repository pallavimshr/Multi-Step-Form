import arcadeImage from '../assets/icon-arcade.svg';
import advancedImage from '../assets/icon-advanced.svg';
import proImage from '../assets/icon-pro.svg';

 export const planData = [
  {
    pName: "Arcade",
    pMonthlyPrice: 9,
    pYearlyPrice: 90,
    imageSource: arcadeImage,
  },
  {
    pName: "Advanced",
    pMonthlyPrice: 12,
    pYearlyPrice: 120,
    imageSource: advancedImage,
  },
  {
    pName: "Pro",
    pMonthlyPrice: 15,
    pYearlyPrice: 150,
    imageSource: proImage,
  },
];
export const addonData = [{
    aName : "Online Service",
    detail : "Access to multiplayer Games",
    aMonthlyPrice :1,
    aYearlyPrice :10,
}, {
    aName : "Larger Storage",
    detail : "Extra 1TB of cloud save",
    aMonthlyPrice :2,
    aYearlyPrice :20,

},{
    aName : "Customizable Profile",
    detail : "Custom theme on your profile",
    aMonthlyPrice :2,
    aYearlyPrice :20,
}];
