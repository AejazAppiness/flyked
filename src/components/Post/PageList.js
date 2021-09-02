import {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import PageDetail from "./PageDetail";

import styles from '../styles/pagelist.module.css'

export default function PageList ({pages, getPage, term, handleTerm, handleShowPages}) {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const results = pages.filter(page =>
            page.pageLabel.toLowerCase().includes(term.toLowerCase()))
          setSearchResults(results);
    }, [term])
    return <div className={styles.dropDown}>
        <SearchBar term={term} handleTerm={handleTerm}/>
        <div>
            {searchResults.map(page => {
                return <PageDetail page={page} getPage={getPage} handleShowPages={handleShowPages}/>
            })}
        </div>
    </div>
}