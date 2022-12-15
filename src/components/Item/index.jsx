import React from 'react'

const Item = ({title}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="https://imgs.search.brave.com/aCstRdXYZ4ChEmakdZBvPJrn83tuyI3EwH036xBL6PQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90ZXJh/Y29tcHV0ZXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMi84MTJMNm9T/bW14TC5fQUNfU0wx/NTAwXy5qcGc" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Item