import Card from './Card'

export default function CardContainer({pokeName, setPokeName, answer}) {
    return (
        <>
            <div className="card-container">
                <Card pokeName={pokeName} setPokeName={setPokeName} answer={answer}/>
            </div>
        </>
    )
}