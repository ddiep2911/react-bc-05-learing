import { getInRandom } from "../../utils/getInRamdom"

const initialState = {
    banChon: true, // true là tài , false là xỉu
    soBanThang: 0,
    soBanChoi: 0,
    xucXacs: [
        {
            imgSrc: "./img/gameXucXac/1.png",
            diem: "1",
        },
        {
            imgSrc: "./img/gameXucXac/2.png",
            diem: "2",
        },
        {
            imgSrc: "./img/gameXucXac/6.png",
            diem: "6",
        },
    ],
}

const xucXacMau = [
    {
        imgSrc: "./img/gameXucXac/1.png",
        diem: 1,
    },
    {
        imgSrc: "./img/gameXucXac/2.png",
        diem: 2,
    },
    {
        imgSrc: "./img/gameXucXac/3.png",
        diem: 3,
    },
    {
        imgSrc: "./img/gameXucXac/4.png",
        diem: 4,
    },
    {
        imgSrc: "./img/gameXucXac/5.png",
        diem: 5,
    },
    {
        imgSrc: "./img/gameXucXac/6.png",
        diem: 6,
    },
];
const xucXacReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "XU_LY_BAN_CHON":
            state.banChon = payload
            return state

        case "LAC_XUC_XAC":
            const xucXacs = [
                xucXacMau[getInRandom(5)],
                xucXacMau[getInRandom(5)],
                xucXacMau[getInRandom(5)],
            ]
            state.xucXacs = xucXacs
            return state
        case "TINH_KET_QUA": {
            let { xucXacs, banChon, soBanThang, soBanChoi } = state;
            const tongSoDiem = xucXacs.reduce((tongDiem, item) => {
                return (tongDiem += item.diem);
            }, 0)

            let taiOrXiu;
            if (tongSoDiem >= 11) {
                taiOrXiu = true;
            } else {
                taiOrXiu = false;
            }

            if (banChon === taiOrXiu) {
                state.soBanThang += 1;
                state.soBanChoi += 1;
            } else {
                state.soBanChoi += 1
            }
            return state
        }
        default:
            return state
    }
    // return state
}



export default xucXacReducer;