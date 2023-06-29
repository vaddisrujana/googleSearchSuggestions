import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDisplay = id => {
    const {suggestionsList} = this.props
    this.setState({searchInput: suggestionsList[id - 1].suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="background1">
          <div className="background2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image2"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="search google"
            />
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionsList={each}
                  onDisplay={this.onDisplay}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
