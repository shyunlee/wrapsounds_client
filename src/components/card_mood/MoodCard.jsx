import React from 'react';
import ScreenBall from '../ball_screen/ScreenBall'
import SoundBall from '../ball_sound/SoundBall'
import styles from './card_mood.module.css';

const MoodCard = ({mood}) => {
  return (
    <div className={styles.mood_card}>
      <div className={styles.mood_screen_container}>
        <div className={styles.mood_screen}>
          <ScreenBall screen={mood.video}/>
        </div>
      </div>
      <div className={styles.mood_info}>
        <div className={styles.mood_sounds_container}>
          <div className={styles.mood_title}>
            {mood.title.slice(0,1).toUpperCase().concat(mood.title.slice(1))}
          </div>
          <div className={styles.mood_sounds}>
            {mood.sounds.map(item => <div key={item.id} className={styles.sound_ball}><SoundBall sound={item} /></div>)}
          </div>
        </div>
        <div className={styles.mood_control}>
          <button className={`${styles.mood_control_btn} ${styles.play}`}>A</button>
          <button className={`${styles.mood_control_btn} ${styles.edit}`}>B</button>
          <button className={`${styles.mood_control_btn} ${styles.delete}`}>C</button>
        </div>
      </div>
      
    </div>
  )
}

export default MoodCard;