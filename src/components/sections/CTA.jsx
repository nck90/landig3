import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-600 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden toss-shadow-hover animate-mesh-bg bg-[length:200%_200%]">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-brand-400 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-brand-600 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
            지금 개발 중인 코드,<br/>
            직접 눈으로 확인해보시겠습니까?
          </h2>
          <p className="text-xl font-medium text-brand-100 mb-12 max-w-2xl mx-auto">
            시작할 때 신용카드 등록조차 받지 않습니다.<br className="hidden md:block"/>
            14일간 모든 데이터를 투명하게 확인하시고, 가치를 증명하지 못하면 100% 환불해 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              animate={{ rotate: [0, -1.5, 1.5, -1.5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand-600 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              선착순 1:1 기획 진단 받기
            </motion.button>
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white rounded-full font-bold text-xl hover:bg-brand-700 transition-colors">
              14일 무료 체험 시작
            </button>
          </div>
          
          <p className="mt-8 text-brand-200 text-sm font-medium">
            *선착순 기획 AI 진단 서비스는 예비/초기 창업 패키지 선정 기업에 한해 무상 지원됩니다.
          </p>
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default CTA;
