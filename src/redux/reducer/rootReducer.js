import { combineReducers } from "redux";
import cauThuReducer from "./cauThuReducer";
import heroReducer from "./HeroReducer";
import xucXacReducer from "./xucXacReducer"

const rootReducer = combineReducers({
    // truyền reducer con vào 


    // es5
    // cauThuReducer: cauThuReducer,


    // es6
    // cauThuReducer,

    // es5
    cauThu: cauThuReducer,


    hero: heroReducer,

    xucXac: xucXacReducer,
})

export default rootReducer;
