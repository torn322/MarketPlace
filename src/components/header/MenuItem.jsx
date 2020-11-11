import React from 'react'

class MenuItem extends React.Component {
    render() {
        const {category, submenu} = this.props
        return (
            <li className="menu__block">
                <span className="menu__category">{category}</span>
                <ul className="menu__submenu">
                    {submenu.map((item, i) => 
                        <li className="menu__item" key={i}> 
                            <a href={item.link} className="menu__link">{item.text}</a>
                        </li>
                    )}
                </ul>
            </li>
        )
    }
}

export default MenuItem