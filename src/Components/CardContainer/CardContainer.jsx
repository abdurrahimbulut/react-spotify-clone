import React from 'react'
import Title from '../Typography/Title'
import Text from '../Typography/Text'
import Styles from './CardContainer.module.scss';
import Card from './Card';

const CardContainer = () => {
    return (
        <div>
                <div className={Styles.TitleContainer}>
                    <Title>2020'nin En Popülerleri</Title>
                </div>
                <div className={Styles.SubtitleContainer}>
                    <Text secondColor  className={Styles.Subtitle} >
                        2020'nin her türdeki en popüler şarkılarına dal
                    </Text>
                    <Text className={Styles.SeeMore} secondColor bold>
                        HEPSİNİ GÖR
                    </Text>
                </div>
                <div className={Styles.CardContainer}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div>
    )
}

export default CardContainer
