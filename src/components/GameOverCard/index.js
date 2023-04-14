import './index.css'

const GameOverCard = props => {
  const {score, ResetGame} = props
  const onClickPlayAgain = () => {
    ResetGame()
  }

  return (
    <div className="game-over-bg-container">
      <div className="game-over-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="your-score-text">YOUR SCORE</p>
        <p className="score">{score}</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameOverCard
