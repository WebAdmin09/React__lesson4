import React, { Component } from 'react'
import style from "./main.module.css";
import PostPage from './PostPage';
export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className={style['heading']}>
          Our Latest Posts
        </h1>
        <PostPage/>
      </div>
    )
  }
}

export default HomePage
