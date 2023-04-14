import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailImage from '../ThumbnailImage'
import GameOverCard from '../GameOverCard'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGameOver: false,
      score: 0,
      currentSeconds: 60,
      category: 'FRUIT',
      matchImageDetails: props.imagesList[0],
      shuffeledimagesList: props.imagesList,
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(this.countingSeconds, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  countingSeconds = () => {
    const {currentSeconds} = this.state
    if (currentSeconds > 0) {
      this.setState({currentSeconds: currentSeconds - 1})
    } else {
      this.setState({isGameOver: true})
      clearInterval(this.intervalID)
    }
  }

  ResetGame = () => {
    const {imagesList} = this.props
    this.setState({
      isGameOver: false,
      score: 0,
      currentSeconds: 60,
      category: 'FRUIT',
      matchImageDetails: imagesList[0],
    })
    this.intervalID = setInterval(this.countingSeconds, 1000)
  }

  changeSelectedTab = tabId => {
    this.setState({category: tabId})
  }

  checkMatchImageAndThumbnailImg = id => {
    const {matchImageDetails, score} = this.state
    const {imagesList} = this.props
    const isMatch = matchImageDetails.id === id
    if (isMatch) {
      const randomNo = Math.floor(Math.random() * imagesList.length)
      this.setState({
        score: score + 1,
        matchImageDetails: imagesList[randomNo],
        shuffeledimagesList: imagesList.sort(() =>
          Math.floor(Math.random() - 0.5),
        ),
      })
    } else {
      this.setState({isGameOver: true})
      clearInterval(this.intervalID)
    }
  }

  getTabList = () => {
    const {shuffeledimagesList} = this.state
    const {category} = this.state
    const tabList = shuffeledimagesList.filter(
      each => each.category === category,
    )
    return tabList
  }

  renderIsGameRunningContent = () => {
    const {tabsList} = this.props
    const selectedTabImagesList = this.getTabList()
    const {matchImageDetails, category} = this.state
    return (
      <div className="running-game-content-container">
        <div className="running-game-width-container">
          <img
            src={matchImageDetails.imageUrl}
            alt="match"
            className="match-img"
          />
          <ul className="tab-lists-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                key={eachTab.tabId}
                category={category}
                changeSelectedTab={this.changeSelectedTab}
              />
            ))}
          </ul>
          <ul className="thumbnailImage-list-container">
            {selectedTabImagesList.map(each => (
              <ThumbnailImage
                eachimageDetails={each}
                key={each.id}
                checkMatchImageAndThumbnailImg={
                  this.checkMatchImageAndThumbnailImg
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderGameOverCard = () => {
    const {score} = this.state
    return <GameOverCard score={score} ResetGame={this.ResetGame} />
  }

  render() {
    const {score, currentSeconds, isGameOver} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} currentSeconds={currentSeconds} />
        {isGameOver
          ? this.renderGameOverCard()
          : this.renderIsGameRunningContent()}
      </div>
    )
  }
}
export default MatchGame
