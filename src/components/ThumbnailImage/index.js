import './index.css'

const ThumbnailImage = props => {
  const {eachimageDetails, checkMatchImageAndThumbnailImg} = props
  const {thumbnailUrl, id} = eachimageDetails
  const onClickThumbnailImg = () => {
    checkMatchImageAndThumbnailImg(id)
  }
  return (
    <li className="thumbnail-img-Item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnailImg}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ThumbnailImage
