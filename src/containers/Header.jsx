import React from 'react'
import MenuItem from '../components/header/MenuItem'

class Header extends React.Component {
    render() {
        return (
            <header>
                <span className="logo">MarketPlace</span>
                <div className="container header-container">
                    <ul className="menu">
                        <MenuItem 
                            category="Закупки"
                            link="/"
                        />
                        <MenuItem 
                            category="Поставщики"
                            link="/contractor"
                        />
                    </ul>
                </div>
                <a href="#" className="menu-auth">Войти</a>
            </header>
        )
    }
}

export default Header