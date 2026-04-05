import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "현재 진행 중인 프로젝트도 중간에 도입할 수 있나요?",
    a: "물론입니다. Commitly는 프로젝트의 개발 환경(GitHub, GitLab 등)에 플러그인처럼 연동되므로, 언제든 즉시 붙여서 현재까지의 모든 소스 코드와 남은 일정을 모니터링할 수 있습니다."
  },
  {
    q: "개발사(외주사)가 연동을 거부하면 어떡하나요?",
    a: "거부할 이유가 전혀 없습니다. Commitly는 개발팀이 별도의 보고서를 작성하거나 툴에 접속할 필요 없이, 기존에 하던 코딩 작업만 그대로 하면 자동으로 AI가 분석해 주는 방식입니다. 오히려 스크럼 회의나 주간 보고서 제출의 압박에서 벗어나게 되므로 개발사에 훨씬 더 유리합니다."
  },
  {
    q: "저는 코딩 관련 지식이 아예 없는 문과 출신입니다. 그래도 쓸 수 있나요?",
    a: "Commitly가 존재하는 가장 큰 이유입니다. 복잡한 폴더 구조나 '백엔드 API 컨트롤러' 같은 용어를 알 필요가 없습니다. '결제 버튼 완료됨', '로딩 속도 지연됨' 같이 일상적인 비즈니스 언어로 완벽히 번역되어 보고서가 올라옵니다."
  },
  {
    q: "우리 회사만의 중요한 비즈니스 로직(소스 코드)이 유출될 위험은 없나요?",
    a: "절대 없습니다. Commitly는 소스 코드 전체를 저장하는 것이 아니라, 코드의 변경된 '메타데이터'와 화면 렌더링 값(스냅샷)만을 추출하여 암호화 전송합니다. 글로벌 대기업 수준의 ISO 보안 인증을 준수하고 있습니다."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Mesh background for design Phase 4 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-6 tracking-tighter">
            결제를 망설이고 계신가요?
          </h3>
          <p className="text-xl text-surface-500 font-medium">
            비전공자 대표님들이 가장 많이 묻는 질문 4가지를 명쾌하게 답변해 드립니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-surface-50 border-brand-200' : 'bg-white border-surface-200 hover:border-surface-300'}`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-surface-900">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-surface-100 text-brand-500 font-bold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-surface-600 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
