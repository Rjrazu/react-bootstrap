import React from 'react';

const News = (props) => {

    const { title, description, urlToImage } = props.news;
    return (
        <div className=" justify-items-center">

            <div>
                <img className="w-2/4 h-1/4 " src={urlToImage} alt="" />

                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default News;