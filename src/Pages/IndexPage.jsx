import React from 'react'
import CardContainer from '../Components/CardContainer/CardContainer'
import Styles from './IndexPage.module.scss'

const IndexPage = () => {
    return (
        <div className={Styles.Root}>
            <CardContainer></CardContainer>
        </div>
    )
}

export default IndexPage
