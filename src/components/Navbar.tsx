import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Code, User, Mail, Home } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { href: "#Home", label: "Accueil", icon: <Home className="w-5 h-5" /> },
        { href: "#About", label: "À propos", icon: <User className="w-5 h-5" /> },
        { href: "#Portfolio", label: "Portfolio", icon: <Code className="w-5 h-5" /> },
        { href: "#Contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const sections = navItems.map(item => {
                const element = document.querySelector(item.href);
                if (!element) return null;
                return {
                    id: item.href.replace("#", ""),
                    offset: element.getBoundingClientRect().top + window.scrollY - 100,
                    height: element.clientHeight
                };
            }).filter((section): section is { id: string; offset: number; height: number } => section !== null);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { y: 20, opacity: 0 }
    };

    return (
        <motion.nav
            initial={false}
            animate={scrolled ? "scrolled" : "top"}
            variants={{
                scrolled: { 
                    backgroundColor: "rgba(3, 0, 20, 0.95)", // Réduction de la transparence
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(99, 102, 241, 0.1)"
                },
                top: { 
                    backgroundColor: "rgba(3, 0, 20, 0.85)", // Réduction de la transparence
                    backdropFilter: "blur(5px)",
                    boxShadow: "none"
                }
            }}
            className="fixed w-full top-0 z-50 transition-all duration-500"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-20">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <a 
                            href="#Home" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection("#Home"); 
                            }}
                            aria-label="Accueil"
                        >
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
                                    BAC
                                </div>
                                <div className="text-xs text-[#e2d3fd] mt-1 hidden sm:block">
                                    BOGA ANGE CHRISTIAN GUEMA
                                </div>
                            </motion.div>
                        </a>
                    </motion.div>

                    <div className="hidden md:block">
                        <motion.div 
                            className="flex items-center space-x-6"
                            initial="closed"
                            animate="open"
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.label}
                                    onHoverStart={() => setHoveredItem(item.label)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    className="relative"
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => { 
                                            e.preventDefault(); 
                                            scrollToSection(item.href); 
                                        }}
                                        className={`group flex items-center px-3 py-2 text-sm font-medium ${
                                            activeSection === item.href.substring(1) 
                                                ? "text-white" 
                                                : "text-[#e2d3fd] hover:text-white"
                                        }`}
                                        aria-label={item.label}
                                    >
                                        <motion.span className="mr-2">
                                            {item.icon}
                                        </motion.span>
                                        <span className="relative z-10">
                                            {item.label}
                                            {hoveredItem === item.label && (
                                                <motion.span 
                                                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                                                    layoutId="underline"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                                />
                                            )}
                                        </span>
                                    </a>
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div 
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                                            layoutId="activeUnderline"
                                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div 
                        className="md:hidden"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white shadow-lg"
                            aria-label="Menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <>
                                    <Menu className="w-6 h-6" />
                                    <motion.span 
                                        className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                </>
                            )}
                        </button>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-[#030014]/95 backdrop-blur-xl pt-24 z-40"
                    >
                        <motion.div 
                            className="container mx-auto px-4 py-6"
                            initial="closed"
                            animate="open"
                            variants={{
                                open: {
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                },
                                closed: {
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        scrollToSection(item.href); 
                                    }}
                                    className={`flex items-center px-6 py-4 text-xl font-medium rounded-lg mb-2 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white"
                                            : "text-[#e2d3fd] hover:bg-gray-800/50"
                                    }`}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={item.label}
                                >
                                    <span className="mr-4">{item.icon}</span>
                                    {item.label}
                                    {activeSection === item.href.substring(1) && (
                                        <motion.span 
                                            className="ml-auto"
                                            animate={{ rotate: [0, 20, -20, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        >
                                            <Rocket className="w-5 h-5" />
                                        </motion.span>
                                    )}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;