import React from 'react';
import { Link } from 'react-router-dom';
import perfumeImg from '../assets/Untitled-1-2.png';

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-[#4E5A3F]">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة - حجم أكبر */}
          <div className="md:w-1/2">
            <img
              src={perfumeImg}
              alt="منتجات حناء برغند"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg transform scale-105"
            />
          </div>

          {/* النص - أكثر تفصيلاً */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#d3ae27] mb-6">حناء برغند</h2>
            <p className="text-gray-700 text-lg leading-loose mb-6">
              في حناء برغند، نؤمن أن الجمال الحقيقي يبدأ من الطبيعة
            </p>
            
            <p className="text-gray-700 leading-loose mb-4">
              نعتني بجمالك من الجذور. نُقدّم لكِ منتجات طبيعية 100%، مصنوعة من أجود الأعشاب
              والأوراق النقية، وبجودة عالية تُجسد أصالة الطبيعة.
            </p>
            
            <p className="text-gray-700 leading-loose mb-4">
              منتجاتنا آمنة وفعّالة، مصممة للعناية بالشعر والبشرة، وتناسب جميع الفئات.
              نختار مكوناتنا بعناية فائقة لضمان الجودة والفعالية.
            </p>
            
            <p className="text-gray-700 leading-loose mb-6">
              نحن لا نمنحكِ منتجًا فقط… بل نصنع لكِ الأفضل من قلب الطبيعة.
            </p>
            
            <p className="text-gray-700 font-medium">
              حناء برغند - جمال طبيعي يبدأ من الجذور
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-[#d3ae27] font-semibold">
            حناء برغند هي أكثر من مجرد منتجات... هي رحلة إلى الطبيعة الأصيلة
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;