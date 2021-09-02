import React, {useState} from 'react';
import PageSelect from './PageSelect';
import PostCategory from './PostCategory';
import PostDetail from './PostDetail';
import DatePicker from './DatePicker';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Dropzone from 'react-dropzone';
import styles from '../postpreview.module.css';

const pages = [
    {
        pageLabel: 'virat kohli',
        pageImageUrl: '/mnb.jpg',
        id: 1,
        category: 'criketer'
    },
    {
        pageLabel: 'sachin',
        pageImageUrl: '/mnb.jpg',
        id: 2,
        category: 'criketer'
    },
    {
      pageLabel: 'aejaz',
      pageImageUrl: '/mnb.jpg',
      id: 3,
      category: 'blogger'
    },
    {
    pageLabel: 'ballari',
    pageImageUrl: '/mnb.jpg',
    id: 4,
    category: 'singer',
    },
]

export default function PostPreview() {
    const [value, setValue] = useState('fact');
    const [state, setState] = useState('');
    const [pageImageUrl, setPageImageUrl] = useState('');
    const [postImageUrl, setPostImageUrl] = useState('');
    const [term, setTerm] = useState('')
    const [text, setText] = useState('Rihana desired to be called by "Black Madonna" because she admires madonna ability to enhance herself.');
    const [showText, setShowText] = useState(false);
    const [pageName, setPageName] = useState("Select Page");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    const getPage = (id) => {
      const page = pages.find(item => item.id === id);
      setPageName(page.pageLabel);
      setPageImageUrl(page.pageImageUrl)
    };

    const handleTerm = (e) => {
      setTerm(e.target.value)
    }

    console.log(value);
    return <div className={styles.postPreview}>
            <div className={styles.header}>
              <span className={styles.leftArrow}>
                <ArrowBackIosIcon fontSize='small'/>
              </span>
              <p>Create Post</p>
            </div>
            <div className={styles.postBody}>
              <PageSelect 
                pageImageUrl={pageImageUrl} 
                getPage={getPage}
                pages={pages}
                pageName={pageName}
                term={term}
                handleTerm={handleTerm}
                header='Posting on'
              />
              <PostCategory 
                value={value}
                handleChange={handleChange} 
              />
              <PostDetail text={text}/>
              <div>
              { value === 'birthday' || value === 'on this day' ?  <p>{value}</p> : null } 
                
              { value === 'birthday' || value === 'on this day' ? <DatePicker handleDateChange={handleDateChange} selectedDate={selectedDate} /> : null } 
              </div>

              <hr />
              <button className={styles.postBtn}>Post Now</button>
            </div>
          </div>
}