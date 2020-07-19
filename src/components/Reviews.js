import './Reviews.css'
import React, { Component } from 'react'

class Review extends Component {

    state = {
        name: "",
        review: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="review-div">
                <h1 className="review-title">Reviews</h1>
                <h3 className="text">Leave a review:</h3>
                <form className="review-form">
                    <input type="text" name="name" placeholder="Name (e.g. John D.)" onChange={this.handleChange}></input>
                    <textarea name="review" placeholder="Write your review here" onChange={this.handleChange}></textarea>
                    <button class="submit-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Review