"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiBookOpen, FiMail, FiLayers, FiBriefcase, FiStar } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/#about", label: "About", icon: FiUser },
  { href: "/#skills", label: "Skills", icon: FiStar },
  { href: "/#projects", label: "Projects", icon: FiLayers },
  { href: "/#services", label: "Services", icon: FiBriefcase },
  { href: "/#contact", label: "Contact", icon: FiMail },
  { href: "/blog", label: "Blog", icon: FiBookOpen }, // Dummy blog link
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-bg-color-dark/90 border-t border-gray-200 dark:border-gray-700 shadow flex justify-around items-center py-2 md:hidden backdrop-blur overflow-x-auto">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium transition-colors duration-200 px-2 py-1 rounded-md min-w-[56px]
              ${isActive ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"}
            `}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={22} className="mb-0.5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
} 