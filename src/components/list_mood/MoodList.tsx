import React, { useState } from 'react';
import { MoodListT, MoodT } from '../../types/types';
import MoodCard from '../card_mood/MoodCard';
import styles from './mood_list.module.css'

type MoodListProps = {
  onDelete: (moodId: number) => Promise<void>;
  moodsList: MoodListT;
  selectMood: (mood: MoodT) => void;
}

const MoodList = ({onDelete, moodsList, selectMood}: MoodListProps): JSX.Element => {
  const [toggleDisplay, setToggleDisplay] = useState(false)

  const onToggleDisplay = () => {
    setToggleDisplay(!toggleDisplay)
  }

  return (
    <div className={styles.mood_list_container}>
      <div className={`${styles.mood_list} ${toggleDisplay?styles.closed:''}`}>
        {moodsList.map(item => <MoodCard key={item.id} mood={item} selectMood={selectMood} onDelete={onDelete}/>)}
      </div>
      <div className={`${styles.mood_list_toggle} ${toggleDisplay?styles.closed:''}`}>
        <div className={styles.mood_list_bar}></div>
        <img className={`${styles.toggle_btn} ${toggleDisplay?styles.closed:''}`} onClick={onToggleDisplay} src="./images/arrow_btn.png" alt="arrow" />
      </div>
    </div>
  )
}

export default MoodList;