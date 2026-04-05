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
          결과를 실제 앱 화면 캡처본으로 직접 확인하는 직관적인 소통.
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
        
        {/* Premium Floating UI Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          className="w-full max-w-5xl mt-24 relative perspective-[2000px]"
        >
          <div className="relative bg-white/80 backdrop-blur-3xl border border-white/50 rounded-[40px] toss-shadow-hover p-6 md:p-10 overflow-hidden flex flex-col z-10 transform-gpu" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)' }}>
            
            {/* Header Mockup */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-200/60">
               <div className="flex gap-2.5">
                 <div className="w-3.5 h-3.5 rounded-full bg-surface-200"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-surface-200"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-surface-200"></div>
               </div>
               <div className="font-bold text-surface-900 bg-surface-100/50 px-6 py-2 rounded-full text-sm backdrop-blur-sm">Commitly Workpsace</div>
               <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-100"></div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
               
               {/* Left Window: The Translation */}
               <div className="col-span-2 bg-surface-50/50 rounded-[32px] p-8 text-left border border-white">
                  <div className="flex justify-between items-center mb-6">
                     <h4 className="font-extrabold text-surface-900 text-xl tracking-tight">실시간 통역 로그</h4>
                     <span className="bg-brand-50 text-brand-600 font-bold px-4 py-2 rounded-full text-xs">업데이트 됨</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="bg-surface-800 p-5 rounded-2xl text-surface-300 font-mono text-[13px] relative overflow-hidden shadow-inner"
                     >
                        <div className="absolute top-0 right-0 px-3 py-1 bg-surface-700/50 text-surface-400 text-[10px] rounded-bl-lg">GitHub Push</div>
                        <span className="text-brand-400">commit</span> 8f9a2b<br/>
                        &gt; feat(auth): OAuth2 Kakao login integration<br/>
                        &gt; refactor: session management &amp; token
                     </motion.div>
                     
                     <div className="flex justify-center -my-2 relative z-10">
                        <div className="bg-white rounded-full p-2 toss-shadow border border-surface-100 text-brand-500 font-black">
                           ↓
                        </div>
                     </div>
                     
                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        className="bg-white p-6 rounded-2xl border border-brand-100 toss-shadow-hover relative pl-16 overflow-hidden"
                     >
                        <div className="absolute top-0 left-0 bottom-0 w-12 bg-brand-50 flex items-start justify-center pt-6 text-brand-500 font-black text-2xl border-r border-brand-100">
                           AI
                        </div>
                        <p className="text-surface-900 font-bold text-[17px] leading-relaxed">
                          "카카오 간편 로그인이 개발 서버에 연동 완료되었습니다.<br/>기존 이메일 가입 유저와의 데이터 통합 테스트도 정상 통과했습니다."
                        </p>
                     </motion.div>
                  </div>
               </div>

               {/* Right Window: The Milestone */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                  className="col-span-1 bg-gradient-to-br from-brand-500 to-brand-600 rounded-[32px] p-8 text-left flex flex-col justify-center text-white relative overflow-hidden shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
               >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  <h4 className="font-bold text-brand-100 mb-6 z-10 text-lg flex items-center justify-between">
                     지연 확률
                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  </h4>
                  <div className="text-[80px] font-extrabold mb-2 z-10 tracking-tighter leading-none">0<span className="text-4xl font-bold ml-1">%</span></div>
                  <p className="text-brand-100 text-[15px] leading-relaxed z-10 font-medium">핵심 인력의 코드 반영 빈도를 분석한 결과, 일정은 완벽하게 준수될 예정입니다.</p>
               </motion.div>

            </div>
          </div>
          
          {/* Decorative Background Elements behind the mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
