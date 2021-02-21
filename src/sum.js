// import React, { useState } from 'react';

// export default function Sum() {
//     // const [points, setPoints] = useState({
//     //     blue: '',
//     //     green: '',
//     //     yellow: '',
//     //     purple: '',
//     //     pyramid: '',
//     //     science: '',
//     //     coins: '',
//     //     military: ''
//     // });

//     const [points, setPoints] = useState(0);

//     // const pointsHandler = (e) => {
//     //     let color = e.target.color;
//     //     let point = e.target.point;
//     //     const newPoints = {
//     //         ...points,
//     //         [color]: point
//     //     }
//     //     setPoints(newPoints)

//     //     calcTotal(newPoints)
//     // }

//     const [total, setTotal] = useState(0);

//     const calcTotal = (newPoints) => {
//         const {blue, green, yellow, purple, pyramid, science, coins, military} = newPoints;
//         const newTotal = parseInt(blue) + parseInt(green) + parseInt(yellow) + parseInt(purple) + parseInt(pyramid) + parseInt(science) + parseInt(coins) + parseInt(military)
//         setTotal(newTotal)
//     }
// }