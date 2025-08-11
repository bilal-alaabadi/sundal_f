import React from 'react';
import { Link } from 'react-router-dom';
import perfumeImg from '../assets/Screenshot 2025-08-08 213536.png';

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-[#4E5A3F]">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة */}
          <div className="md:w-1/2">
            <img
              src={perfumeImg}
              alt="عطور لافين الفاخرة"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg transform scale-105"
            />
          </div>

          {/* المحتوى النصي */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#d3ae27] mb-6">عطور لافين: سيمفونية من الذكريات</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-2xl italic text-[#9B2D1F]">
                "عطر لا يُنسى.. لحظات لا تُقدّر بثمن"
              </p>
              
              <p>
                في زحام الحياة وروتين الأيام المتشابهة، ولدت لافين من رحم الشغف؛ علامة تجارية لم تُخلق لتكون مجرد عطر عابر، بل لتصبح تجربة حسيّة تختزل الذكريات في زجاجة.
              </p>
              
              <p>
                بدأت رحلتنا من عشقٍ جنوني لعالم العطور، بحثاً دؤوباً عن التميز والندرة، وسعياً وراء تقديم ما هو أصيل يعكس هويتنا ويجسد أذواقنا.
              </p>
              
              <p>
                كل تركيبة في لافين هي قصيدة منسوجة بعناية فائقة؛ تبدأ بعبير الفانيلا الدافئ، وتتوسطها لمسات العود الملكي، لتختتم بنفحات الزهر النقي. كل زجاجة تحمل حكاية فريدة تعكس شخصية صاحبها.
              </p>
              
              <p>
                نحن في لافين لا نقدم مجرد عطور، بل نصنع لك أدوات للتعبير عن ذاتك، نخلق لك توقيعاً خاصاً يميزك، ونحفظ لك ذكرياتك في عبق يدوم.
              </p>
              
              <p className="font-semibold text-[#4E5A3F]">
                لافين... للذين يرون في العطر فنّاً وليس مجرد رائحة، للذين يبحثون عن الأثر قبل المظهر، عن الأناقة التي لا تفنى.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl text-[#d3ae27] font-semibold">
            لافين: حيث تصبح الذكريات عطراً، والعطر ذكرى
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;