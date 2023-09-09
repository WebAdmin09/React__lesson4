import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export class Navbar extends Component {
  render() {
    return (
      <nav className={style['navbar']}>
        <div className={style['container']}>
          <div className="navbar__wrapper">
            <ul className={style['navbar__ul']}>
              <NavLink className={style['navbar__link']} to='/'>Home</NavLink>
              <NavLink className={style['navbar__link']} to='/business'>Business</NavLink>
              <NavLink className={style['navbar__link']} to='/entertainment'>Entertainment</NavLink>
              <NavLink className={style['navbar__link']} to='/general'>General</NavLink>
              <NavLink className={style['navbar__link']} to='/health'>Health</NavLink>
              <NavLink className={style['navbar__link']} to='/science'>Science</NavLink>
              <NavLink className={style['navbar__link']} to='/sports'>Sports</NavLink>
              <NavLink className={style['navbar__link']} to='/technology'>Technology</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
