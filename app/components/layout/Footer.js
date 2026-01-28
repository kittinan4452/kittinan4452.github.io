import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    // Use a fixed year to avoid hydration mismatch, or calculate it safely
    const currentYear = new Date().getFullYear(); // Update this each year or use a more robust method

    const socialLinks = [
        { icon: faGithub, href: "https://github.com/kittinan4452", label: "GitHub" },
        { icon: faYoutube, href: "https://www.youtube.com/@tiigamingth945", label: "YouTube" },
        { icon: faInstagram, href: "https://www.instagram.com/tii_kittinan/", label: "Instagram" },
        { icon: faFacebook, href: "https://www.facebook.com/profile.php?id=100006484345238", label: "Facebook" },
        { icon: faLinkedin, href: "https://www.linkedin.com/in/kittinan-kunnahong-1b1287312/", label: "LinkedIn" },
    ];
    
    return (
        <div id="contact" className="bg-[#181818] py-12 border-t border-red-600/30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between text-white font-Kode_Mono gap-8">
                    
                    {/* 1. Logo and Copyright Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        
                        {/* Logo/Copyright */}
                        <div className="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-red-500" /> 
                            <p className="text-lg md:text-xl text-white font-semibold">
                                RESUME KITTINAN © {currentYear} 
                            </p>
                        </div>
                        
                        {/* Contact Details */}
                        <div className="pl-0 md:pl-10 text-center md:text-left space-y-1">
                            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
                                <h1 className="text-red-400 font-bold">Email:</h1>
                                <span className="text-gray-300">kittinan4452@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
                                <h1 className="text-red-400 font-bold">Phone:</h1>
                                <span className="text-gray-300">064-843-3150</span>
                            </div>
                        </div>

                    </div>
                    
                    {/* 2. Social Media Icons Section */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-md">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full 
                                           bg-gray-800/80 hover:bg-red-600/90 transition-all duration-300 
                                           shadow-lg hover:shadow-red-600/30 group border border-gray-700 hover:border-red-600"
                                aria-label={link.label}
                            >
                                <FontAwesomeIcon 
                                    icon={link.icon} 
                                    className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" 
                                /> 
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}