import "./TurnTableData.css"

const TurnTableData = ({userType, id, petName, petOwnerName, date, hour, petType, reason, profesional}) => {
    return (
        <tr key={id}>
            <td>{petName}</td>
            <td>{petOwnerName}</td>
            <td>{date}</td>
            <td>{hour}</td>
            <td>{petType}</td>
            <td>{reason}</td>
            {userType === "CLIENTE" ? <td>{profesional}</td> : null}
        </tr>
    )
}

export default TurnTableData