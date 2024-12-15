import { createContext, useContext, useState } from "react";

type BoardContextType = {
  boardContent: string;
  setBoardContent: (content: string) => void;
};

const BoardContext = createContext<BoardContextType>({} as BoardContextType);

type BoardContextProviderProps = {
  children: React.ReactNode;
};

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [boardContent, setBoardContent] = useState(
    "# Board Content \nText board content"
  );

  return (
    <BoardContext.Provider value={{ boardContent, setBoardContent }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoardContext() {
  const { boardContent, setBoardContent } = useContext(BoardContext);

  return { boardContent, setBoardContent };
}
