"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";

const Header = () => {
  const [navigationToggler, setNavigationToggler] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleNavToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`header top-0 left-0 z-40 flex w-full items-center bg-white/80 backdrop-blur-md dark:bg-gray-dark/80 ${
          sticky
            ? "!fixed !z-[9999] !bg-white/80 shadow-sticky dark:!bg-gray-dark/80"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-2 lg:py-2" : "py-5 lg:py-2"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <TechIcon name="vscode" size={24} />
                  </div>
                  <span className="text-xl font-bold text-black dark:text-white">
                    Ashu Sahni
                  </span>
                </motion.div>
              </Link>
            </div>
            <div className="flex items-center justify-between pr-16 lg:pr-0 xl:pr-16 2xl:mr-16">
              <div>
                <button
                  onClick={handleNavToggler}
                  id="navbarToggler"
                  aria-label="Toggle Menu"
                  className="hidden"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-black transition-all duration-300 dark:bg-white">
                    {navigationToggler && "rotate-45"}
                  </span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-black transition-all duration-300 dark:bg-white">
                    {navigationToggler && "opacity-0"}
                  </span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-black transition-all duration-300 dark:bg-white">
                    {navigationToggler && "-rotate-45"}
                  </span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-gray-dark lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none ${
                    navigationToggler
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/">Home</ListItem>
                    <ListItem NavLink="/#about">About</ListItem>
                    <ListItem NavLink="/#skills">Skills</ListItem>
                    <ListItem NavLink="/#projects">Projects</ListItem>
                    <ListItem NavLink="/#services">Services</ListItem>
                    <ListItem NavLink="/#contact">Contact</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0 xl:pr-16 2xl:mr-16">
                <div>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle Dark Mode"
                    className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-gray-light text-body-color transition-all duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:text-white dark:hover:bg-primary"
                  >
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99999 3.33334C6.32499 3.33334 3.33332 6.32501 3.33332 10C3.33332 13.675 6.32499 16.6667 9.99999 16.6667C13.675 16.6667 16.6667 13.675 16.6667 10C16.6667 6.32501 13.675 3.33334 9.99999 3.33334ZM9.99999 15C7.24166 15 4.99999 12.7583 4.99999 10C4.99999 7.24168 7.24166 5.00001 9.99999 5.00001C12.7583 5.00001 15 7.24168 15 10C15 12.7583 12.7583 15 9.99999 15Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10 6.66667C9.65833 6.66667 9.375 6.95 9.375 7.29167C9.375 7.63333 9.65833 7.91667 10 7.91667C10.3417 7.91667 10.625 7.63333 10.625 7.29167C10.625 6.95 10.3417 6.66667 10 6.66667Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10 12.0833C9.65833 12.0833 9.375 12.3667 9.375 12.7083C9.375 13.05 9.65833 13.3333 10 13.3333C10.3417 13.3333 10.625 13.05 10.625 12.7083C10.625 12.3667 10.3417 12.0833 10 12.0833Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.7083 10C12.7083 9.65833 12.425 9.375 12.0833 9.375C11.7417 9.375 11.4583 9.65833 11.4583 10C11.4583 10.3417 11.7417 10.625 12.0833 10.625C12.425 10.625 12.7083 10.3417 12.7083 10Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.54167 10C8.54167 9.65833 8.25833 9.375 7.91667 9.375C7.575 9.375 7.29167 9.65833 7.29167 10C7.29167 10.3417 7.575 10.625 7.91667 10.625C8.25833 10.625 8.54167 10.3417 8.54167 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>
                  </button>
                </div>
                <div className="hidden lg:block">
                  <div className="flex items-center space-x-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/#contact">Hire Me</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="#">Download Resume</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

const ListItem = ({ children, NavLink }: { children: React.ReactNode; NavLink: string }) => {
  return (
    <>
      <li>
        <Link
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary lg:ml-10 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default Header;
