import "./TurnTable.css"

const TurnTable = ({id, petName, petOwnerName, date, hour, petType, reason }) => {
    return (
        <tr key={id}>
            <td>{petName}</td>
            <td>{petOwnerName}</td>
            <td>{date}</td>
            <td>{hour}</td>
            <td>{petType}</td>
            <td>{reason}</td>
        </tr>
    )
}

export default TurnTable