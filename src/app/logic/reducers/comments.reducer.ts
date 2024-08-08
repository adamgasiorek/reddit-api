import {FETCH_ARTICLE_SUCCESS, FETCH_COMMENTS_SUCCESS} from '../actions/comments.action';
import {ArticleModel} from '../models/article.model';
import {CommentModel} from '../models/comment.model';

export interface State {
    article: ArticleModel;
    comments: CommentModel;
}

export const INITIAL_STATE: State = {
    article: null,
    comments: null
};

export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: action.payload
            };
        }

        case FETCH_ARTICLE_SUCCESS: {
            return {
                ...state,
                article: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getArticle = (state) => state.article;
export const getComments = (state) => state.comments;
