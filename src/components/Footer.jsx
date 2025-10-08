export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" py-4 mt-10 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
      <p className="text-sm">
        © {year} <span className="font-semibold text-teal-500">Moeen</span>. All rights reserved.
      </p>
    </footer>
  );
}
