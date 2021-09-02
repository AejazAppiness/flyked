import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageList from './PageList';
import styles from '../styles/pageselect.module.css'

export default function PageSelect ({pageImageUrl, pages, getPage, pageName, term,handleTerm, header }) {
    const [showPages, setShowPages] = useState(false);
    const handleShowPages = () => {
        setShowPages(!showPages)
    }
    return  <section className={styles.pageSelectSection}>
                <div className={styles.pageSelectDiv} onClick={handleShowPages}>
            {pageImageUrl ? <img src='/mnb.jpg' width='50px' className={styles.pageImg}/> : <span className={styles.noPageSelected}></span>}
            <div className={styles.selectDiv}>
            <div>
                    <p className={styles.text}>{header}</p>
                    <p>{pageName}</p>
            </div>
            <div className={styles.expandIconDiv}>
                    <ExpandMoreIcon fontSize='medium'/> 
            </div>
                {/* <select className={styles.select} onChange={handlePage}>
                <option className={styles.option} value="" >
                        Select Page
                    </option>
                    {pages.map(page => {
                        return <option value={page.pageLabel} className={styles.option}>{page.pageLabel}</option>
                    })}
                </select> */}
            </div>
        </div>
        {showPages && <div className={styles.options}><PageList pages={pages} getPage={getPage} term={term} handleTerm={handleTerm} handleShowPages={handleShowPages}/></div>}
    </section>

}