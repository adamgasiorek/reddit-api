import {ADD_NEWS_SUCCESS, FETCH_NEWS_SUCCESS, SET_LAST_ITEM} from '../actions/list.action';
import {NewsModel} from '../models/news.model';

export interface State {
    news: Array<NewsModel>;
    after: string;
}

export const INITIAL_STATE: State = {
    news: [],
    after: ''
};


export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS: {
            return {
                ...state,
                news: action.payload.map((item) => item.data)
            };
        }

        case ADD_NEWS_SUCCESS: {
            return {
                ...state,
                news: [...state.news, ...action.payload.map((item) => item.data)]
            };
        }

        case SET_LAST_ITEM: {
            return {
                ...state,
                after: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getNews = (state) => state.news;
export const getAfter = (state) => state.after;
