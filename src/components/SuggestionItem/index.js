import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onDisplay} = props
  const {suggestion, id} = suggestionsList
  const display = () => {
    onDisplay(id)
  }
  return (
    <li>
      <div className="back">
        <p>{suggestion}</p>
        <button type="button" className="button" onClick={display}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="image1"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
