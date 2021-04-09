import React, { Component } from "react"
// import secrets from "./secrets"
import axios from "axios"
import ThumbNail from './thumbnail'
//import { makeStyles } from '@material-ui/core/styles';
import InputUI from '@material-ui/core/TextField';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'flex'

//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '25ch'
//     }
// }));




class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            key: process.env.REACT_APP_API_KEY,
            search_term: "",
            videos: []
        }
    }


    handleChange = (e) => {
        console.log("Search Term:", e.target.value)
        this.setState({
            search_term: e.target.value
        })

    }



    handleFromSubmit = async (e) => {
        let { key, search_term } = this.state
        e.preventDefault()

        try {

            // let  url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search_term}&key=${key}`
            let url = `https://www.googleapis.com/youtube/v3/search`
            await axios.get(url, {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: key,
                    q: search_term
                }
            })

                .then(res => {
                    console.log(res.data.items[0].snippet.thumbnails.default.url)
                    this.setState({
                        videos: res.data.items
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        let { search_term, videos } = this.state



        // console.log(YouTube)

        return (
            <div id="search-field">
                <form onSubmit={this.handleFromSubmit}>

                    <InputUI
                        placeholder='Type Here!!!'
                        label='Video Search'
                        value={search_term}
                        onChange={this.handleChange}
                    
                    />
                    {/* <input
                        type="text"
                        placeholder="Search"
                        value={search_term}
                        onChange={this.handleChange}
                    /> */}
                    <br/>
                    <button>Search</button>
                </form>

                <div id="videos">
                    {videos.map((el, index) => {
                        return <ThumbNail
                            title={el.snippet.title}
                            url={el.snippet.thumbnails.default.url}
                            videoId={el.id.videoId}
                            desc={el.snippet.desc}
                            key={index} />

                    })}
                </div>

            </div>
        )
    }
}

export default HomePage