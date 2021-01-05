import React from 'react'
import Timer from '../Icon/Timer'
import Styles from './PlayListGrid.module.scss'
function PlayListGrid() {
    return (
        <div className={Styles.Root}>
            <h2>deneme</h2>
            <div className={Styles.Header}>
                <div>
                    #
                </div>
                <div>
                    BAŞLIK
                </div>
                <div>
                ALBÜM
                </div>
                <div>
                TARİH EKLENDİ
                </div>
                <div>
                    <Timer />
                </div>
                
            </div>
        </div>
    )
}

export default PlayListGrid
