import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vector from '../assets/vector4.png';
import BurgerImg from '../assets/Burger.png';
import PizzaImg from '../assets/Pizza.png';
import SushiImg from '../assets/Sushi.png';
import PastaImg from '../assets/Pasta.png';
import SaladImg from '../assets/Salad.png';
import SteakImg from '../assets/Steak.png';
import TacosImg from '../assets/Taco.png';
import SandwichImg from '../assets/Sandwich.png';
import SoupImg from '../assets/Soup.png';
import IceCreamImg from '../assets/IceCream.png';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  { id: 1, name: 'Burger', price: 5.99, img: BurgerImg, ingredients: ['Beef patty', 'Lettuce', 'Tomato', 'Cheese', 'Bun'], category: 'Burgers' },
  { id: 2, name: 'Pizza', price: 8.99, img: PizzaImg, ingredients: ['Dough', 'Tomato sauce', 'Cheese', 'Pepperoni'], category: 'Pizzas' },
  { id: 3, name: 'Sushi', price: 12.99, img: SushiImg, ingredients: ['Rice', 'Nori', 'Fish', 'Vegetables'], category: 'Bowls' },
  { id: 4, name: 'Pasta', price: 9.99, img: PastaImg, ingredients: ['Pasta', 'Tomato sauce', 'Cheese'], category: 'Bowls' },
  { id: 5, name: 'Salad', price: 4.99, img: SaladImg, ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Dressing'], category: 'Salads' },
  { id: 6, name: 'Steak', price: 14.99, img: SteakImg, ingredients: ['Beef', 'Salt', 'Pepper'], category: 'Burgers' },
  { id: 7, name: 'Tacos', price: 6.99, img: TacosImg, ingredients: ['Tortilla', 'Beef', 'Lettuce', 'Cheese'], category: 'Burgers' },
  { id: 8, name: 'Sandwich', price: 7.99, img: SandwichImg, ingredients: ['Bread', 'Ham', 'Cheese', 'Lettuce'], category: 'Burgers' },
  { id: 9, name: 'Soup', price: 3.99, img: SoupImg, ingredients: ['Broth', 'Vegetables', 'Salt', 'Pepper'], category: 'Bowls' },
  { id: 10, name: 'Ice Cream', price: 2.99, img: IceCreamImg, ingredients: ['Milk', 'Sugar', 'Vanilla'], category: 'Bowls' },
];

const categories = ['All', 'Pizzas', 'Burgers', 'Salads', 'Bowls'];

const FoodMenu = ({ cartItems, addToCart, removeFromCart }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory]);

  const getItemQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleCheckout = () => {
    navigate('/shoppingcart');
  };

  const handleInfoClick = (item) => {
    setSelectedItem(item);
  };

  const closeInfoModal = () => {
    setSelectedItem(null);
  };

  const filteredItems = selectedCategory === 'All' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  };

  return (
    <div className="min-h-full pb-32 pt-16 bg-gray-100 flex justify-center items-center dark:bg-dark dark:text-white duration-200 relative" style={bgImage}>
      <div className="container sm:p-0 px-4">
        <div className="flex justify-center space-y-2 mb-6 flex-wrap py-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 h-12  rounded-full transition-all duration-300 hover:bg-primary hover:cursor-pointer font-lato text-xl ${selectedCategory === category ? 'bg-primary text-gray-600 ' : 'bg-secondary text-black '}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div key={selectedCategory} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="w-full max-w-xs h-[200px] group rounded-2xl bg-white hover:bg-secondary hover:bg-opacity-20 dark:bg-gray-800  hover:dark:bg-dark  dark:bg-opacity-80   duration-300 p-2 shadow-xl cursor-pointer relative"
              onClick={() => addToCart(item)}
              data-aos="fade-up"
            >
              <div className="h-[80px] mb-2 flex justify-center items-center">
                <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain transform group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-lg font-bold mb-1 dark:text-white">{item.name}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-xs">${item.price.toFixed(2)}</p>
                <button
                  className="bg-third text-white px-1 py-0.5 rounded text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInfoClick(item);
                  }}
                >
                  Info
                </button>
                {getItemQuantity(item.id) > 0 && (
                  <div className="absolute top-2 right-0 w-full justify-between px-2 transform flex items-center">
                    <button
                      className="flex justify-center items-center bg-red-800 text-white px-1.5 py-0.5 rounded-full text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item);
                      }}
                    >
                      <p className='text-xs flex items-center justify-center'>Remove</p>
                    </button>
                    <span className="text-black dark:text-white mx-2 text-md font-bold">{getItemQuantity(item.id)}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <button
            className="fixed bottom-16 right-16 bg-green-800 hover:bg-green-500 w-32 h-12 text-gray-200 font-bold hover:text-white px-4 py-2 rounded-full hover:scale-105 duration-300 z-50"
            onClick={handleCheckout}
            data-aos="fade-up"
          >
            Checkout
          </button>
        )}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" data-aos="fade-in">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 dark:text-white">{selectedItem.name} Ingredients</h2>
              <ul className="list-disc pl-6 dark:text-gray-300">
                {selectedItem.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <button
                className="mt-6 bg-red-500 text-white px-2 py-2 rounded-full hover:scale-105 duration-300"
                onClick={closeInfoModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
