import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // Import PayPalScriptProvider


// const PAYPAL_SDK_OPTIONS = {
//   'client-id': 'ASZWLz18x7JGluajDI86ttqQdLaUz3532Ilth_2jA90BmA8aHzlmOuf4EaKlPoGmij_8Btu6baHS8psZ', // PayPal client ID
//   'currency': "USD",
//   'style': {
//     color: 'gold',
//     shape: 'pill',
//     size: 'responsive', // Other options: small, medium, large
//   },
  

  // PayPal SDK options here
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <PayPalScriptProvider options={PAYPAL_SDK_OPTIONS}>Wrap with PayPalScriptProvider */}
        <App />
      {/* </PayPalScriptProvider> */}
    </PersistGate>
  </Provider>
);
