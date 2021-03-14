import React, { Component } from 'react'
import Youtube from 'react-youtube'
import Comment from './comment_box'
// import secrets from "./secrets"
class Video extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.match.params.videoId,
            comments: [],
            name: "",
            comment: "",
        }

    }

    options = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            },
            //key: secrets.API_KEY 
        }
        return opts
    }

    _onReady = (e) => {
        e.target.pauseVideo()
    }

    handleNameChange =(e) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleCommentChange =(e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()

        let {name,comment, comments} = this.state
        let updatedComments = [...comments]
        if(name && comment){
            const newComment = <Comment name = {name} comment = {comment}/>
            updatedComments.unshift(newComment)
            this.setState({
                comments: updatedComments,
                name: "",
                comment: ""
            })
        }
    }





    render() {
        let {name, comment, comments} = this.state


        return (
            <div>
                <Youtube
                videoId={this.state.id}
                opts={this.options()}
                onReady={this._onReady} />

                <div>
                    <form onSubmit = {this.handleFormSubmit}>
                        <label htmlFor = "name">Name</label><br/>
                        <input  id = "name"   
                        type = "text" 
                        placeholder = "your name"
                        value = {name}
                        onChange = {this.handleNameChange}
                        required = "required"/><br/>
                        
                        <label htmlFor = "comment">Comment</label><br/>
                        <input id = "comment" 
                        type = "text" 
                        placeholder = "your comment"
                        value = {comment}
                        onChange = {this.handleCommentChange}
                        required = "required"/>
                        <button>Submit</button>
                    </form>

                </div>

                <div>
                    {comments}
                </div>

            </div>
        )
    }




}
export default Video