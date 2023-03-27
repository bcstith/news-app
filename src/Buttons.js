import React from 'react'
import { useGlobalContext } from './context';



const Buttons = () => {

  const {page, results, setPage} = useGlobalContext();

  const startPage = results.page + 1;
  const endPage = results.nbPages;

  return (
    <div className="btn-container">

      {
        page > 0 &&
        <button className="btn"  onClick = {() => setPage(page - 1)}>Prev</button>
      }

      <p>{startPage} of {endPage}</p>
      {
        results.page !== endPage &&
        <button className="btn" onClick = {() => setPage(page + 1)}>Next</button>
      }

    </div>
  )
}

export default Buttons
