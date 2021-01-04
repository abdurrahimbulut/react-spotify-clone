import React from 'react';
import Style from './PlayListHeader.module.scss';
import PlayListIcon from '../Icon/PlayListIcon';
import Text from '../Typography/Text';
const PlayListHeader = ({image,title,...props}) => {
    return (
        <div className={Style.Header}>
            <div className={Style.HeaderBackgroundColor}>
            </div>
            <div className={Style.HeaderLinearGradient}>
            </div>
            <div className={Style.Image}>
                <div className={Style.playListImage}>
                    <PlayListIcon />
                </div>
            </div>
            <div className={Style.Content}>
                <div className={Style.Type}>
                    <Text bold>ÇALMA LİSTESİ</Text>
                </div>
                <div className={Style.PlayListTitle}>
                    <Text  >{title}</Text>
                </div>
                <div className={Style.User}>
                    <Text bold  >Abdurrahim</Text>
                </div>


            </div>
        </div>
    )
}

export default PlayListHeader
