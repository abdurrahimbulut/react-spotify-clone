import React from 'react'
import Text from '../Typography/Text'
import styles from './PlayList.module.scss'
import NavButton from '../Buttons/NavButton'
import Like from '../Icon/Like'
import Add from '../Icon/Add'

const PlayList = () => {
    return (
        <div>
            <h1 className={styles.Title}>
                ÇALMA LİSTELERİ
            </h1>
            <ul className={styles.List}>
                <li className={styles.ListItem}>
                    <NavButton href="index" ><Add /><Text bold>Çalma Listesi Oluş...</Text></NavButton>
                </li>
                <li className={styles.ListItem}>
                    <NavButton href="index" ><Like /><Text bold>Beğenilen Şarkılar</Text></NavButton>
                </li>
            </ul>
        </div>
    )
}

export default PlayList
