import { use } from "react";

const InfoRows = ({ user, index, handleClick }) => {
  const { name, email, company } = user;

  return (
    <tr onClick={(e) => handleClick(user.id)}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{company.name}</td>
    </tr>
  );
};

export default InfoRows;
