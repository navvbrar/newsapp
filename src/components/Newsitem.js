import React from 'react' ;

const Newsitem =(props)=>{
  
    let {title,des ,imageurl,url,publishedAt,author,source} =props
    return (
      <div>
    <div className="card" >
    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success" style={{zIndex:"1", left: "60%"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{des}</p>
    <p className='card-text'>by{author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }

export default Newsitem


