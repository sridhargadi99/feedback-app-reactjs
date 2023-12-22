import './index.css'

const EmojiList = props => {
  const {eachList, changeCard} = props
  const {name, imageUrl} = eachList

  const emojiClick = () => {
    changeCard()
  }

  return (
    <li className="list-style">
      <button onClick={emojiClick} className="button-style" type="button">
        <img className="emoji-style" src={imageUrl} alt={name} />
      </button>
      <h1 className="emoji-heading-style">{name}</h1>
    </li>
  )
}

export default EmojiList
