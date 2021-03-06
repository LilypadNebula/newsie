import React from 'react'

const NewsCard = ({article}) => {
  return <div className="flex flex-col justify-between shadow-md rounded w-full lg:w-1/3 m-4 border bg-white">
  <div className="overflow-hidden">
    <a href={article.url} target="_blank">
      <img src={article.urlToImage} alt={`Image for article: ${article.title}`} className="object-cover h-48 w-full"/>
    </a>
  </div>
  <div className="p-8 flex flex-col bg-white lg:h-64 overflow-hidden">
    <p className="text-xl font-bold">{article.title}</p>
    <p className="text-lg">{new Date(article.publishedAt).toLocaleDateString()}</p>
    <p className="hidden lg:block overflow-ellipsis">{article.description}</p>
  </div>
  <a className="p-4 m-6 bg-gray-700 text-white flex justify-center items-center rounded md:w-1/3" href={article.url} target="_blank">Read More</a>
</div>
}

export default NewsCard