import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900 text-center relative z-10">
            <p className="text-gray-500 flex items-center justify-center gap-2">
                Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Jay Patel
            </p>
            <p className="text-gray-600 text-sm mt-2">
                &copy; {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
