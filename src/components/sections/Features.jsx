import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="features" className="py-32 bg-white border-t border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-8">
            기능이 아니라 <br className="md:hidden"/>확실한 결과를 약속합니다
          </h3>
          <p className="text-xl text-surface-500 font-medium">
            대표님이 확인해야 할 것은 '코드'가 아니라 '진실'입니다.
          </p>
        </div>

        {/* Toss-style Massive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: VRT (Visual Regression Testing) from Business Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:col-span-2 bg-surface-50 rounded-[40px] toss-shadow overflow-hidden flex flex-col md:flex-row relative cursor-default border border-surface-200/50"
          >
             <div className="p-12 md:p-16 flex-1 flex flex-col justify-center relative z-10">
               <span className="text-brand-500 font-bold mb-4 tracking-wider text-sm">작업 화면 즉시 확인</span>
               <h4 className="text-[32px] font-extrabold tracking-tight mb-6 text-surface-900 leading-snug">코드를 몰라도 괜찮습니다.<br/>화면 캡처로 보여드립니다.</h4>
               <p className="text-xl text-surface-600 font-medium leading-relaxed max-w-md">
                 수정된 사항이 실제 앱 화면에서 어떻게 바뀌었는지 묻지 마세요. 시스템이 업데이트된 화면을 그대로 캡처하여 직관적인 전후 비교 리포트로 만들어 드립니다.
               </p>
             </div>
             <div className="flex-1 bg-gradient-to-br from-brand-100 to-white relative min-h-[300px] flex items-center justify-center p-10">
                 <div className="w-full bg-white rounded-3xl toss-shadow-hover p-6 border border-surface-200 relative overflow-hidden">
                   <div className="text-xs font-bold text-surface-400 mb-4 flex justify-between relative z-10">
                     <span>Before</span>
                     <span className="text-brand-500">After (완성된 화면 캡처)</span>
                   </div>
                   <div className="flex gap-4 relative z-10">
                     <div className="flex-1 h-32 bg-surface-100 rounded-xl border border-surface-200 flex flex-col items-center justify-center opacity-50">
                        <div className="w-12 h-4 bg-surface-300 rounded mb-2"></div>
                        <div className="w-20 h-4 bg-surface-300 rounded"></div>
                     </div>
                     <div className="flex-1 h-32 bg-brand-50 rounded-xl border-2 border-brand-400 flex flex-col items-center justify-center toss-shadow">
                        <div className="w-12 h-4 bg-brand-500 rounded mb-2"></div>
                        <div className="w-24 h-4 bg-surface-900 rounded"></div>
                     </div>
                   </div>
                   {/* Animated scanning line */}
                   <motion.div 
                      initial={{ left: "10%" }}
                      animate={{ left: ["10%", "90%", "10%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 bottom-0 w-1 bg-brand-400 z-20 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                   ></motion.div>
                </div>
             </div>
          </motion.div>

          {/* Feature 2: Dispute Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[40px] toss-shadow border border-surface-200 p-12 flex flex-col"
          >
            <div className="mb-10">
              <span className="text-brand-500 font-bold mb-4 block tracking-wider text-sm">모든 과정의 기록화</span>
              <h4 className="text-[32px] font-extrabold tracking-tight mb-6 text-surface-900 leading-snug">분쟁을 원천 차단하는<br/>단일 기록 저장소</h4>
              <p className="text-lg text-surface-600 font-medium leading-relaxed">
                구두나 카카오톡으로 날아가던 무수한 수정 요청들. 이제 시스템에 하나의 기록으로 영구히 남아 억울한 분쟁과 책임 공방을 막아줍니다.
              </p>
            </div>
            <div className="mt-auto bg-surface-50 rounded-2xl p-8 border border-surface-200">
               <div className="flex flex-col gap-6">
                 <div className="flex gap-4 items-start">
                   <div className="w-3 h-3 bg-brand-500 rounded-full mt-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <div>
                     <div className="text-sm font-bold text-surface-900">클라이언트 수정 요청 승인</div>
                     <div className="text-xs font-medium text-surface-500 mt-1">2026.04.05 14:22</div>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-3 h-3 bg-surface-300 rounded-full mt-1.5"></div>
                   <div>
                     <div className="text-sm font-bold text-surface-900">결제 모듈 개발 착수</div>
                     <div className="text-xs font-medium text-surface-500 mt-1">2026.04.04 09:00</div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Feature 3: Llama-3 AI Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-brand-900 rounded-[40px] toss-shadow p-12 flex flex-col text-white"
          >
            <div className="mb-10">
              <span className="text-brand-300 font-bold mb-4 block tracking-wider text-sm">AI 비즈니스 통역</span>
              <h4 className="text-[32px] font-extrabold tracking-tight mb-6 leading-snug">이메일로 받아보는<br/>가장 쉬운 요약 보고서</h4>
              <p className="text-lg text-brand-100 font-medium leading-relaxed">
                '결제 모듈 백엔드 세팅'이라는 복잡한 개발자 로그를, '카카오 간편 로그인 작업 완료'라는 일상적인 언어로 통역해 대표님께 전달합니다.
              </p>
            </div>
            <div className="mt-auto bg-brand-800/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-700 relative overflow-hidden">
               {/* Decorative background glow */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/30 rounded-full blur-2xl"></div>
               
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-brand-900 font-black text-xl shadow-lg relative z-10">AI</div>
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 className="bg-white text-surface-900 font-bold p-5 rounded-2xl text-[15px] leading-relaxed shadow-xl relative z-10"
               >
                 "오늘 개발팀이 카카오 로그인 기능을 완료했습니다. 기존 이메일 가입 유저와의 데이터 통합 테스트도 정상 통과했습니다."
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
