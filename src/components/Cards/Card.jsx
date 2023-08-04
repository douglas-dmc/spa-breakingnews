export function Card({ props }) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.image} alt="Imagem" />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{props.likes}</span>
            <i className="bi bi-chat"></i>
            <span>{props.comments}</span>
        </section>
    )
}
