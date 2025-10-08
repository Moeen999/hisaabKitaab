import AddUser from "./components/AddUser";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import { LedgerProvider } from "./context/LedgerContext";

export default function App() {
  return (
    <LedgerProvider>
      <div className="min-h-screen transition-colors bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 p-6 flex flex-col justify-between">
        <div className="max-w-xl mx-auto w-full">
          <h1 className="text-center text-3xl font-bold mb-6">
            Hisaab Kitaab 📒 By Moeen
          </h1>
          <AddUser />
          <UserList />
        </div>
        <Footer />
      </div>
    </LedgerProvider>
  );
}
