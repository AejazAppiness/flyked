import clsx from 'clsx';
import {makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from '../styles/postcategory.module.css'


const useStyles = makeStyles({
    icon: {
      borderRadius: '50%',
      width: 12,
      height: 12,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#E74924',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 12,
        height: 12,
        backgroundImage: 'radial-gradient(#E74924 40%,white ,transparent 70%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#fff',
      },
    },
  });
  
  // Inspired by blueprintjs
  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }


export default function PostCategory ({ handleChange, value}) {
    const classes = useStyles();
    return  <div className={styles.radioDiv}>
    <p className={styles.postsCategory}>Post belongs to</p>
      <FormControl component="fieldset">
          <RadioGroup aria-label="post" name="post1" value={value} onChange={handleChange} row>
              <FormControlLabel value="fact" control={<StyledRadio />} label="Facts" />
              <FormControlLabel value="birthday" control={<StyledRadio />} label="Birthday" />
              <FormControlLabel value="on this day" control={<StyledRadio />} label="On this day" />
              <FormControlLabel value="inNews" control={<StyledRadio />} label="In the news" />
          </RadioGroup>
      </FormControl>
  </div>
}