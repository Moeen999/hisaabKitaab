import { useState } from "react";
import { useLedger } from "../context/LedgerContext";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function EntryForm({ userId }) {
  const { dispatch } = useLedger();
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");

  const handleEntry = (isAdding) => {
    if (!desc || !amt) return;
    const finalAmt = isAdding ? Number(amt) : -Number(amt);
    dispatch({
      type: "ADD_ENTRY",
      payload: {
        userId,
        entry: {
          id: Date.now(),
          description: desc,
          amount: finalAmt,
          timestamp: new Date().toLocaleString(),
        },
      },
    });
    setDesc("");
    setAmt("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
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
        className="border rounded-lg px-3 py-2 w-full sm:w-28 dark:bg-gray-800 dark:text-white"
      />
      <div className="flex gap-2">
        <button
          onClick={() => handleEntry(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex justify-center items-center text-xl cursor-pointer"
        >
          <FaPlus />
        </button>
        <button
          onClick={() => handleEntry(false)}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg flex justify-center items-center text-xl cursor-pointer"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
