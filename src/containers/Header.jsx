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
                            category="Торги"
                            submenu={[
                                {
                                    text: 'Any link 1',
                                    link: '#'
                                },
                                {
                                    text: 'Any link 2',
                                    link: '#'
                                }
                            ]}
                        />
                        <MenuItem 
                            category="Поставщикам"
                            submenu={[
                                {
                                    text: 'Any link 1',
                                    link: '#'
                                },
                                {
                                    text: 'Any link 2',
                                    link: '#'
                                }
                            ]}
                        />
                        <MenuItem 
                            category="Заказчикам"
                            submenu={[
                                {
                                    text: 'Any link 1',
                                    link: '#'
                                },
                                {
                                    text: 'Any link 2',
                                    link: '#'
                                }
                            ]}
                        />
                        <MenuItem 
                            category="О площадке"
                            submenu={[
                                {
                                    text: 'Any link 1',
                                    link: '#'
                                },
                                {
                                    text: 'Any link 2',
                                    link: '#'
                                }
                            ]}
                        />
                    </ul>
                </div>
                <a href="#" className="menu-auth">Войти</a>
            </header>
        )
    }
}

export default Header