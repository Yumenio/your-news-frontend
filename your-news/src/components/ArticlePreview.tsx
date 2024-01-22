import React from 'react'

export interface News{
    status:string;
    copyright: string;
    section:string;
    last_updated: string;
    num_results: string;
    results: Article[];
}

export interface Article{
    abstract: string;
    byline: string;
    item_type: string;
    published_date: string;
    section:string;
    short_url: string;
    subsection: string;
    title: string;
    url: string;
    multimedia: Multimedia[];
}

export interface Multimedia{
    caption: string;
    copyright: string;
    format: string;
    height: number;
    width: number;
    subtype: string;
    type: string;
    url: string;
}

const ArticlePreview = ({article}:{article:Article}) => {
  if(!article.multimedia){
    return null;
  }
  return (
      <div className="border-2 rounded-lg shadow-lg p-6 mb-4">
      <h1 className="text-4xl font-bold mb-2 font-cheltenhamItalicBold">{article.title}</h1>
      <p className="text-xl text-gray-700 mb-4 font-cheltenhamLight">{article.abstract}</p>
      <div className="rounded-lg overflow-hidden mb-4">
      <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} className="w-full h-auto" />
      </div>
      <a href={article.multimedia[0].url} className="text-blue-600 mb-2" target="_">
      View Image
      </a>
      <p className="text-sm text-gray-600 mb-2 underline font-bold">{article.byline}</p>
      <p className="text-sm text-gray-600 mb-4">{new Date(article.published_date).toLocaleDateString()}</p>
      <a className="text-blue-600" href={article.url} target="_">
      Read More
      </a>
      </div>
    );
};

export default ArticlePreview