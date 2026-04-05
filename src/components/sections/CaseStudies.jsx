import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    metric: '12시간',
    metricLabel: '매주 보고/회의 시간 단축',
    description: '"개발사에 매일 전화해서 어떻게 되어가냐고 묻느라 진이 빠졌었는데, 이 대시보드 하나만 보면 끝납니다. 금요일마다 전쟁 같았던 보고가 사라졌어요."',
    profile: '창업 2년 차 헬스케어 스타트업 대표'
  },
  {
    metric: '0건',
    metricLabel: '사전 예고 없는 오픈 지연',
    description: '"미리 지연 확률을 알려주니까 내부적으로 선제 대응할 수 있었습니다. 출시일을 100% 사수할 수 있었던 유일한 비결입니다."',
    profile: '국내 대기업 A사 신사업 TF팀장'
  },
  {
    metric: '+45%',
    metricLabel: '에이전시 수주율 동반 상승',
    description: '"이 정도로 개발 내부 상황을 투명하게 공개하니 오히려 클라이언트의 신뢰도가 말도 안 되게 올라갑니다. 우리 에이전시의 강력한 경쟁력이 되었습니다."',
    profile: 'IT 외주 전문 개발사 영업이사'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 bg-surface-50 border-t border-surface-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-6 tracking-tighter">
            감정 소모는 끝내고,<br className="hidden md:block"/>
            <span className="text-brand-500">데이터로 확신을 얻으세요</span>
          </h3>
          <p className="text-xl text-surface-500 font-medium leading-relaxed">
            수백 개의 IT 프로젝트가 이미 원시적인 보고 체계를 벗어나<br/>Commitly의 투명한 대시보드로 성공적인 런칭을 마쳤습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className={`rounded-[40px] p-10 md:p-12 flex flex-col toss-shadow-hover h-full ${idx === 0 ? 'bg-brand-500 text-white' : 'bg-white text-surface-900 border border-surface-200'}`}
            >
              <div className="mb-8">
                <div className={`text-6xl font-extrabold mb-3 tracking-tighter ${idx === 0 ? 'text-white' : 'text-brand-500'}`}>
                  {study.metric}
                </div>
                <div className={`text-lg font-bold ${idx === 0 ? 'text-brand-100' : 'text-surface-500'}`}>{study.metricLabel}</div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <p className={`text-xl font-medium leading-relaxed mb-10 ${idx === 0 ? 'text-white' : 'text-surface-700'}`}>
                  {study.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${idx === 0 ? 'bg-white/20 text-white' : 'bg-surface-100 text-surface-400'}`}>
                    {study.profile.charAt(0)}
                  </div>
                  <div className={`font-bold text-[15px] ${idx === 0 ? 'text-brand-50' : 'text-surface-900'}`}>
                    {study.profile}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
