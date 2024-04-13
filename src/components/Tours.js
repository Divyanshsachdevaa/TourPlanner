import Card from './Card';

function Tours({tours, removecard}){ // tours = inComing data
    return (
        <div className="container">
            <div>
                <h2 className="myName">Plan With Divyansh</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removecard={removecard}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;