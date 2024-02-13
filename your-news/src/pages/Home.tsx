import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CategorySelector from '../components/CategorySelector'
import ArticlePreview, { News } from '../components/ArticlePreview';
import axios from 'axios';
import Footer from '../components/Footer';

const Home = ({token}:{token:string|null}) => {
  const [apiResponse, setApiResponse] = useState<News|null>(null);
  const [category, setCategory] = useState(0);
  const getData = () => {
    axios(`https://localhost:7226/api/top-headlines?category=${category}`)
    .then(response =>{
      console.log(category, response.data)
      setApiResponse(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  }
  useEffect(()=>{
    getData();
    console.log("App", category);
  }, [category, token])
  

  if(!token || token==""){
    return (
      <h1 className="flex flex-col items-center mt-40 text-3xl">
        Please Login
      </h1>
    )
  }

  return (
    <>
      <CategorySelector onSelectCategory={setCategory} />
        <ol className='max-w-2xl mx-auto'>
          {
            apiResponse?
              apiResponse.results.map(e => (<ArticlePreview key={e.title} article={e}/>)):
              ""
          }
        </ol>
        <Footer copyright={apiResponse?.copyright}/>
    </>
  )
}

export default Home