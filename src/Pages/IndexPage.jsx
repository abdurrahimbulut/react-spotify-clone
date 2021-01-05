import React from 'react'
import CardContainer from '../Components/CardContainer/CardContainer'
import Styles from './IndexPage.module.scss'

const IndexPage = () => {
    return (
        <div className={Styles.Root}>
            <CardContainer/>
            <p>
                <br/> Bu projede Redux kullanılmıştır. Çalma listeleri Restapi ile alınmıştır. Sol menüde bulunan Çalma listelerine tıklayarak şarkıları çalabilirsiniz. <br/> <a target="_blank" href="https://www.github.com/abdurrahimbulut">github.com/abdurrahimbulut</a>
            </p>
        </div>
    )
}

export default IndexPage
