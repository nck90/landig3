import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-36 pb-20 overflow-hidden">
      {/* Soft gradient background characteristic of Toss/Apple */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 10 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.5 }}
           className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white toss-shadow mb-8 font-bold text-[14px] text-surface-600 border border-surface-200"
        >
          비전공자 클라이언트를 위한 가장 쉬운 외주 관리 솔루션
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-[72px] font-extrabold heading-tight leading-[1.15] mb-8 tracking-tighter"
        >
          개발 지식이 전혀 없어도,<br />
          <span className="text-brand-500">완벽하게 통제되는 프로젝트</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-surface-500 mb-12 subheading-tight max-w-3xl mx-auto font-medium"
        >
          기능이 개발되는 즉시, AI가 진행 상황을 일상어로 통역해 알려드립니다.<br className="hidden md:block"/>
          결과를 스냅샷 이미지로 직접 확인하는 가장 직관적인 소통.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 bg-brand-500 text-white rounded-full font-bold text-lg flex items-center justify-center transition-all hover:bg-brand-600 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
          >
            선착순 무상 프로젝트 진단
          </a>
        </motion.div>
        
        {/* Apple/Toss Style Floating UI Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          className="w-full max-w-5xl mt-24 relative"
        >
          <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[40px] toss-shadow-hover p-4 md:p-8 overflow-hidden flex flex-col">
            
            {/* Header Mockup */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-200">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-surface-200"></div>
                 <div className="w-3 h-3 rounded-full bg-surface-200"></div>
                 <div className="w-3 h-3 rounded-full bg-surface-200"></div>
               </div>
               <div className="font-bold text-surface-900 bg-surface-100 px-5 py-2 rounded-full text-sm">Commitly Dashboard</div>
               <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="col-span-2 bg-surface-50 rounded-[28px] p-8 text-left border border-surface-200/50">
                  <div className="flex justify-between items-center mb-8">
                     <h4 className="font-extrabold text-surface-900 text-xl tracking-tight">AI 비즈니스 통역</h4>
                     <span className="bg-white text-surface-500 font-bold px-4 py-2 rounded-full text-xs shadow-sm">실시간 동기화 완료</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                     <div className="bg-surface-800 p-4 rounded-2xl text-surface-300 font-mono text-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-surface-700 text-surface-400 text-[10px]">GitHub Original</div>
                        &gt; feat(auth): OAuth2 Kakao login integration<br/>
                        &gt; refactor: session management &amp; token validation
                     </div>
                     <div className="text-center text-brand-500 font-bold">↓↓↓</div>
                     <div className="bg-white p-5 rounded-2xl border border-surface-200 toss-shadow-hover relative">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-100 text-brand-600 text-[11px] font-extrabold rounded-full">CEO 리포트</div>
                        <p className="text-surface-900 font-bold text-lg mt-2">"카카오 간편 로그인이 개발 서버에 연동 완료되었습니다. 로그인 유지 기능도 안정화되었습니다."</p>
                     </div>
                  </div>
               </div>

               <div className="col-span-1 bg-brand-500 rounded-[28px] p-8 text-left flex flex-col justify-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                  <h4 className="font-medium text-brand-100 mb-4 z-10 text-lg">AI 마일스톤 예측</h4>
                  <div className="text-6xl font-extrabold mb-4 z-10 tracking-tighter">0<span className="text-3xl font-bold ml-1">%</span></div>
                  <p className="text-brand-100 text-[15px] leading-relaxed z-10 font-medium">핵심 인력의 코드 반영 빈도를 분석한 결과, 마감일 지연 확률이 0%로 안전합니다.</p>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
