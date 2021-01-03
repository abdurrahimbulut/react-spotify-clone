import React from 'react'
import Text from '../Typography/Text'
import styles from './PlayList.module.scss'
import NavButton from '../Buttons/NavButton'
import Like from '../Icon/Like'
import Add from '../Icon/Add'
import PlayListItems from './PlayListItems'

const PlayList = () => {
    return (
        <div>
            <h1 className={styles.Title}>
                ÇALMA LİSTELERİ
            </h1>
            <ul className={styles.List}>
                <li className={styles.ListItem}>
                    <NavButton href="index" ><Add /><Text shortText bold>Çalma Listesi Oluştur</Text></NavButton>
                </li>
                <li className={styles.ListItem}>
                    <NavButton href="index" ><Like /><Text  shortText bold>Beğenilen Şarkılar</Text></NavButton>
                </li>
            </ul>
            <hr className={styles.Hr}/>
            <PlayListItems />
        </div>
    )
}

export default PlayList
