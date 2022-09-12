import axios from 'axios'
const baseURL = 'https://alrayhan-rate.herokuapp.com'

const checkUser = async (username,password) => {
    let data = {username, password};
    // return new Promise((resolve,reject) => {
    //     axios({
    //         baseURL,
    //         method:'get',
    //         url:'/check-user',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         timeout:10000,
    //         data:JSON.stringify(data)
    //     })
    //     .then((response) => {
    //         resolve(response)
            
    //     })
    //     .catch((error) => {
    //         reject()
    //     });
    // })
    return new Promise((resolve,reject) => {
        const response = {
            status: 'success',
            data : {
                username : "hisham",
                cardcode : "C0000075"
            }
        }
        resolve(response)
    })
}

const registerUser = async (username,password,cardCode,confirmPass) => {
    let data = {username, password,cardCode,confirmPass};
    // return new Promise((resolve,reject) => {
    //     axios({
    //         baseURL,
    //         method:'post',
    //         url:'/register-user',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         timeout:10000,
    //         data:JSON.stringify(data)
    //     })
    //     .then((response) => {
    //         resolve(response)
            
    //     })
    //     .catch((error) => {
    //         reject()
    //     });
    // })
    return new Promise((resolve,reject) => {
        const response = {
            status: 'success',
            data : {
                username : "hisham",
                cardcode : "C0000075"
            },
            msg:"nothing"
        }
        resolve(response)
    })
}

const getOrders = async (cardcode) => {
    return new Promise((resolve,reject) => {
        axios({
            baseURL,
            method:'get',
            url:`/supervisor-orders/${cardcode}`,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout:30000,
        })
        .then((response) => {
            const mappedResults = response.data.orders.map(rec => {
                const arr = rec.Comments.split(",")
                return {
                    APPNO: rec.APPNO,
                    CardName: rec.CardName,
                    DocTotal: rec.DocTotal,
                    City: arr[0].split(":-")[1].split(":")[1],
                    Phone: arr[1].split(":")[1],
                    Name: arr[2].split(":")[1],
                }
            })
            resolve(mappedResults)
            
        })
        .catch((error) => {
            reject()
        });
    })
}

export default {
    checkUser,
    registerUser,
    getOrders
}