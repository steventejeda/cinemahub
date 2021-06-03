import React, { createContext, useReducer, useEffect} from 'react';
import { commentReducer } from '../reducers/commentReducer'

export const CommentContext = createContext();

const CommentContextProvider = (props) => { 
    const [comments, dispatch] = useReducer(commentReducer, []);
    useEffect(() => { 
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments]);
    return (
        <CommentContext.Provider value={{comments, dispatch}}>
             { props.children }
        </CommentContext.Provider>
    )
}

export default CommentContextProvider