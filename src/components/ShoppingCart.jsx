import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Vector from "../assets/vector4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [showCheckout, setShowCheckout] = React.useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex w-full h-full bg-white dark:bg-gray-950" style={{
      backgroundImage: `url(${Vector})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className="container mx-auto min-h-screen mt-16 p-16">
        <h1 className="text-5xl font-lato font-thin mb-4 pb-12" data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true">Shopping Cart</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
          {cartItems.map((item, index) => (
            <div key={index} className="w-full max-w-xs h-[200px] group rounded-2xl bg-white dark:bg-secondary dark:bg-opacity-35 hover:bg-secondary hover:text-white duration-300 p-2 shadow-xl relative" data-aos="fade-up">
              <div className="h-[80px] mb-2 flex justify-center items-center">
                <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain transform group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-lg font-bold mb-1 dark:text-white">{item.name}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-xs">${item.price.toFixed(2)} x {item.quantity}</p>
                <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center h-12 bg-primary dark:bg-white rounded-2xl bg-opacity-30 dark:bg-opacity-10 p-12 mb-12 mt-8" data-aos="fade-up">
          <span className="text-3xl font-semibold">Total:</span>
          <span className="text-3xl font-semibold">${totalAmount.toFixed(2)}</span>
        </div>
        {totalAmount > 0 && (
          <div className="flex mb-4 w-full justify-center items-center" data-aos="fade-up">
            <button
              className="bg-third hover:bg-primary hover:text-black hover:font-bold w-36 h-12 mb-6 text-2xl transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-xl"
              onClick={() => setShowCheckout(true)}
            >
              Checkout
            </button>
          </div>
        )}
        {showCheckout && (
          <div className="flex justify-center items-center" data-aos="fade-up">
            <PayPalScriptProvider options={{ "client-id": "Ab4vVZlBNRe9VxzeF0JOHfvykHbYGE6UZHP5f67wyHI4h5Rw2tQSZQq45VnF460kqMhrnO2eVQsoQNaD" }}>
              <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: totalAmount.toFixed(2),
                      },
                    }],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    setCartItems([]);
                    setShowCheckout(false);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
