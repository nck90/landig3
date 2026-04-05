import React from 'react';
import { motion } from 'framer-motion';

const PainPoints = () => {
  const problems = [
    {
      title: '확인할 길 없는 진행도',
      description: '"이번 주 85% 진행되었습니다."\n이 한마디에 수십, 수백만 원이 걸린 결과물을 맡겨야 합니다. 진짜로 85%가 완성되었는지 객관적으로 증명할 데이터가 없으니까요.',
    },
    {
      title: '소통을 가로막는 기술 용어',
      description: '"API 연동과 DB 아키텍처 개선 작업 중입니다."\n기술 용어가 난무하는 회의실에서, 비개발자 클라이언트는 내용의 진위를 묻지 못하고 결국 주도권을 내어주게 됩니다.',
    },
    {
      title: '마감일 직전에 통보되는 지연',
      description: '일정이 크게 밀렸다는 사실은 왜 항상 오픈을 며칠 앞둔 시점에 알게 될까요? 작업이 정체되는 것을 사전에 감지할 지표가 전혀 없었기 때문입니다.',
    }
  ];

  return (
    <section className="py-32 bg-surface-50 relative overflow-hidden">
      {/* Subtle Mesh Background to keep the premium feel without the scroll-jacking */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold heading-tight mb-8 tracking-tighter leading-tight">
              문제가 생기는 진짜 이유는<br className="hidden md:block"/>
              <span className="text-brand-500">지식이 아니라 소통입니다.</span>
            </h3>
            <p className="text-xl md:text-2xl text-surface-500 font-medium leading-relaxed">
              대표님이 개발을 몰라서 일정이 지연되는 것이 아닙니다.<br className="hidden md:block"/>
              진행 과정을 직관적으로 <strong className="text-surface-900 border-b-2 border-surface-200">투명하게 들여다볼 시스템</strong>이 없었기 때문입니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="px-10 py-12 bg-white/80 backdrop-blur-xl rounded-[40px] toss-shadow border border-white/60 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] transition-shadow duration-500"
            >
              {/* Top accent gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 rounded-full bg-surface-50 flex items-center justify-center mb-8 flex-shrink-0 text-3xl font-extrabold text-brand-500 border border-surface-100 shadow-sm relative z-10 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                {idx + 1}
              </div>
              <h4 className="text-[26px] font-extrabold heading-tight mb-6 tracking-tight leading-snug relative z-10 text-surface-900">{prob.title}</h4>
              <div className="text-surface-600 leading-relaxed text-lg font-medium whitespace-pre-line relative z-10">
                {prob.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
