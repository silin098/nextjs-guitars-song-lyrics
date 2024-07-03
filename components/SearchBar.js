import styles from '@/styles/searchbar.module.css';
export default function SearchBar(){
    return <div>
        <input type="text" placeholder="Search Songs..." className={styles.searchBar}/>
    </div>
}