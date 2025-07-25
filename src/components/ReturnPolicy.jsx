import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#9B2D1F] mb-6">
          سياسة الاسترجاع والاستبدال
        </h1>
        
        {/* مقدمة الصفحة */}
        <div className="mb-8 text-right">
          <p className="text-gray-700 mb-4 text-lg">
            نرحب بكم في سياسة الاسترجاع الخاصة بـ <span className="font-semibold text-[#9B2D1F]">حناء برغند</span>
          </p>
          <p className="text-gray-600">
            نسعى دائماً لتقديم أفضل تجربة تسوق لكم، وفي حال وجود أي استفسار لا تترددوا بالتواصل معنا.
          </p>
        </div>

        {/* البنود الأساسية */}
        <div className="space-y-6 text-right">
          {/* البند الأول */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">عمليات الاسترجاع</h3>
            <p className="text-gray-600 leading-relaxed">
              لا يمكن استرجاع المنتجات بعد إتمام عملية الشراء إلا في حال وجود عيب أو تلف في المنتج.
            </p>
          </div>

          {/* البند الثاني */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">شروط الاستبدال</h3>
            <p className="text-gray-600 leading-relaxed">
              لا نقبل استبدال المنتجات التي تم فتح عبواتها الأصلية أو استخدامها لأسباب صحية.
            </p>
          </div>

          {/* البند الثالث */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">المنتجات التالفة</h3>
            <p className="text-gray-600 leading-relaxed">
              في حال استلام منتج تالف، يرجى التواصل خلال 48 ساعة مع إرفاق صور واضحة للمشكلة.
            </p>
          </div>

          {/* البند الرابع */}
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">تكاليف الشحن</h3>
            <p className="text-gray-600 leading-relaxed">
              نتحمل تكاليف الشحن في حال كان الخطأ من جانبنا (منتج تالف أو غير مطابق للوصف).
            </p>
          </div>
        </div>

        {/* خاتمة الصفحة */}
        
      </div>
    </div>
  );
};

export default ReturnPolicy;