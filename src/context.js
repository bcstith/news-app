import React, { useContext, useState, useEffect, useReducer, useCallback } from 'react'

// import {
//   SET_LOADING,
//   SET_STORIES,
//   REMOVE_STORY,
//   HANDLE_PAGE,
//   HANDLE_SEARCH,
// } from './actions'
// import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search'

//const initialState = {}

const AppContext = React.createContext();


let url = `${API_ENDPOINT}`;


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('react');
  const [page, setPage] = useState(0);
  const [news, setNews] = useState([]);
  const [results, setResults] = useState([])

  const getStories = useCallback(async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}?query=${searchTerm}&page=${page}`);
      const data = await response.json();

      console.log(data)

        if(data){
          setNews(data.hits);
          setResults(data)
          setLoading(false);
        } else {
          setNews([]);
        }

    } catch (error){
        console.log(error);
    }

    setLoading(false);

  }, [searchTerm, page])

  useEffect(() => {
    getStories()
  }, [searchTerm, page, getStories])


  return <AppContext.Provider value={{loading, page, results, news, setPage, setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
