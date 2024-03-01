import './index.css'

const HistoryItem = props => {
  const {eachHistory, clearItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
  const deleteHistory = () => {
    clearItem(id)
  }
  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="historyContentContainer">
        <div className="logoAndDomain">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-domainUrl">
            <p htmlFor={title} className="title">
              {title}
            </p>
            <p id={title} className="domain_name">
              {domainUrl}
            </p>
          </div>
        </div>
        <button type="button" data-testid="delete" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete_icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
