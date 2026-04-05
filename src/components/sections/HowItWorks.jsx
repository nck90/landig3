import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="py-32 bg-surface-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-8 tracking-tighter">
            어려운 기술은 숨기고,<br className="hidden md:block"/>
            <span className="text-brand-500">투명한 진실만 남겼습니다</span>
          </h3>
          <p className="text-xl text-surface-500 font-medium leading-relaxed">
            복잡한 설정이나 개발 지식은 전혀 필요하지 않습니다.<br/>
            대표님은 그저 결과만 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[120px] left-[15%] right-[15%] h-px bg-surface-300 z-0 border-dashed border-t-2 border-surface-300"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-64 h-64 bg-white rounded-full toss-shadow flex items-center justify-center p-8 mb-10 border border-surface-200">
               <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center text-brand-600 font-extrabold text-2xl">
                     ⚡️
                  </div>
                  <div className="font-bold text-surface-900">기능 개발 감지</div>
               </div>
            </div>
            <h4 className="text-2xl font-extrabold heading-tight mb-4">1. 개발 진행상황 포착</h4>
            <p className="text-surface-500 font-medium leading-relaxed">개발팀이 새로운 기능을 작업하면<br/>시스템이 이를 즉시 감지합니다.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-64 h-64 bg-white rounded-full toss-shadow flex items-center justify-center p-8 mb-10 border border-brand-200">
               <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-white font-extrabold text-2xl">
                     AI
                  </div>
                  <div className="font-bold text-surface-900 text-center">비즈니스 통역 엔진</div>
               </div>
            </div>
            <h4 className="text-2xl font-extrabold heading-tight mb-4 text-brand-600">2. 일상어로 자동 번역</h4>
            <p className="text-surface-500 font-medium leading-relaxed">복잡한 작업 내역을 AI가 분석하여<br/>이해하기 쉬운 알림으로 바꿔줍니다.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-64 h-64 bg-white rounded-full toss-shadow flex items-center justify-center p-8 mb-10 border border-surface-200">
               <div className="flex flex-col items-center gap-4 w-full">
                  <div className="w-full h-8 bg-surface-100 rounded-lg"></div>
                  <div className="w-full h-24 bg-surface-100 rounded-lg flex items-center justify-center text-xs text-surface-400 font-bold border border-brand-200 border-dashed">UI Snapshot</div>
               </div>
            </div>
            <h4 className="text-2xl font-extrabold heading-tight mb-4">3. С냅샷 시각화 확인</h4>
            <p className="text-surface-500 font-medium leading-relaxed">완성된 결과물을 실제 화면 이미지로<br/>제공받아, 직관적으로 검수합니다.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
