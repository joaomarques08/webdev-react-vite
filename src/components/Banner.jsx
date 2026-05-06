import dog from '../assets/adestramento.jpg'

export default function Banner({site, texto}){
    return(
        <>
            <p>Texto principal do {site}</p>
            <img src={dog} alt={texto} />
        </>
    )
}