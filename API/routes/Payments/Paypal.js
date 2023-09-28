// paypal.Buttons({
//   createOrder() {
//     // This function sets up the details of the transaction, including the amount and line item details.
//     return fetch("/api/checkout/createOrder", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         order: {
//           userId: "6511b0c2f8facf532468e5ab", // Replace with the actual user ID
//           products: [
//             {
//               productId: "12345678", // Replace with the actual product ID
//               quantity: 2, // Replace with the actual quantity
//             },
//             {
//               productId: "9irydhye", // Replace with the actual product ID
//               quantity: 1, // Replace with the actual quantity
//             },
//           ],
//           amount: 50, // Replace with the actual total amount
//           address: "USA", // Replace with the actual shipping address
//         },
//       })
//     });
//   },
//   onApprove(data) {
//     // This function captures the funds from the transaction.
//     return fetch("/api/checkout/capturePayment", {
//       method: "POST",
//       body: JSON.stringify({
//         orderID: data.orderID
//       })
//     })
//     .then((response) => response.json())
//     .then((details) => {
//       // This function shows a transaction success message to your buyer.
//       alert('Transaction completed by ' + details.payer.name.given_name);
//     });
//   },
//   onError(error) {
//       // Handle any errors that occur during the payment process.
//       console.error(error);
//   }
// })


// // const order = {
// //   userId: "6511b0c2f8facf532468e5ab", // Replace with the actual user ID
// //   products: [
// //     {
// //       productId: "12345678", // Replace with the actual product ID
// //       quantity: 2, // Replace with the actual quantity
// //     },
// //     {
// //       productId: "9irydhye", // Replace with the actual product ID
// //       quantity: 1, // Replace with the actual quantity
// //     },
// //   ],
// //   amount: 50, // Replace with the actual total amount
// //   address: "USA", // Replace with the actual shipping address
// // };

// // const purchaseUnits = order.products.map((product) => ({
// //   description: `Product ID: ${product.productId}`,
// //   amount: {
// //     currency_code: 'USD',
// //     value: (product.quantity * 10).toFixed(2), // Assuming each product costs $10
// //   },
// //   quantity: product.quantity,
// // }));

// // return actions.order.create({
// //   purchase_units,
// // });
// // }

// // //This function displays payment buttons on your web page.