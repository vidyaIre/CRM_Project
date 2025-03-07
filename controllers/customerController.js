const customerModel = require('../models/customerModel');


module.exports = {
    createCustomer: (req, res) => {
        try {
            const { name, email, phone } = req.body;
            console.log(name, email, phone);

            if (name && email && phone) {
                const newCustomer = new customerModel({
                    name, email, phone
                });
                newCustomer.save()
                    .then((response) => {
                        console.log(response);
                        return res.status(200).json({
                            success: true,
                            statuscode: 200,
                            message: "Customer created successfully",
                            data: response
                        });
                    }).catch((error) => {
                        return res.status(500).json({
                            success: false,
                            statuscode: 500,
                            message: "Internal Server Error1",
                            data: error
                        });
                    })
            } else {
                return res.status(400).json({
                    success: false,
                    statuscode: 400,
                    message: "All fields are required"
                })
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                statuscode: 500,
                message: "Internal Server Error2",
                data: error
            })
        }
    }
}