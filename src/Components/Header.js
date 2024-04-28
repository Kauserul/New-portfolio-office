import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (container) {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1; // Adjust scroll speed as needed
                }
            }
        };

        const interval = setInterval(handleScroll, 30); // Adjust scroll speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[#ECF9FF] border-gray-200 dark:bg-[#ECF9FF]'>
            <div className='max-w-screen-xl mx-auto'>
                <nav>
                    <div className=" flex flex-wrap items-center justify-between p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Free maximum</span>
                        </a>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse user-icon">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded={isDropdownOpen}
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                            </button>
                            {isDropdownOpen && (
                                <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-black dark:divide-gray-600 user-info" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#ECF9FF] dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='text-center'>
                    <div className='lg:w-7/12 w-11/12 text-center mx-auto lg:py-20 py-10'>

                        <span className='bg-[#f3edff] rounded-full px-2 lg:py-1'>
                            <small className='bg-[#FFFFFF] rounded-full lg:px-2 lg:mr-3 mr-1 text-[#7F56D9] border-[#7F56D9]'>New feature</small>
                            <small className='text-[#7F56D9] mr-1'> All the layers well organised</small>
                            <small className='text-[#7F56D9]'>&#x2192;</small>
                        </span>

                        <div>
                            <h1 className='lg:text-6xl text-2xl text-center font-semibold tracking-wider'>Free maximum of our quality asset</h1>
                            <p className='mt-4 lg:w-7/12 w-10/12 mx-auto'>You are 4 clicks aways to implement all the beautiful asset.You are 4 clicks aways to implement all the beautiful asset</p>
                        </div>
                        <div className='mt-5'>
                            <button className='bg-white border p-3 px-5 font-semibold rounded'>Signup</button>
                            <button className='bg-[#7F56D9] border p-3 px-5 font-semibold rounded ms-4 text-white'>Explore</button>
                        </div>
                    </div>
                </div>
                <div className='pb-8 lg:p-0 p-5'>
                    <div className='logo'>
                        <div className='logo-slider'>
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                            <img className='rounded-lg lg:w-0 w-8'  src="https://cdn.dribbble.com/userupload/13786264/file/original-9d4b40d9e9a4569e814e8df4650ff980.png?resize=450x338&vertical=center" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
