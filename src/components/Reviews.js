import './Reviews.css'
import React, { Component } from 'react'

class Review extends Component {

    state = {
        name: "",
        review: ""
    }

    showReviews = (reviews) => {
        return reviews.map(review => {
            return (
                <div className="one-review">
                    <p className="reviewer">{review["name"]}:</p>
                    <p className="review">{review["review"]}</p>
                </div>
            )
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, review } = this.state
        this.props.addReview({ name, review })
        this.setState({
            name: "",
            review: ""
        })
    }

    render(){
        return(
            <div className="review-div">
                <h1 className="review-title">Reviews</h1>
                <div className="all-reviews">
                    {this.showReviews(this.props.reviews)}
                </div>
                <h3 className="text">Leave a review:</h3>
                <form className="review-form">
                    <input className="review-input" type="text" name="name" placeholder="Name (e.g. John D.)" onChange={this.handleChange} value={this.state.name}></input>
                    <textarea name="review" placeholder="Write your review here" onChange={this.handleChange} value={this.state.review}></textarea>
                    <input className="submit-button" type="submit" onClick={this.handleSubmit}></input>
                </form>
            </div>
        )
    }
}

export default Review