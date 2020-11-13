import React from 'react'

export default class ProductoItem extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}