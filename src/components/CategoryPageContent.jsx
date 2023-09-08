import React from 'react'
import MedicTurns from './MedicTurns';

import "./CategoryPageContent.css"
import ProfesionalCategory from './ProfesionalCategory';
import { useState } from 'react';

const CategoryPageContent = ({ category }) => {

  const [turnList, setTurnList] = useState(JSON.parse(localStorage.getItem("turns"))); 

  const localTurns = localStorage.setItem("turns", JSON.stringify(turnList));

  const profesionalList = [
    {
      name: "Marcela Perez",
      matricula: 333333,
      img: "https://i.imgur.com/1jN2YuS.png"
    },
    {
      name: "Ulises Garcia",
      matricula: 2222222,
      img: "https://i.imgur.com/viQJObn.png"
    },
    {
      name: "Clara Martin",
      matricula: 3444443,
      img: "https://i.imgur.com/1jN2YuS.png"
    }
  ]

  const LoadPageContent = () => {
    switch (category.name) {
      case "Turno médico": return <MedicTurns profesionalList={profesionalList} turnList={turnList} setTurnList={setTurnList} />;
      case "Profesionales": return <ProfesionalCategory profesionalList={profesionalList} turnList={turnList} />;
    }

  };

  return (
    <div className='categoryPageContainer'>
      {LoadPageContent()}
    </div>
  )
}

export default CategoryPageContent