import styles from '../styles/pagedetail.module.css'

export default function PageDetail({page, getPage, handleShowPages}) {
    const {pageLabel, pageImageUrl, category, id} = page
return <div onClick={() => {
    getPage(id);
    handleShowPages();
    }} className={styles.pageCard}>
        <div className={styles.pageImageDiv}>
            <img src={pageImageUrl} width='50px' className={styles.pageImage}/>
        </div>
        <div>
            <p>{pageLabel}</p>
            <p>{category}</p>
        </div>
    </div>
}