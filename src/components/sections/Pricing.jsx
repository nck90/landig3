import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-6">
            프로젝트의 투명함을<br/>가장 합리적으로 구매하세요
          </h3>
          <p className="text-xl text-surface-500 font-medium">
            초기 창업자를 위한 단일 방어 모델부터, 에이전시를 위한 스튜디오 플랜까지.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-surface-200 p-1.5 rounded-full flex items-center relative">
            <div 
               className={`absolute left-1.5 top-1.5 bottom-1.5 w-[140px] bg-white rounded-full toss-shadow transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${!isAnnual ? 'translate-x-[140px]' : ''}`}
            ></div>
            <button 
              className={`relative z-10 w-[140px] py-3 text-[15px] font-bold rounded-full transition-colors ${isAnnual ? 'text-surface-900' : 'text-surface-500'}`}
              onClick={() => setIsAnnual(true)}
            >
              연 결제 <span className="text-brand-500 ml-1 text-xs">20% 할인</span>
            </button>
            <button 
              className={`relative z-10 w-[140px] py-3 text-[15px] font-bold rounded-full transition-colors ${!isAnnual ? 'text-surface-900' : 'text-surface-500'}`}
              onClick={() => setIsAnnual(false)}
            >
              월 결제
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-[40px] p-12 toss-shadow border border-surface-200 flex flex-col"
          >
            <div className="mb-8">
              <h4 className="text-[28px] font-extrabold text-surface-900 mb-2">Single Project</h4>
              <p className="text-surface-500 font-medium">단일 외주 프로젝트를 방어하려는<br/>초기 창업자 및 스타트업</p>
            </div>
            <div className="mb-10">
              <div className="flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-extrabold tracking-tighter"
                  >
                    {isAnnual ? '39,000' : '49,000'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xl font-medium text-surface-500 pb-1">원 / 월</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-5 mb-12 flex-1">
              <li className="flex items-center gap-4 text-lg font-medium text-surface-700">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">✓</div>
                진행 중인 외주 개발 프로젝트 연동 지원
              </li>
              <li className="flex items-center gap-4 text-lg font-medium text-surface-700">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">✓</div>
                무제한 AI 비즈니스 통역
              </li>
              <li className="flex items-center gap-4 text-lg font-medium text-surface-700">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">✓</div>
                작업 화면 스냅샷 자동 생성
              </li>
              <li className="flex items-center gap-4 text-lg font-medium text-surface-700">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">✓</div>
                합의 및 승인 타임라인 아카이빙
              </li>
            </ul>

            <button className="w-full py-5 bg-surface-100 hover:bg-surface-200 text-surface-900 rounded-2xl font-bold text-lg transition-colors border border-surface-200">
              가입하고 14일 체험하기
            </button>
          </motion.div>

          {/* Business Plan */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-brand-900 rounded-[40px] p-12 toss-shadow-hover relative flex flex-col overflow-hidden text-white border border-brand-800"
          >
             <div className="absolute top-0 right-0 px-6 py-2 bg-brand-500 text-white font-bold text-sm tracking-widest rounded-bl-3xl overflow-hidden">
               <span className="relative z-10">RECOMMENDED</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
             </div>
             
             {/* Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] max-h-[300px] bg-brand-500/20 blur-[80px] rounded-full z-0"></div>

            <div className="mb-8 relative z-10">
              <h4 className="text-[28px] font-extrabold text-white mb-2">Agency License</h4>
              <p className="text-brand-200 font-medium tracking-tight">다수의 클라이언트에게 투명성을 제공해<br/>신뢰 자산을 구축하려는 개발사</p>
            </div>
            <div className="mb-10 relative z-10">
              <div className="flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={isAnnual ? 'annual2' : 'monthly2'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-extrabold tracking-tighter"
                  >
                    {isAnnual ? '129,000' : '159,000'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xl font-medium text-brand-300 pb-1">원 / 월</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-5 mb-12 flex-1 relative z-10">
               <li className="flex items-center gap-4 text-lg font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                최대 10개 프로젝트 동시 연결
               </li>
               <li className="flex items-center gap-4 text-lg font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                클라이언트용 독립 대시보드 권한
               </li>
               <li className="flex items-center gap-4 text-lg font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                리스크 헬스 스코어 상세 예측
               </li>
               <li className="flex items-center gap-4 text-lg font-medium text-white">
                <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                완료 프로젝트 코드 허브 평생 보관
               </li>
            </ul>

            <button className="relative z-10 w-full py-5 bg-brand-500 hover:bg-brand-400 text-white rounded-2xl font-bold text-lg transition-colors shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
              팀 라이선스 도입하기
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
