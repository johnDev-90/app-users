import style from "../styles/userDetails.module.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UsersDetails = ({ setModal, userId }) => {
  const [users, setUsers] = useState([]);
  const [userObj, setUserObj] = useState({});

  const {
    name = "",
    username = "",
    email = "",
    phone = "",
    website = "",
    address: { street = "", suite = "", city = "", zipcode = "", geo: { lat = "", lng = "" } = {} } = {},
    company: { name: companyName = "", catchPhrase = "", bs = "" } = {}
  } = userObj;


  function onClose() {
    setModal(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const userInformation = users.find(user => user.id === userId);
    if (userInformation) {
      setUserObj(userInformation);
    }
  }, [users, userId]);

  const getUsers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: "GET",
      });

      const result = await response.json();
      if (!response.ok) {
        console.log(result);

        Swal.fire({
          title: "Error!",
          text: "The request failed. Please try again later.",
          icon: "error",
        });

        return;
      }

      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button className={style.closeBtn} onClick={onClose}>
          x
        </button>
        <h2 className={style.title}>User Details</h2>

        <div className={style.section}>
          <h3>User details</h3>
          <div className={style.row}>
            <span>Nombre</span> <strong>{name}</strong>
          </div>
          <div className={style.row}>
            <span>Nombre de usuario</span> <strong>{username}</strong>
          </div>
          <div className={style.row}>
            <span>Email</span> <strong>{email}</strong>
          </div>
        </div>

        <div className={style.section}>
          <h3>Dirección</h3>
          <div className={style.row}>
            <span>Calle</span> <strong>{street}</strong>
            <span>Suite</span> <strong>{suite}</strong>
          </div>
          <div className={style.row}>
            <span>Ciudad</span> <strong>{city}</strong>
            <span>Código Postal</span> <strong>{zipcode}</strong>
          </div>
          <div className={style.row}>
            <span>Geo</span> <strong>{lat}</strong>, <strong>{lng}</strong>
          </div>
        </div>

        <div className={style.section}>
          <div className={style.row}>
            <span>Teléfono</span> <strong>{phone}</strong>
            <span>Website</span> <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
          </div>
        </div>

        <div className={style.section}>
          <h3>Compañía</h3>
          <div className={style.row}>
            <span>Nombre</span> <strong>{companyName}</strong>
          </div>
          <div className={style.row}>
            <span>Eslogan</span> <strong>{catchPhrase}</strong>
          </div>
          <div className={style.row}>
            <span>bs</span> <strong>{bs}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
