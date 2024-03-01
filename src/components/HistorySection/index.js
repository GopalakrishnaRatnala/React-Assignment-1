import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class HistorySection extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {
      searchInput: '',
      browserHistory: initialHistoryList,
    }
  }

  reqHistory = event => this.setState({searchInput: event.target.value})

  clearItem = id => {
    const {browserHistory} = this.state
    const reqList = browserHistory.filter(each => each.id !== id)
    this.setState({browserHistory: reqList})
  }

  render() {
    const {searchInput, browserHistory} = this.state
    if (browserHistory.length === 0) {
      return <p>There is no history to show</p>
    }
    const filteredHistory = browserHistory.filter(eachOne =>
      eachOne.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="history_section_container">
        <div className="header_section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history_logo"
          />
          <div className="input_search_icon_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search_icon"
            />
            <input
              type="search"
              placeholder="Search history"
              onChange={this.reqHistory}
            />
          </div>
        </div>
        <div className="history_container">
          {filteredHistory.length === 0 && searchInput !== '' ? (
            <p>There is no history to show</p>
          ) : (
            <ul>
              {filteredHistory.map(eachHistory => (
                <HistoryItem
                  eachHistory={eachHistory}
                  key={eachHistory.id}
                  clearItem={this.clearItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistorySection
