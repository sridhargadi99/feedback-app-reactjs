// Write your React code here.
import {Component} from 'react'
import EmojiList from '../EmojiList'
import './index.css'

class Feedback extends Component {
  state = {condition: true}

  changeCard = () => {
    this.setState(prevState => ({condition: !prevState.condition}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {condition} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {condition === true ? (
            <div>
              <h1 className="heading-style">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(each => (
                  <EmojiList
                    changeCard={this.changeCard}
                    eachList={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="thank-you-container">
              <img
                className="love-emoji-style"
                alt="love emoji"
                src={loveEmojiUrl}
              />
              <h1 className="love-emoji-heading-style">Thank You!</h1>
              <p className="love-emoji-paragraph-style">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
