
const initialState = {
    name: "Yone",
    image: "https://1.bp.blogspot.com/-fBgTjeMOqKo/XxsuFUZAy-I/AAAAAAABpdo/lYlTP2bTY2cH5x-sAYW4dqaM7nvRlccyQCLcBGAsYHQ/s1600/777000.jpg",
    level: 1,
}


const heroReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log("type: ", type);

    switch (type) {
        case "TANG_CAP_DO":
            state.level += 1;
            // break;
            return state;

        case "DOI_HINH_ANH":
            state.image = payload.image;
            // break;
            return state;

        default:
            break;
    }

    // if (type === "TANG_CAP_DO") {
    //     state.level += 1;
    // }
    return state;
}

export default heroReducer;