import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Commitly를 사용하려면 개발팀의 추가 작업이 필요한가요?',
    a: '아닙니다. GitHub 레포지토리를 연동하면 커밋, PR, 이슈 데이터를 자동으로 수집합니다. 개발팀의 워크플로우를 전혀 변경할 필요 없이, 5분 안에 첫 리포트를 받아볼 수 있습니다.',
  },
  {
    q: '비개발자도 정말 이해할 수 있나요?',
    a: 'Commitly의 핵심 가치입니다. AI가 기술 용어를 일반 비즈니스 언어로 자동 번역합니다. "커밋 127건, 테스트 커버리지 92%"를 "이번 주 예정 작업의 84%가 완료되었고, 코드 품질은 상위 5% 수준입니다"로 바꿔드립니다.',
  },
  {
    q: '소스코드가 Commitly 서버에 저장되나요?',
    a: '아닙니다. Commitly는 소스코드 자체를 저장하지 않습니다. 커밋 메타데이터, PR 정보, 이슈 트래킹 데이터만 수집하여 분석합니다. 엔터프라이즈 플랜에서는 온프레미스 구축으로 모든 데이터를 사내에서 관리할 수도 있습니다.',
  },
  {
    q: '기존에 사용 중인 Jira, Slack과 연동이 되나요?',
    a: 'GitHub, GitLab, Jira, Slack, Notion 등 주요 개발·협업 도구와 연동을 지원합니다. 엔터프라이즈 플랜에서는 사내 ERP, 그룹웨어 등 커스텀 연동도 가능합니다.',
  },
  {
    q: '무료 플랜으로 어디까지 사용할 수 있나요?',
    a: '프로젝트 1개, 팀원 3명, AI 보고서 월 10회까지 영구 무료입니다. 소규모 프로젝트나 Commitly를 먼저 체험해보고 싶은 팀에 적합합니다. 사용량이 늘어나면 언제든 Pro 플랜으로 업그레이드할 수 있습니다.',
  },
  {
    q: '도입 후 온보딩 지원이 있나요?',
    a: 'Pro 플랜부터 우선 기술 지원을 제공하며, 엔터프라이즈 플랜에서는 전담 기술 매니저가 초기 세팅부터 팀 교육까지 지원합니다. 모든 플랜에서 온보딩 가이드와 영상 튜토리얼을 이용할 수 있습니다.',
  },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[15px] font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{q}</span>
        <svg
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" viewBox="0 0 16 16"
        >
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">자주 묻는 질문</h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            궁금한 점이 더 있으시면 <a href="#" className="text-blue-600 hover:underline">문의하기</a>를 이용해주세요.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl border border-slate-100 px-7 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
