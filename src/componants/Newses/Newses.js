import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../Card/News';

const Newses = () => {
    const [newses, setNewses] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=1ee1fbe0b6a54e09978afeca67e99735')
            .then(res => res.json())
            .then(data => setNewses(data.articles))
    }, [])
    return (
        <div>
            {
                newses.length === 0 ?
                    <Spinner className="mt-5" animation="border" />
                    :
                    <Row xs={1} md={3} className="g-4">
                        {
                            newses.map(nw => <News news={nw}></News>)
                        }
                    </Row>
            }
        </div>
    );
};

export default Newses;