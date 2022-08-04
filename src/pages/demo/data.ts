import Img from "../../../assets/1.png"

import type {
    DemoDataEntity
} from "../../model"




const getAjaxData = (init = 0, total = 10): Promise<DemoDataEntity[]> => {
    let DemoData: DemoDataEntity[] = []
    return new Promise<DemoDataEntity[]>((resolve) => {
        for (let i = init; i < total; i++) {
            DemoData.push({
                id: i,
                title: `苍老师出道影视剧0${i}`,
                img: Img,
                price: "0.01"
            })

        }
        setTimeout(() => {
            resolve(DemoData)
        }, 1000);
    })




}
export default getAjaxData