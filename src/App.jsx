import AddUser from "./components/AddUser";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import { LedgerProvider } from "./context/LedgerContext";

export default function App() {
  return (
    <LedgerProvider>
      <div className="min-h-screen transition-colors bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 p-6">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg left-12  md:text-3xl font-bold relative md:left-20">Hisaab Kitaab 📒 By Moeen</h1>
            {/* <ThemeToggle /> */}
          </div>
          <AddUser />
          <UserList />
        </div>
      </div>
      <Footer/>
    </LedgerProvider>
  );
}
