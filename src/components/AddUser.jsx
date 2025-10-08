import { useState } from "react";
import { useLedger } from "../context/LedgerContext";

export default function AddUser() {
  const { dispatch } = useLedger();
  const [name, setName] = useState("");

  const addUser = () => {
    if (!name.trim()) return;
    dispatch({
      type: "ADD_USER",
      payload: { id: Date.now(), name, entries: [] },
    });
    setName("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <input
        type="text"
        placeholder="Nay maqrooz bndy ka naam..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-3 py-2 flex-1 dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={addUser}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        Naya_Bnda
      </button>
    </div>
  );
}
