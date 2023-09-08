import { useState } from "react"
import CardTurn from "./CardTurn"
import "./ProfesionalCategory.css"
import ViewTurns from "./ViewTurns"

const ProfesionalCategory = ({ profesionalList, turnList }) => {

  const [profesional, setProfesional] = useState("")

  return (
    <div className="profesionalCategory-container">
      {profesional === "" ? (
        profesionalList.map((p) => (
          <CardTurn key={p.matricula} name={p.name} img={p.img} setState={setProfesional} />
        ))
      ) : (
        <ViewTurns turnList={turnList} setSection={setProfesional} profesional={profesional} />
      )}
    </div>
  );
}


export default ProfesionalCategory

