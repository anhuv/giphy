import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./Loader";
import Paginate from "./Paginate";
import { reactionSelector } from "../redux/selector";
import reactionSlice from "./reactionSlice";

const Giphy = () => {
  const dispatch = useDispatch();
  const ReactionList = useSelector(reactionSelector);
  // console.log("===============");
  // console.log(ReactionList);
  // console.log("===============");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //page 1 item 1 - item 25
  //page 2 item 26 - item 50
  //page 3 item 51 - item 75
  const handleAddButtonClick = (e) => {
    // console.log("check click", e.target.src, e.target.id);
    dispatch(
      reactionSlice.actions.addLike({
        id: e.target.id,
        src: e.target.src,
      })
    );
    // setTodoName('');
    // setPriority('Medium');
  };
  const handleRemoveButtonClick = (e) => {
    dispatch(
      reactionSlice.actions.removeLike({
        id: e.target.id,
        src: e.target.src,
      })
    );
    // s
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "5w3ce41VvEQtQQ9CD8c1XCYVRrafzZHg",
            limit: 100,
          },
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return currentItems.map((el) => {
      // console.log("check");
      // console.log(el.id);
      if (ReactionList.find((o) => o.id === el.id)) {
        return (
          <div key={el.id} className="gif bg-danger p-1">
            <img
              id={el.id}
              src={el.images.fixed_height.url}
              srcSet=""
              onClick={handleRemoveButtonClick}
            />
          </div>
        );
      }
      return (
        <div key={el.id} className="gif p-1">
          <img
            id={el.id}
            src={el.images.fixed_height.url}
            srcSet=""
            onClick={handleAddButtonClick}
          />
        </div>
      );
    });
  };
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "5w3ce41VvEQtQQ9CD8c1XCYVRrafzZHg",
          q: search,
          limit: 100,
        },
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-2">
      {renderError()}
      <form className="form-inline justify-content-center m-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search"
          className="form-control col-6"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        >
          Go
        </button>
      </form>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;
