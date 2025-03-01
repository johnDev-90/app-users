import style from "../styles/userDetails.module.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UsersDetails = ({ setModal, user }) => {
  const { name, phone, email, username, website, company, address } = user;
  const { city, geo, street, suite, zipcode } = address;
  const { lat, lng } = geo;

  const { bs, catchPhrase } = company;

  function onClose() {
    setModal(false);
  }

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
          <h3>Dereccion</h3>
          <div className={style.row}>
            <span>Calle</span> <strong>{street}</strong>
            <span>Suite</span> <strong>{suite}</strong>
          </div>
          <div className={style.row}>
            <span>Ciudad</span> <strong>{city}</strong>
            <span>Codigo Postal</span> <strong>{zipcode}</strong>
          </div>
          <div className={style.row}>
            <span>Geo</span> <span>{lat}</span>
            <span>{lng}</span>
          </div>
        </div>

        <div className={style.section}>
          <div className={style.row}>
            <span>Telefono</span> <strong>{phone}</strong>
            <span>Website</span> <a href="#">{website}</a>
          </div>
        </div>

        <div className={style.section}>
          <h3>Compania</h3>
          <div className={style.row}>
            <span>Nombre</span> <strong>{company.name}</strong>
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
