
import { useState } from "react";
import { useLedger } from "../context/LedgerContext";
import Ledger from "./Ledger";

export default function UserList() {
  const { state, dispatch } = useLedger();
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">All Users</h2>
      {state.users.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No users added yet.</p>
      )}
      {state.users.map((u) => (
        <div
          key={u.id}
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
        >
          <button
            onClick={() => setSelected(u.id)}
            className="text-blue-600 cursor-pointer transition-all underline ease-in-out dark:text-blue-400 font-medium"
          >
            {u.name}
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_USER", payload: u.id })}
            className="cursor-pointer"
          >
            ❌
          </button>
        </div>
      ))}
      {selected && <Ledger userId={selected} />}
    </div>
  );
}
