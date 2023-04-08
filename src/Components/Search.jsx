import React, { useState } from 'react'
import { getImagesResult } from "../Services/ImagesService"
import { ListImages } from './ListImages'
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from 'react-infinite-scroll-component';

export const Search = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  //change the search value
  const handleQuery = (event) => {
    setQuery(event.target.value);
  }

  //Control the form submit
  const handleSubmit = async () => {
    if (query.length > 0) {
      setPageNum(pageNum + 1)
      setSpinnerFlag(true)
      setTimeout(async () => {
        const result = await getImagesResult(query, pageNum);
        setImages([...images, ...result]);
        setSpinnerFlag(false);
      }, 2000);
    }
  }

  //Spinner override styles
  const override = {
    display: "block",
    margin: "10% auto"
  };

  return (
    <div>
      <div className='flex  justify-center mt-36'>
        <form className='w-4/5 flex p-4 bg-slate-500 rounded-md'>
          <p className='text-2xl py-2 text-white'>Search: </p>
          <input className='w-full ml-3 px-2' id='query' name='query' type={"text"} onChange={handleQuery} value={query} placeholder="Please make your search!" />
          <button onClick={handleSubmit} type='button' className='text-white ml-1 py-2 px-4 bg-transparent border-2 border-solid border-white  rounded-md hover:bg-slate-400'>Find</button>
        </form>
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={handleSubmit}
        hasMore={true}
        loader={
          <ClipLoader
            loading={spinnerFlag}
            size={150}
            aria-label="Loading Spinner"
            cssOverride={override}
            data-testid="loader"
          />}
      >
        {images.length > 0 && <ListImages images={images}></ListImages>}
      </InfiniteScroll>
      {
        images.length == 0 && !spinnerFlag &&
        <div className='flex justify-center mx-1 my-52'>
          <div className='p-3 text-4xl rounded-md bg-blue-500 text-white'>
            Please, find anything!!
          </div>
        </div>
      }
    </div>

  )
}
