import style from "../styles/userList.module.css";
import InfoRows from "./InfoRows.jsx";

const UsersList = ({ users, handleClick }) => {
  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Compania</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <InfoRows
                key={user.id}
                index={index}
                user={user}
                handleClick={handleClick}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3" className={style.errorText}>
                <h2>
                  Ups, no encontramos ningún usuario. ¡Inténtalo de nuevo!
                </h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
