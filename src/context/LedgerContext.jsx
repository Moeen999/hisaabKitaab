import { createContext, useReducer, useEffect, useContext } from "react";

const LedgerContext = createContext();

const initialState = JSON.parse(localStorage.getItem("ledgerData")) || {
  users: [],
};

function ledgerReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };

    case "ADD_ENTRY":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId
            ? { ...u, entries: [...u.entries, action.payload.entry] }
            : u
        ),
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId
            ? {
                ...u,
                entries: u.entries.filter(
                  (e) => e.id !== action.payload.entryId
                ),
              }
            : u
        ),
      };

    default:
      return state;
  }
}

export function LedgerProvider({ children }) {
  const [state, dispatch] = useReducer(ledgerReducer, initialState);

  useEffect(() => {
    localStorage.setItem("ledgerData", JSON.stringify(state));
  }, [state]);

  return (
    <LedgerContext.Provider value={{ state, dispatch }}>
      {children}
    </LedgerContext.Provider>
  );
}

export function useLedger() {
  return useContext(LedgerContext);
}
