import React from 'react'
import { Link } from 'react-router-dom'

class MenuItem extends React.Component {
    submenuRef = React.createRef()

    showSubmenu = () => {
        this.submenuRef.current.style = 'display: block;'
    }

    hideSubmenu = () => {
        this.submenuRef.current.style = 'display: none;'
    }

    render() {
        const {category, submenu} = this.props
        return (
            <li className="menu__block" onMouseOver={this.showSubmenu} onMouseLeave={this.hideSubmenu}>
                <span className="menu__category">{category}</span>
                <ul className="menu__submenu" ref={this.submenuRef}>
                    {submenu.map((item, i) => 
                        <li className="menu__item" key={i}> 
                            <Link to={item.link} className="menu__link">{item.text}</Link>
                        </li>
                    )}
                </ul>
            </li>
        )
    }
}

export default MenuItem