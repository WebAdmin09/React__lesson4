import React, { Component } from 'react'
import { toast } from 'react-toastify';
import request from '../api/api';
import PostCard from '../components/cards/PostCard';
import style from './main.module.css'
import ServiceLoading from '../components/loading/ServiceLoading'

export class PostPage extends Component {
    state = {
        newapi: [],
        loading: true,
    }
    async getPosts() {
        try {
            let { data } = await request.get('')
            this.setState({ newapi: data.articles });
        } catch (err) {
            toast.error(err.response.statusText);
        } finally {
            this.setState({ loading: false })
        }
    }
    componentDidMount() {
        this.getPosts()
    }
    render() {
        const { newapi, loading } = this.state
        console.log(newapi);
        return (
            <section id='post__page'>
                <h1 className={style['heading']}>All News</h1>
                {loading ? (<ServiceLoading />) :
                    newapi.map((post) => <PostCard {...post} />)
                    }
            </section>
        )
    }
}


export default PostPage
