import React from 'react';
import { FaInstagram, FaWhatsapp, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#698a52] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* قسم ABOUT */}
          <div className='text-white text-center md:text-right'>
            <h4 className="text-lg font-bold mb-4">عن المتجر</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-white hover:text-[#9B2D1F] transition-colors">
                  المنتجات
                </Link>
              </li>
            </ul>
          </div>
          
          {/* قسم OUR STORY */}
          <div className='text-white text-center md:text-right'>
            <h4 className="text-lg font-bold mb-4">قصتنا</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white hover:text-[#9B2D1F] transition-colors">
                  قصة حناء برغند
                </Link>
              </li>
            </ul>
          </div>
          
          {/* قسم LEGAL */}
          <div className='text-white text-center md:text-right'>
            <h4 className="text-lg font-bold mb-4">الشروط والأحكام</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/return-policy" className="text-white hover:text-[#9B2D1F] transition-colors">
                  سياسة الاسترجاع
                </Link>
              </li>
            </ul> 
          </div>
          
          {/* قسم SOCIAL */}
          <div className='text-white text-center md:text-right'>
            <h4 className="text-lg font-bold mb-4">وسائل التواصل</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.instagram.com/henna.burgund/reels/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9B2D1F] transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=96876704406&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9B2D1F] transition">
                <FaWhatsapp className="text-xl" />
              </a>
              <a href="https://www.snapchat.com/add/henna.burgund" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9B2D1F] transition">
                <FaSnapchatGhost className="text-xl" />
              </a>
              <a href="https://www.tiktok.com/@henna.burgund" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9B2D1F] transition">
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white text-sm">
            تم التطوير بواسطة  
            <a href="https://www.instagram.com/roya_sow/" className="text-white hover:text-[#9B2D1F] font-semibold hover:underline mx-1">
              شركة مُبادر 
            </a>
            بجودة واحترافية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;