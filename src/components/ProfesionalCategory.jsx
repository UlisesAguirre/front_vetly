import ProfesionalCard from "./ProfesionalCard"

const ProfesionalCategory = ({profesionalList, turnList}) => {


  return (
    <div>
      <ProfesionalCard  profesionalList={profesionalList} turnList ={turnList} />
    </div>
  )
}

export default ProfesionalCategory

