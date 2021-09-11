import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducer";

const initialValue = {}

const middleware = [thunk]

const store = createStore(createRootReducer(), initialValue, compose(applyMiddleware(...middleware)))

export default store
