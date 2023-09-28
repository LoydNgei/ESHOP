// const express = require("express");
// const router = express.Router();
// const paypal = require("paypal-rest-sdk"); // Use the PayPal SDK

// // Configure PayPal SDK with your credentials (Client ID and Secret)
// paypal.configure({
//   mode: "sandbox", // Use "sandbox" for testing, "live" for production
//   client_id: process.env.PAYPAL_CLIENT_ID,
//   client_secret: process.env.PAYPAL_CLIENT_SECRET,
// });

// // Route to capture a PayPal payment
// router.post("/capturePayment", async (req, res) => {
//   const { orderID } = req.body;

//   try {
//     // Capture the payment using PayPal API
//     const captureResponse = await paypal.payments.capture(orderID);

//     // Handle successful payment confirmation
//     // You may want to update your database and send a confirmation response
//     res.json({ message: "Payment captured successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Unable to capture payment" });
//   }
// });

// module.exports = router;
