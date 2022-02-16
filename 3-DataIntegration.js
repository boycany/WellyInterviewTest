/**
    將輸入資料整合成期望的輸出結果。

    const result = [ 
    {
        user: { id: 'U01', name: 'Tom' }, 
        orders: [
            { id: 'T01', name: 'A', price: 499 },
            { id: 'T02', name: 'B', price: 599 }, 
        ],
    },
    …,
    ]

 */

//---------input-----------

const userIds = ['U01', 'U02', 'U03'] 
const orderIds = ['T01', 'T02', 'T03', 'T04'] 

const userOrders = [			
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
]

const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' } 

const orderData = {						
    'T01': { name: 'A', price: 499 }, 
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 }, 
    'T04': { name: 'D', price: 799 }
} 

//---------result----------

const result = userOrders.map(userOrder =>{
    let userId = userOrder.userId
    let obj = {
        user: {id: userId, name: userData[userId]},
        orders: userOrder.orderIds.map(orderId=>{
            let objOrder = {
                id: orderId,
                name: orderData[orderId].name,
                price: orderData[orderId].price
            }
            return objOrder
        })
    }
    return obj    
})

console.log(result);

