function Card({title, text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}) {
  return (
    <article className="card">
        <i className="far fa-clone" />
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="" className="cta">Learn more</a>
    </article>
  )
}

export default Card