import { Images } from "../../../../image"

let iconAppArr = [
    { icon: Images.home.ic_home_1, name: '外卖' },
    { icon: Images.home.ic_home_2, name: '美食' },
    { icon: Images.home.ic_home_3, name: '咖啡' },
    { icon: Images.home.ic_home_4, name: '休闲' },
    { icon: Images.home.ic_home_5, name: '甜品' },
    { icon: Images.home.ic_home_6, name: '西餐' },
    { icon: Images.home.ic_home_7, name: '优选' },
    { icon: Images.home.ic_home_8, name: '旅游' },
    { icon: Images.home.ic_home_9, name: '买药' },
    { icon: Images.home.ic_home_10, name: '团好货' }
]
iconAppArr = iconAppArr.concat(iconAppArr).concat(iconAppArr)
let pageArr = []
for (let i = 0; i < iconAppArr.length; i += 15) {
    pageArr.push(iconAppArr.slice(i, i + 15))
}

export {
    pageArr
}