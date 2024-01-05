import React, { useEffect, useState } from "react";
import Spinner from "../contsiner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./Navbar";
import Profile from "../contsiner/Profile";
import Category from "../contsiner/Category";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.size}&page=${page}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&pageSize=${
      props.size
    }&page=${page + 1}`;
    setPage(page + 1);
    // this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div className="bg-[#f8f9fa] ">
      <Navbar />
      <div className="grid grid-cols-6 gap-8 min-h-screen px-20  py-5">
          <div className="col-start-1 col-end-2 mt-2 fixed">
            <Profile />
            <Category />
          </div>
          <div className="col-start-2 col-end-7">

          <h1 className="font-bold text-2xl font-sans mb-5 ">
        News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4">
                {articles.map((element) => {
                  const {
                    title,
                    description,
                    urlToImage,
                    url,
                    author,
                    publishedAt,
                  } = element;
                  return (
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-1 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={
                            !urlToImage
                              ? "https://images.news18.com/ibnlive/uploads/2022/02/budget2022_markets-2-164368703516x9.jpeg"
                              : urlToImage
                          }
                          alt="image"
                        />
                        <div className="p-6">
                          <div className="flex justify-between items-center">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              CATEGORY
                            </h2>
                            <small className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              {new Date(publishedAt).toGMTString()}
                            </small>
                          </div>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {!description
                              ? "For the past seven years, a chunk of an old SpaceX Falcon 9 rocket has been circling the Earth in an extremely wide orbit. And this large piece of space junk is likely to slam into the moon’s far side, causing a blazing explosion."
                              : description}
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a
                              href={url}
                              target="_blank"
                              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Read More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </InfiniteScroll>
            </div>
            </div>
      
    </div>
  );
};

export default News;
