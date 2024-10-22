import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../constants/logo-color.svg'

const navItems = [
  { to: '/', icon: 'fa-house', name: 'Home' },
  { to: '/about', icon: 'fa-user', name: 'About Me' },
  { to: '/skills', icon: 'fa-book-atlas', name: 'Skills' },
  { to: '/works', icon: 'fa-briefcase', name: 'My Works' },
  { to: '/contact', icon: 'fa-phone', name: 'Contact' }
]

const Navbar = () => {
  return (
    <nav className={style['nav']}>
      <Link to='/'><label className={style['logo']}><img src={logo} alt="logo" /></label></Link>
      <ul>
        {navItems.map(({ to, icon, name }) => (
          <li key={to}>
            <Link to={to}>
              <a className={style['active']}>
                <span className={style['icon']}><i className={`fa-solid ${icon}`}></i></span>
                <span className={style['name']}>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar