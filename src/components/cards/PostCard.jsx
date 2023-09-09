import React, { Component } from 'react'
import style from './PostCard.module.css'

export class PostCard extends Component {
    render() {
        const { name,urlToImage, title } = this.props
        console.log(name);
        return (
            <div className={style['card__wrapper']}>
                <div className={style["card"]}>
                    <div className={style['card__images']}>
                        <img
                            src={urlToImage || 'https://bitsofco.de/img/Qo5mfYDE5v-350.png'}
                            alt='dvsvds'
                            className={style["card__img"]}
                        />
                        <h1 className={style['card__span']}>{name}</h1>
                    </div>
                    <div className={style["card__body"]}>
                        <p className={style["card-title"]}>
                            {title}
                        </p>
                        <a href="#btn" className={style["button"]}>
                            ReadMore
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
