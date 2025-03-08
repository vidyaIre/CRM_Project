const customerModel = require('../models/customerModel');


module.exports = {
    createCustomer: async (req, res) => {
        //console.log("response:", res);
        try {
            const { name, email, location, phone } = req.body;
            //console.log("request body:",req.body);
            if (name && email && location && phone) {
                const newCustomer = new customerModel({
                    name, email, location, phone
                });
                const response = await newCustomer.save();
                //console.log("Customer created:", response);
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "Customer created successfully.....",
                    data: response
                });
            } else {
                //console.log("Missing fields in request body");
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: "All fields are required"
                });
            }

        } catch (error) {
            //console.log("Error in create customer:", error);
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal server Error!",
                data: error
            });
        }
    },
    getAllCustomers: async (req, res) => {
        try {
            const customers = await customerModel.find({ isDeleted: false });
            //console.log(customers);

            return res.status(200).json({
                success: true,
                statuscode: 200,
                count: customers.length,
                message: "All customers",
                data: customers
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                statuscode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }
};