
const Footer = () => {
   const year = new Date().getFullYear();
  return (
    <div className="absolute bottom-0 h-12 w-screen px-5 py-2 flex justify-center items-center  dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
      <h1> © {year  } By Moeen | All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
