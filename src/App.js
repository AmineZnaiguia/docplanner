import React from 'react';

import Nav from'./component/navbar.js';
import Paragraph from './component/paragraph.js';
import Block from './component/block.js'
import Partner from './component/partner'
import Health from './component/healthsection'
import Card from './component/card'
import Footer from './component/footer'
import './App.css';
const tabnav =[
  {link:"About us"},
  {link:"Career"},
  {link:"Departments",drop:["Marketing & PR","Customer Success & Sales","IT, Product, Design & UX","Finance & Administration","HR & more"]}
] 
const tabhealth =[
  {img :"https://www.docplanner.com/img/flag.png",
   title:"Leader in 10 countries",
  dsecription:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
},
  {img :"https://www.docplanner.com/img/patients.png",
  title:"30 million unique patients",
 dsecription:"visit us every month"
},
]

const tabhealth2 =[
  {img :"https://www.docplanner.com/img/visits.png",
   title:"1.5 million appointments",
  dsecription:"booked last month"
},
  {img :"https://www.docplanner.com/img/doctors.png",
  title:"2 million active doctors",
 dsecription:"trust in our solutions"
},
]
const tabblock =[
  {
    title:"For patients",
    parag:"Find a doctor, book a visit and solve any health-related doubt",
    img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
    option:["CHOOSE COUNTRY","Agentina","Brazil","chile"],
    style:"sevice-patients"
  },
  {
    title:"For doctors",
    parag:"Save time managing visits and cut no-shows by half",
    img:"https://www.docplanner.com/img/screen-saas@2x.png",
    style :"sevice-doctors",
    back : "backdoc"
  }
]
const tabcard = [
  {img:"https://www.docplanner.com/images/warsaw.png",
   capital:"Warsaw",
   input:"SEE OPPENINGS"},
  {img:"https://www.docplanner.com/images/barcelona.png",
  capital:"Barcelona",
  input:"SEE OPPENINGS"},
  {img:"https://www.docplanner.com/images/istanbul.png",
  capital:"Istanbul",
  input:"SEE OPPENINGS"},
  {img:"https://www.docplanner.com/images/rome.png",
   capital:"Rome",
   input:"SEE OPPENINGS"},
   {img:"https://www.docplanner.com/images/mexico-city.png",
   capital:"Mexico City",
   input:"SEE OPPENINGS"},
   {img:"https://www.docplanner.com/images/curitiba.png",
   capital:"Curitiba",
   input:"SEE OPPENINGS"},
]

function App() {
  return (
    <div className="App">
      <Nav x={tabnav} />
      <Paragraph/>
      <Block tab={tabblock}/>
      <Partner/>
      <Health helthtab={tabhealth} healthtab2={tabhealth2}/>
      <Card cardtab={tabcard}/>
      <Footer/>
    </div>
  );
}

export default App;
