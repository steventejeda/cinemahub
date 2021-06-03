import { v4 as uuid } from 'uuid'; 

export const commentReducer = (state, action) => {
    switch(action.type) { 
        case 'ADD_COMMENT':
         return [...state, { 
            username: action.comment.username,
            content: action.comment.content,
            postId: uuid()
         }] 
    }
}