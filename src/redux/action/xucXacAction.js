import { XU_LY_BAN_CHON } from "../constants/xucXacConst"

export const xuLyBanChonAction = (taiOrXiu) => {
    return {
        type: XU_LY_BAN_CHON,

        payload: taiOrXiu,
    }
};