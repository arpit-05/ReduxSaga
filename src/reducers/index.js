import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducers';
import errorReducer from './errorReducer';
const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
});
export default rootReducer;
