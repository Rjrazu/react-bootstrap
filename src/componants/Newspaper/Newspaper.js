import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=1ee1fbe0b6a54e09978afeca67e99735')
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div>
            {
                news.map(nw => <News
                    news={nw}
                ></News>)
            }
        </div>
    );
};

export default Newspaper;