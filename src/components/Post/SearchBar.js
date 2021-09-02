import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/searchbar.module.css';

export default function SearchBar ({term, handleTerm}) {
    return <div className={styles.search}>
         <div className={styles.icon}><SearchIcon fontSize='medium' /></div>
        <input type='text' className={styles.input} value={term} onChange={handleTerm}/>
    </div>
}