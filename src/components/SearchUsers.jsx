import style from "../styles/search.module.css";

const SearchUsers = ({ handleChange, onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className={style.pageContainer}>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Search user by name"
          className={style.input}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className={style.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className={style.searchIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchUsers;
