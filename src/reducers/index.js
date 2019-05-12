import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducers';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});
export default rootReducer;
