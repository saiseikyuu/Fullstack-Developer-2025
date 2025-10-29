
export default function Entry(props) {
    return (
        <>
          <h1>{props.country}</h1>
          <p>{props.title}</p>
          <img src={props.img.src} alt={props.img.alt} />
          <p>{props.dates}</p>
          <p>{props.text}</p>
        
        </>
    )
}