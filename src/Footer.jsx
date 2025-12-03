import React from "react";
import BoltIcon from '@mui/icons-material/Bolt';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const links = ["Home", "About", "Catalogue", "Contact"];
const product = [
    "DJ 1800 - 120 AH",
    "DJ 1900 - 145 AH",
    "DJ 1900 - 150 AH"
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo and Description */}
                <div>
                    <img
                        src="/src/assets/footer-logo.png" // अपनी logo की सही path डालें
                        alt="DJDC Logo"
                        className="mb-4 w-28"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        {links.map((item, num) => (
                            <li key={num} className="flex items-center gap-2">
                                <BoltIcon style={{ color: "#facc15" }} />
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Products */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Our Products</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        {product.map((product) => (
                            <li key={product} className="flex items-center gap-2">
                                <BoltIcon style={{ color: "#facc15" }} />
                                <a href="#">{product}  </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                            <PhoneIcon style={{ color: "#facc15" }} />
                            <a href="tel:01287587676">01284-298541</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <EmailIcon style={{ color: "#facc15" }} />
                            <a href="mailto:info@.djdcbatry.in">sales@djdcbattery.in</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <LocationOnIcon style={{ color: "#facc15", marginTop: 4 }} />
                            Plot No. 10A, Sector-5, Phase-II, IMT Bawal, Distt. Rewari - Haryana - 123501 INDIA
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-10 border-t border-green-700 pt-4 text-center text-gray-400 text-sm">
                &copy; 2024 DJDC Batteries All Right Reserved.
            </div>
        </footer>
    );
}
