import './index.css'

const TabItem = props => {
  const {tabDetails, category, changeSelectedTab} = props
  const {displayText, tabId} = tabDetails

  const btnClassName =
    tabId === category ? 'tab-btn selecte-tab-butn' : 'tab-btn'

  const onClickTab = () => {
    changeSelectedTab(tabId)
  }
  return (
    <li className="tab-Item-container">
      <button type="button" className={btnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
