import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import axios from 'axios';
import ArticlePreview, { News } from './components/ArticlePreview';
import CategorySelector from './components/CategorySelector';
import Footer from './components/Footer';

function App() {
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
  }, [category])
  return (
    <div className="App">
      <NavBar/>
      <CategorySelector onSelectCategory={setCategory} />
      <ol className='max-w-2xl mx-auto'>
        {
          apiResponse?
            apiResponse.results.map(e => (<ArticlePreview key={e.title} article={e}/>)):
            ""
        }
      </ol>
      <Footer copyright={apiResponse?.copyright}/>
    </div>
  );
}

export default App;
