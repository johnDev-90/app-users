import "../src/index.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import style from "./styles/app.module.css";
import UsersList from "./components/UsersList";
import Header from "./components/Header.jsx";
import SearchUsers from "./components/SearchUsers.jsx";
import UsersDetails from "./components/UsersDetails.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValues] = useState("");
  const [modal, setModal] = useState(false);
  const [userId, setUserID] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    getUSers();
  }, []);

  useEffect(() => {
    getUSers();
  }, [searchValue]);

  useEffect(() => {
    if (userId) {
      setUser(users.filter((info) => info.id === userId)[0] || {});
    }
  }, [userId]);

  const handleChange = (e) => {
    setSearchValues(e.target.value.toLowerCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      Swal.fire({
        text: "Por favor, ingresa un nombre para buscar. ¡No puede estar vacío!",
        icon: "error",
      });
      return;
    }

    filterByUserName();
  };

  const filterByUserName = () => {
    const filteredArray = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setUsers(filteredArray);
  };

  const handleClick = (id) => {
    setUserID(id);
    setModal(true);
  };

  const getUSers = async () => {
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
    <div className={style.mainContainer}>
      <Header />
      <SearchUsers handleChange={handleChange} onSubmit={onSubmit} />
      <UsersList users={users} handleClick={handleClick} />
      {modal && <UsersDetails setModal={setModal} user={user} />}
    </div>
  );
}

export default App;
