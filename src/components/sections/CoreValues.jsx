import { motion } from 'framer-motion';

const values = [
  {
    icon: 'monitoring',
    title: '실시간 프로젝트 가시성',
    desc: '커밋, PR, 이슈를 자동으로 수집해 프로젝트 진척률을 실시간으로 시각화합니다. "거의 다 됐습니다"가 아닌, 데이터로 확인하세요.',
    highlights: ['커밋 기반 진척률 자동 계산', '스프린트별 번다운 차트', '지연 구간 자동 알림'],
  },
  {
    icon: 'smart_toy',
    title: 'AI 코드 품질 분석',
    desc: 'PR이 올라올 때마다 AI가 코드를 분석합니다. 잠재적 버그, 보안 취약점, 성능 이슈를 한국어로 리포팅해 비개발자도 이해할 수 있습니다.',
    highlights: ['PR별 자동 AI 코드 리뷰', '코드 건강도 스코어링', '주간 품질 리포트 자동 생성'],
  },
  {
    icon: 'description',
    title: '자동 보고서 생성',
    desc: '매주 프로젝트 현황을 AI가 요약합니다. 개발팀에 물어볼 필요 없이, 경영진·PM·기획자가 직접 상황을 파악할 수 있습니다.',
    highlights: ['비개발자 맞춤 요약 리포트', '주간/월간 자동 발송', 'PDF·슬랙·이메일 전달'],
  },
  {
    icon: 'shield',
    title: '엔터프라이즈 보안',
    desc: '외주사에 소스코드를 맡기는 불안감을 해소합니다. 접근 권한, 감사 로그, 암호화까지 기업이 요구하는 모든 보안 요건을 충족합니다.',
    highlights: ['IP 기반 접근 제어', '전체 활동 감사 로그', 'SSO / SAML 2.0 지원'],
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CoreValues() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            외주 관리에 필요한
            <br />
            모든 것을 하나에
          </h2>
          <p className="mt-4 text-slate-500 text-[15px]">
            흩어진 도구를 돌아다닐 필요 없이, Commitly 하나로 프로젝트의 모든 것을 파악하세요.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {values.map(v => (
            <motion.div
              key={v.title}
              variants={cardAnim}
              className="group bg-white border border-slate-150 rounded-2xl p-7 md:p-8 hover:border-slate-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 text-xl">{v.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{v.desc}</p>
              <ul className="space-y-2">
                {v.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 14 14">
                      <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-slate-600">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
