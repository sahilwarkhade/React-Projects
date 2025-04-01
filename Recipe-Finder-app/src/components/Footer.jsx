import {
    Facebook,
    Instagram,
    Twitter,
    UtensilsCrossed,
    Youtube,
} from "lucide-react";
import React from "react";

// function FooterLink({ text }) {
//     return (
//         <li>
//             <Link href="#" className="hover:text-orange-500 transition">
//                 {text}
//             </Link>
//         </li>
//     );
// }

// Social Link Component
function SocialLink({ icon, href }) {
    return (
        <a
            href={href}
            className="hover:text-orange-500 transition"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
}

const Footer = () => {
    return (
        // {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <UtensilsCrossed className="h-6 w-6 text-orange-500" />
                            <span className="font-bold text-xl text-white">
                                RecipeFinder
                            </span>
                        </div>
                        <p className="text-sm">
                            Discover and share the world's best recipes. Join
                            our community of food lovers and home chefs.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink
                                icon={<Facebook size={20} />}
                                href="#"
                            />
                            <SocialLink icon={<Twitter size={20} />} href="#" />
                            <SocialLink
                                icon={<Instagram size={20} />}
                                href="#"
                            />
                            <SocialLink icon={<Youtube size={20} />} href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
