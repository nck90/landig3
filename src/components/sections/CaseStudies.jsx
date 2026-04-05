import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    metric: '12시간',
    metricLabel: '매주 보고/회의 시간 단축',
    description: '"개발사에 매일 전화해서 어떻게 되어가냐고 묻느라 진이 빠졌었는데, 이제는 이 대시보드 하나만 보면 됩니다. 금요일이 평화로워졌어요."',
    profile: '창업 2년 차 헬스케어 스타트업 대표'
  },
  {
    metric: '0건',
    metricLabel: '사전 예고 없는 지연 오픈',
    description: '"미리 지연 확률을 알려주니까 개발사에 선제적으로 리소스를 요청할 수 있었습니다. 납기일을 100% 사수할 수 있었던 비결입니다."',
    profile: '국내 대기업 A사 사내 신사업 TF팀장'
  },
  {
    metric: '+45%',
    metricLabel: '에이전시 수주율 상승',
    description: '"어떤 에이전시도 이렇게 개발 내부 상황을 투명하게 공개하지 못합니다. 데이터를 클라이언트에게 직접 보여주니 신뢰도가 압도적입니다."',
    profile: 'IT 외주 전문 개발 에이전시 영업이사'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold heading-tight mb-6">
            감정 소모는 끝내고,<br className="hidden md:block"/>
            <span className="text-brand-500">데이터로 확신을 얻으세요.</span>
          </h3>
          <p className="text-xl text-surface-500 font-medium leading-relaxed">
            100개가 넘는 IT 프로젝트가 Commitly를 통해 블랙박스를 벗어났습니다.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="bg-surface-100 rounded-[32px] p-8 md:p-12 border border-surface-200/50 flex flex-col md:flex-row items-center gap-10 md:gap-16 toss-shadow cursor-default"
            >
              <div className="flex-shrink-0 text-center md:text-left min-w-[200px]">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-500 mb-2 tracking-tighter">
                  {study.metric}
                </div>
                <div className="text-lg font-bold text-surface-900">{study.metricLabel}</div>
              </div>

              <div className="flex-1">
                <p className="text-xl md:text-2xl text-surface-600 font-medium leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="text-surface-400 font-bold text-[15px]">
                  {study.profile}
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
