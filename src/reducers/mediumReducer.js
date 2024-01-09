import axios from "axios";

const initialState = {
  loading: false,
  articles: [],
};

export const requestArticles = async (dispatch) => {
  dispatch({type: "PENDING"});
  const { data } = await axios.get("/api/medium").catch((err) => console.log(err));
  dispatch({type: "REQUEST_ARTICLES", payload: data});
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case "PENDING": 
      return { ...state, loading: true };
    case "REQUEST_ARTICLES":
      return { ...state, loading: false, articles: action.payload };
    default:
      return state;
  }
}