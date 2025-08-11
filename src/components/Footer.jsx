import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FAEBD7] py-5">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right">
          
          {/* قسم قصتنا */}
          <div className="text-black">
            <h4 className="text-xl font-bold mb-4">قصتنا</h4>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/about" className="transition-colors duration-300 hover:text-[#e9b86b]">
                  تعرف على متجر لافين للعطور
                </a>
              </li>
            </ul>
          </div>
          
          {/* قسم المنتجات */}
          <div className="text-black">
            <h4 className="text-xl font-bold mb-4">عن المتجر</h4>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/shop" className="transition-colors duration-300 hover:text-[#e9b86b]">
                  المنتجات
                </a>
              </li>
            </ul>
          </div>
          
          {/* قسم الشروط */}
          <div className="text-black">
            <h4 className="text-xl font-bold mb-4">الشروط والأحكام</h4>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/return-policy" className="transition-colors duration-300 hover:text-[#e9b86b]">
                  سياسة الاسترجاع
                </a>
              </li>
            </ul>
          </div>
          
          {/* قسم التواصل */}
          <div className="text-black">
            <h4 className="text-xl font-bold mb-4">وسائل التواصل</h4>
            <div className="flex justify-center md:justify-end gap-4 text-lg">
              <a
                href="https://www.instagram.com/lavin.perfume/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e9b86b] transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=96891175734&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e9b86b] transition"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t mt-10 pt-5 text-center text-lg text-black">
          <p className="leading-relaxed">
            تم التطوير بواسطة  
            <a
              href="https://www.instagram.com/mobadeere/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e9b86b] font-semibold hover:underline mx-1"
            >
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
