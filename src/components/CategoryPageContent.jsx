import React from 'react'
import MedicTurns from './MedicTurns';

import "./CategoryPageContent.css"
import ProfesionalCategory from './ProfesionalCategory';
import { useState } from 'react';

const CategoryPageContent = ({ category }) => {

  const [turnList, setTurnList] = useState([]); 

  const profesionalList = [
    {
      name: "Marcela Perez",
      matricula: 333333,
    },
    {
      name: "Ulises Garcia",
      matricula: 2222222,
    },
    {
      name: "Clara Martin",
      matricula: 3444443,
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