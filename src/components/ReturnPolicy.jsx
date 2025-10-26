// src/pages/ReturnPolicy.jsx
import React from "react";

const ReturnPolicy = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#751e26] mb-6">
          سياسة الاسترجاع – الصندل بيوتي ستور
        </h1>

        {/* النص */}
        <div className="space-y-6 text-right text-gray-700 leading-relaxed text-lg">
          <p>
            نحرص في <span className="font-semibold text-[#751e26]">الصندل بيوتي ستور</span> على رضاكِ التام وثقتك في منتجاتنا، ونسعى لتقديم أفضل تجربة تسوق ممكنة.
          </p>

          <ul className="list-disc pr-5 space-y-3">
            <li>
              نظرًا لأن منتجاتنا طبيعية وتُستخدم للعناية بالبشرة، لا يمكن استرجاع المنتجات المفتوحة أو المستخدمة حفاظًا على جودة وسلامة العملاء.
            </li>
            <li>
              في حال وصول منتج تالف أو غير مطابق لطلبك، يرجى التواصل معنا خلال{" "}
              <span className="font-semibold text-[#751e26]">3 أيام من الاستلام</span>{" "}
              ليتم استبداله أو استرجاع المبلغ.
            </li>
            <li>
              نرجو التواصل عبر{" "}
              <span className="font-semibold text-[#751e26]">
                +96896132215
              </span>{" "}
              وسنقوم بخدمتك في أقرب وقت ممكن.
            </li>
          </ul>

          <p className="text-center text-xl font-semibold text-[#751e26] mt-8">
            ثقتك تهمنا، وجمالك من الطبيعة هو وعدنا 🌸
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
