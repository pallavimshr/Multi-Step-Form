import arcadeImage from '../assets/icon-arcade.svg';
import advancedImage from '../assets/icon-advanced.svg';
import proImage from '../assets/icon-pro.svg';

 export const planData = [
  {
    pName: "Arcade",
    pMonthlyPrice: "$9/mo",
    pYearlyPrice: "$90/yr",
    imageSource: arcadeImage,
  },
  {
    pName: "Advanced",
    pMonthlyPrice: "$12/mo",
    pYearlyPrice: "$120/yr",
    imageSource: advancedImage,
  },
  {
    pName: "Pro",
    pMonthlyPrice: "$15/mo",
    pYearlyPrice: "$150/yr",
    imageSource: proImage,
  },
];
export const addonData = [{
    aName : "Online Service",
    detail : "Access to multiplayer Games",
    aMonthlyPrice :"+$1/mo",
    aYearlyPrice :"+$10/yr",
}, {
    aName : "Larger Storage",
    detail : "Extra 1TB of cloud save",
    aMonthlyPrice :"+$2/mo",
    aYearlyPrice :"+$20/yr",

},{
    aName : "Customizable Profile",
    detail : "Custom theme on your profile",
    aMonthlyPrice :"+$2/mo",
    aYearlyPrice :"+$20/yr",
}];
