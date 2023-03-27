import React from 'react';
import {Link} from 'react-router-dom'

import { useGlobalContext } from './context';


const Stories = () => {
  const {news, loading} = useGlobalContext();



  if(loading){
    return (<h1 className="loading">Loading ...</h1>)
  }

  console.log(news)

  return (
    <section className='stories'>

      {
        news.map((item, index) => {

          const {title, points, author, num_comments, url} = item

          return (
            <article className="story" key={index}>
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by {author} | 12 comments</p>
            <Link to={url} className="read-link" target="_blank">Read More</Link> <button className="remove-btn">Remove</button>
          </article>
          )

        })
      }



     
    </section>
  )
}

export default Stories
