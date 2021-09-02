import styles from '../styles/postdetail.module.css'

export default function PostDetail ({text}) {
    return <section className={styles.postDetail}>
            <div className={styles.postImageDiv}>
              {/* {postImageUrl ? <img src={postImageUrl} /> : <Dropzone onDrop={async([file]) => {
                var reader = new FileReader();
                reader.onload = function(e) {
                  var contents = e.target.result;
                  console.log(contents);
                };
                reader.readAsText(file);
                console.log(file)}}>
    {({getRootProps, getInputProps}) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
    )}
  </Dropzone>} */}
                <img src='/Virat_Kohli.jpg' className={styles.postImage}/>
                <div className={styles.shadowDiv}></div>
            </div>
            <div className={styles.factDiv}>
              {/* {!text && <p onClick={() => setShowText(true)}>Tap to type your fact</p>} */}
              {/* <input type='text' value={text} onChange={handleText} className={styles.factText}/> */}
              <p className={styles.factText}>{text}</p>
            </div>
            </section>
}