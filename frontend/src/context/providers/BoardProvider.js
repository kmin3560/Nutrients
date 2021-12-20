import BoardContext from "../BoardContext";
import { useState } from "react";
const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState([]);

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
