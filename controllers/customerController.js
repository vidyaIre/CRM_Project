const customerModel = require('../models/customerModel');


module.exports = {
    createCustomer: (req, res) => {
        console.log("response:",res);

    }
    // getAllCustomers: async(req, res) => {
    //     try {
    //         const customers = await customerModel.find({isDeleted: false});
    //         console.log(customers);

    //         return res.status(200).json({
    //             success: true,
    //             statuscode: 200,
    //             message: "All customers",
    //             data: customers
    //         })
    //     } catch (error) {
    //         return res.status(500).json({
    //             success: false,
    //             statuscode: 500,
    //             message: "Internal Server Error",
    //             data: error
    //         })
    //     }
    // }
}