import { useState, useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useSelector, useDispatch } from "react-redux";
import { requestArticles } from '../../reducers/hackerNewsReducer.js';

export default function Medium() {
  const dispatch = useDispatch();

  const articles = useSelector(state => state.medium.articles);
  const loading = useSelector(state => state.medium.loading);
  
  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  return (
    <div className="news-container">
      <img src="../../assets/mediumLogo.png" style={{ width: '250px' }} alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
