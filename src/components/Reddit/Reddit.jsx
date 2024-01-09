import { useState, useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useSelector, useDispatch } from "react-redux";
import { requestArticles } from '../../reducers/hackerNewsReducer.js';

export default function Reddit() {
  const dispatch = useDispatch();

  const articles = useSelector(state => state.reddit.articles);
  const loading = useSelector(state => state.reddit.loading);

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  useEffect(() => {
    dispatch(requestArticles);
  }, [])

  return (
    <div className="news-container">
      <img src="../../assets/redditLogo.png" alt="" className='logo' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
