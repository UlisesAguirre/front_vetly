import React from 'react'
import MedicTurns from './MedicTurns';

import "./CategoryPageContent.css"

const CategoryPageContent = ({category}) => {

    const LoadPageContent = () => {
        switch (category.name) {
            case "Turno médico": return <MedicTurns />;
        }

    };

  return (
    <div className='categoryPageContainer'>
        {LoadPageContent()}
    </div>
  )
}

export default CategoryPageContent