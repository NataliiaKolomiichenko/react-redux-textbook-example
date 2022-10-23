// ===== Redux Toolkit ===== //
import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer, filtersReducer } from "./reducers";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    }
})

// ===== Redux ===== //
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducers";

// const enhancer = devToolsEnhancer()

// export const store = createStore(rootReducer, enhancer);