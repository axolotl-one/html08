const ImageCard = ({url, tittle}) => {
  return (
    <div className="image-container">
        <img src={url} alt={tittle} className="image-view" />
    </div>
  )
}

export default ImageCard