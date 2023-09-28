// const express = require("express");
// const router = express.Router();
// const paypal = require("paypal-rest-sdk"); // Use the PayPal SDK

// // Configure PayPal SDK with your credentials (Client ID and Secret)
// paypal.configure({
//   mode: "sandbox", // Use "sandbox" for testing, "live" for production
//   client_id: process.env.PAYPAL_CLIENT_ID,
//   client_secret: process.env.PAYPAL_CLIENT_SECRET,
// });

// // Route to create a PayPal order
// router.post("/createOrder", async (req, res) => {
//   try {
//     // Create an order using PayPal API
//     const createOrderResponse = await paypal.orders.create({
//       // Include order details (e.g., items, total) here
//     });

//     // Extract the order ID from the response
//     const orderID = createOrderResponse.result.id;

//     // Return the order ID to the client
//     res.json({ orderID });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Unable to create order" });
//   }
// });

// module.exports = router;
