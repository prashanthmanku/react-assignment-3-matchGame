import './index.css'

const NavBar = props => {
  const {score, currentSeconds} = props
  return (
    <div className="navbar-bg-container" id="top">
      <div className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-items-container">
          <li className="score-text">
            <p>
              {' '}
              Score: <span className="score-secons-count">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="score-secons-count">{currentSeconds} sec</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default NavBar
