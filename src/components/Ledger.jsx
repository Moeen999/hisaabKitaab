import { useLedger } from "../context/LedgerContext";
import EntryForm from "./EntryForm";


export default function Ledger({ userId }) {
  const { state, dispatch } = useLedger();
  const user = state.users.find((u) => u.id === userId);
  const total = user.entries.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="mt-5 bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">
        {user.name} ka khaata👇
      </h3>
      <p className="mb-3 font-medium text-green-600 dark:text-green-400">
        Total Pesy🤑 : <span className="text- xl">Rs {total}</span>
      </p>

      <ul className="space-y-2 mb-4">
        {user.entries.map((e) => (
          <li
            key={e.id}
            className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg"
          >
            <span className="dark:text-gray-200">
              {e.description} -<span style={{color:"orangered"}}> Rs.{e.amount}/-</span>
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_ENTRY",
                  payload: { userId, entryId: e.id },
                })
              }
              className="text-red-500 cursor-pointer hover:text-red-600"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <EntryForm userId={userId} />
    </div>
  );
}
