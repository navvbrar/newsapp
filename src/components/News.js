import React, { useEffect, useState } from 'react' ;
import Newsitem from './Newsitem' ;
import Spinner from './Spinner';
import PropTypes from 'prop-types' ;
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {  
   const[articles,setarticles] = useState([]);
   const[loading,setloading] = useState(true);
   const[page,setpage] = useState(1);
   const[totalResults,settotalResults] = useState(0);
   
  

  
 
   useEffect(()=>{
  updatenews();
  document.title=`${props.category} -newsExpress` ;
   },[])


 const updatenews = async  ()=>{ 
  props.setprogress(10);
  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
  setloading(true) 
  
    let fetchdata=await fetch(url)
    
    let parseddata = await fetchdata.json();
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    
props.setprogress(100);
}
   const handlenext = async()=>{
    if(page + 1 > Math.ceil(totalResults/props.pagesize)){

    } 
    else {/* {
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f2040134e324bad8dfb96e12c7eff05&page=${page + 1}&pageSize=${props.pagesize}` ;
     this.setState({
      loading : true
     })
    let fetchdata=await fetch(url)
    let parseddata = await fetchdata.json();
    
    this.setState({
      page: this.state.page + 1 ,
      articles: parseddata.articles ,
      totalResults : parseddata.totalResults ,
      loading : false
    })
  } */  
  setpage(page +1)
 
    updatenews(); }

  }
  const handleprev= async()=>{ 
    
   { /*  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f2040134e324bad8dfb96e12c7eff05&page=${this.state.page - 1}&pageSize=${props.pagesize}` ;
    this.setState({
      loading : true
     })
    let fetchdata=await fetch(url)
    let parseddata = await fetchdata.json();
    
    this.setState({
      page: this.state.page - 1 ,
      articles: parseddata.articles ,
      loading : false
    })  */}
    setpage(page -1)
    
    updatenews();
  } 
   const fetchMoreData = async()=>{
   
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`
    setpage(page+1)
    
    let fetchdata=await fetch(url)
    let parseddata = await fetchdata.json();
     setarticles(articles.concat(parseddata.articles ))
     settotalResults(parseddata.totalResults)
     setloading(false)
    
   }
   
  
    return ( 
      <>
      
      
  
      <h1 className='text-center ' style={{margin:"40px" ,marginTop:'90px'}}> news-expres latest news on {props.category} </h1>
       { /*this.state.loading && <Spinner/> */}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        > 
        <div className="container my-4">
        <div className="row my-3">
          { articles.map((element)=>{
            
          return  <div className="col-md-4 " key={element.url}>
                <Newsitem  title={element.title} des={element.description} imageurl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
                
            </div>
            
            
         }  )}
        </div> 
        </div>
       { /*  <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<= 1} type="button" className='btn btn-dark' onClick={this.handleprev}> &larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pagesize)} type="button" className='btn btn-dark' onClick={this.handlenext}> next &rarr; </button>
        </div> */ }
        </InfiniteScroll>
      
      </>
    )
    
  } 
  

News.defaultProps ={
  pagesize : 8,
  country: "in",
  category : "sports" 

}
News.propType ={
  country : PropTypes.string ,
  category : PropTypes.string
}

export default News
