// Write your code here

import {Component} from 'react'

import './index.css'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'

const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png '

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }
  rightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState({
        count: count + 1,
      })
    }
  }
  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({
        count: count - 1,
      })
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const updatedList = reviewsList[count]
    const {imgUrl, username, description, companyName} = updatedList
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="img" alt={username} />
        <div className="reviewsList-container">
          <button
            type="button"
            className="btn-style"
            testid="leftArrow"
            onClick={this.leftArrow}
          >
            <img src={leftArrow} alt="left arrow" />
          </button>
          <p className="name-heading">{username}</p>
          <button
            type="button"
            className="btn-style"
            testid="rightArrow"
            onClick={this.rightArrow}
          >
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
        <div className="review-container">
          <p className="para">{companyName}</p>
          <p className="para">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
