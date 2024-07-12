import styles from "./searchbar.module.css";
export default function SearchBar() {
  return (
    <div className={styles.search_bar_container}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
        alt="magnifier"
        className={styles.magnifier}
      />
      <input
        type="text"
        className={styles.input}
        id="searchInput"
        placeholder="Search song here..."
      />

      <div id="suggestions" className="suggestions-container"></div>
    </div>
  );
}
