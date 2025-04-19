import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [product, setProduct] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  // fetch all products
  const fetchProducts = async () => {
    setProduct(dummyProducts);
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
    product,
    currency,
    cardItem,
    addToCard,
    updateCardItem,
    removeFromCard,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
