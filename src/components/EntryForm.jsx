import { useState } from "react";
import { useLedger } from "../context/LedgerContext";
import { FaPlus } from "react-icons/fa6";


export default function EntryForm({ userId }) {
  const { dispatch } = useLedger();
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");

  const addEntry = () => {
    if (!desc || !amt) return;
    dispatch({
      type: "ADD_ENTRY",
      payload: {
        userId,
        entry: { id: Date.now(), description: desc, amount: Number(amt) },
      },
    });
    setDesc("");
    setAmt("");
  };

  return (
    <div className="md:flex md:gap-2">
      <input
        placeholder="Kia khaya/lia tha..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border rounded-lg px-3 py-2 flex-1 dark:bg-gray-800 dark:text-white"
      />
      <input
        type="number"
        placeholder="keemat..."
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
        className="border rounded-lg px-3 py-2 w-28 dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={addEntry}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex justify-center items-center text-xl cursor-pointer"
      >
        <FaPlus />
      </button>
    </div>
  );
}
