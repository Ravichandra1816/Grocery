import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cardItem, setCardItem] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add product to card
  const addToCard = (itemId) => {
    let cardData = structuredClone(cardItem);
    if (cardData[itemId]) {
      cardData[itemId] += 1;
    } else {
      cardData[itemId] = 1;
    }
    setCardItem(cardData);
    toast.success("Added to cart");
  };

  // Update Card item Quantity
  const updateCardItem = (itemId, quantity) => {
    let cardData = structuredClone(cardItem);
    cardData[itemId] = quantity;
    setCardItem(cardData);
    toast.success("Cart Updated");
  };

  // Remove card from card
  const removeFromCard = (itemId) => {
    let cardData = structuredClone(cardItem);
    if (cardData[itemId]) {
      cardData[itemId] -= 1;
      if (cardData[itemId] === 0) {
        delete cardData[itemId];
      }
    }
    toast.success("Remove from card");
    setCardItem(cardData);
  };

  // get cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cardItem) {
      totalCount += cardItem[item];
    }
    return totalCount;
  };

  // cart total Amount

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItem) {
      let itemInfo = products.find((product) => product._id === item);
      if (cardItem[item] > 0) {
        totalAmount += itemInfo.offerPrice * cardItem[item];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    cardItem,
    addToCard,
    updateCardItem,
    removeFromCard,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
