import React from 'react';
import { motion } from 'framer-motion';

const Offer = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-8 tracking-tighter">
              수천만 원의 외주 비용,<br className="hidden md:block"/>
              <span className="text-brand-500">방치하시겠습니까? 통제하시겠습니까?</span>
            </h3>
            <p className="text-xl text-surface-500 font-medium leading-relaxed">
              가장 확실한 방어책은 연봉 1억 원 이상의 기술 이사를 내부에 고용하는 것입니다.<br className="hidden md:block"/>
              하지만 Commitly를 만나면 상황이 완전히 역전됩니다.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch relative">
          
          {/* VS Center Badge */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full toss-shadow-hover z-20 items-center justify-center font-extrabold text-2xl text-surface-400 border border-surface-200 hidden md:flex">
            VS
          </div>

          {/* Left Card - The Negative Reality */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-surface-50 rounded-[40px] p-10 md:p-14 border border-surface-200 opacity-80"
          >
             <h4 className="text-surface-500 font-bold mb-4 text-xl">일반적인 문제 해결 방식</h4>
             <div className="text-4xl font-extrabold text-surface-900 mb-12 tracking-tight">내부 CTO 채용</div>
             
             <div className="space-y-6 mb-12">
               <div className="flex justify-between items-center border-b border-surface-200 pb-6">
                 <span className="text-surface-500 text-lg font-medium">연봉 및 부대비용</span>
                 <span className="font-extrabold text-xl text-surface-900">약 1.5억 원 / 년</span>
               </div>
               <div className="flex justify-between items-center border-b border-surface-200 pb-6">
                 <span className="text-surface-500 text-lg font-medium">채용 소요 시간</span>
                 <span className="font-extrabold text-xl text-surface-900">평균 3~6개월</span>
               </div>
               <div className="flex justify-between items-center border-b border-surface-200 pb-6">
                 <span className="text-surface-500 text-lg font-medium">감정 및 소통 비용</span>
                 <span className="font-extrabold text-xl text-surface-900">제어 불가</span>
               </div>
             </div>
             
             <div className="text-center py-4 bg-surface-200/50 rounded-2xl text-surface-500 font-medium">
                초기 기업에겐 현실적으로 불가능한 선택
             </div>
          </motion.div>

          {/* Right Card - The Irresistible Offer */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-b from-brand-500 to-brand-600 rounded-[40px] p-10 md:p-14 toss-shadow-hover relative overflow-hidden flex flex-col justify-between transform md:scale-105 z-10"
          >
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[80px] -translate-y-20 translate-x-20"></div>

             <div className="relative z-10">
                <h4 className="text-brand-100 font-bold mb-4 text-xl tracking-tight">가장 완벽하고 현실적인 대안</h4>
                <div className="text-4xl font-extrabold text-white mb-12 tracking-tight">24시간 일하는 AI 매니저, Commitly</div>
                
                <ul className="flex flex-col gap-6 mb-12">
                   <li className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-white/20 pb-6">
                     <span className="w-10 h-10 rounded-full bg-white text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">✓</span>
                     <span className="text-xl font-medium text-white">개발팀의 작업 내역 실시간 자동 감지</span>
                   </li>
                   <li className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-white/20 pb-6">
                     <span className="w-10 h-10 rounded-full bg-white text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">✓</span>
                     <span className="text-xl font-medium text-white">실패 확률 0%, 개발 과정의 비즈니스 번역</span>
                   </li>
                   <li className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-white/20 pb-6">
                     <span className="w-10 h-10 rounded-full bg-white text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">✓</span>
                     <span className="text-xl font-medium text-white">분쟁의 싹을 자르는 화면 캡처 및 타임라인</span>
                   </li>
                </ul>
             </div>

             <div className="relative z-10 bg-white rounded-[28px] p-8 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 toss-shadow border border-brand-100">
                <div>
                  <div className="text-surface-500 font-bold mb-2">가장 저렴한 압도적 통제권</div>
                  <div className="text-5xl font-extrabold text-brand-600 tracking-tighter">39,000<span className="text-2xl font-bold ml-1 text-surface-900">원</span></div>
                </div>
                <div className="bg-brand-50 text-brand-600 px-4 py-2 rounded-full font-bold text-sm h-fit">
                   기존 방식 대비 99% 절감
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Offer;
