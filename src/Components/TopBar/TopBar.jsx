import React from 'react'
import Button from '../Buttons/Button';
import Styles from'./TopBar.module.scss';
import BackIcon from '../Icon/BackIcon.jsx'
import NextIcon from '../Icon/NextIcon';
import Profile from '../Icon/Profile';
import Text from '../Typography/Text';
import Dropdown from '../Icon/Dropdown';
const TopBar = (props) => {
    return (
        
            <header className={Styles.TopBar}>
                <div className={Styles.Buttons}>
                    <Button className={Styles.Button} ><BackIcon ></BackIcon></Button>
                    <Button className={Styles.Button} ><NextIcon ></NextIcon></Button>
                </div>
                <div className={Styles.ProfileBar}>
                    <Button className={Styles.UpgrateButton} >YÜKSELT</Button>
                    <Button className={Styles.ProfileButton} >
                        <Profile />
                        <Text bold >Abdurrahim</Text>
                        <Dropdown />
                    </Button>

                </div>
            </header>
        
    )
}

export default TopBar;