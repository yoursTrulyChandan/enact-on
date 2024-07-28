import ellipse5 from "../assets/Ellipse5.png"
import ellipse6 from "../assets/Ellipse6.png"
import ellipse7 from "../assets/Ellipse7.png"
import ellipse8 from "../assets/Ellipse8.png"
import shipping from "../assets/Vector (2).png"
import customer from "../assets/Vector (1).png"
import guarantee from "../assets/Vector.png"
import offerBg from "../assets/Rectangle7.png"

export const products = [
    {
        name: "CINNAMON HONEY",
        prevPrice: "$12.00",
        newPrice: "$9.00",
        img: ellipse5

    }, {
        name: "COCONUT OIL",
        prevPrice: "$20.00",
        newPrice: "$15.00",
        img: ellipse6
    }, {
        name: "MANGO HONEY",
        prevPrice: "$9.00",
        newPrice: "$6.00",
        img: ellipse7
    }, {
        name: "HONEY HABANERO",
        prevPrice: "$12.00",
        newPrice: "$9.00",
        img: ellipse8
    }, {
        name: "COCONUT OIL",
        prevPrice: "$20.00",
        newPrice: "$15.00",
        img: ellipse6
    }, {
        name: "MANGO HONEY",
        prevPrice: "$9.00",
        newPrice: "$6.00",
        img: ellipse7
    }, {
        name: "HONEY HABANERO",
        prevPrice: "$12.00",
        newPrice: "$9.00",
        img: ellipse8
    },
]

export const offerData = [
    {
        img: offerBg,
        discount: "20",
        couponCode: "Chef20"
    },{
        img: offerBg,
        discount: "30",
        couponCode: "Chef30"
    },{
        img: offerBg,
        discount: "40",
        couponCode: "Chef40"
    },{
        img: offerBg,
        discount: "50",
        couponCode: "Chef50"
    }
]

export const footerData = [
    {
    img: shipping,
    title: "FREE SHIPPING WORLDWIDE",
    content: "Guaranteed Delivery"
},{
    img: customer,
    title: "24/7 CUSTOMER SERVICE",
    content: "Text Us 24/7 at 070-7782-9137"
},{
    img: guarantee,
    title: "QUALITY GUARANTEE!",
    content: "Send Within 30 Days"
},
]
