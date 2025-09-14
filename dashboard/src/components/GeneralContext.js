import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

/**
 * ===============================
 * GeneralContext
 * ===============================
 * @description
 * - Manages global UI state for action windows (Buy/Sell)
 * - Provides functions to open/close windows
 */
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeActionWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // State: which window is open? ("BUY", "SELL", or null)
  const [actionType, setActionType] = useState(null);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  /** Open Buy Window */
  const handleOpenBuyWindow = (uid) => {
    setActionType("BUY");
    setSelectedStockUID(uid);
  };

  /** Open Sell Window */
  const handleOpenSellWindow = (uid) => {
    setActionType("SELL");
    setSelectedStockUID(uid);
  };

  /** Close any window */
  const handleCloseActionWindow = () => {
    setActionType(null);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeActionWindow: handleCloseActionWindow,
      }}
    >
      {props.children}

      {/* Render popup depending on actionType */}
      {actionType === "BUY" && <BuyActionWindow uid={selectedStockUID} />}
      {actionType === "SELL" && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
