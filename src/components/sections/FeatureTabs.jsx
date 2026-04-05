import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'dashboard',
    label: '통합 대시보드',
    title: '프로젝트의 모든 지표를\n한 화면에서 확인',
    desc: 'GitHub, Jira, Slack 등 흩어진 데이터를 자동으로 수집·통합합니다. 비개발자도 한눈에 이해할 수 있는 직관적 대시보드를 제공합니다.',
    features: [
      { title: '커밋 기반 진척률', desc: '실제 코드 커밋을 기반으로 조작이 불가능한 프로젝트 진척률을 자동 계산합니다.' },
      { title: '스프린트 분석', desc: '각 스프린트별 완료율, 병목 구간, 지연 원인을 자동으로 분석하고 알림을 발송합니다.' },
      { title: '역할별 맞춤 뷰', desc: '경영진, PM, 개발자 각 역할에 맞는 대시보드 뷰를 제공합니다. 필요한 정보만 빠르게.' },
      { title: '실시간 알림', desc: '목표 대비 지연, 코드 품질 하락, 보안 이슈 등 중요 이벤트를 즉시 슬랙·이메일로 전달합니다.' },
    ],
    mockup: DashboardMock,
  },
  {
    id: 'review',
    label: 'AI 코드 리뷰',
    title: 'AI가 매 PR마다\n코드 품질을 검증합니다',
    desc: 'Pull Request가 올라올 때마다 AI가 즉시 분석합니다. 잠재적 버그, 보안 취약점, 성능 이슈를 한국어로 상세히 짚어줍니다.',
    features: [
      { title: '자동 PR 분석', desc: '코드 변경사항을 AI가 자동으로 리뷰하고, 문제점과 개선안을 코멘트로 남깁니다.' },
      { title: '보안 취약점 탐지', desc: 'SQL Injection, XSS 등 OWASP Top 10 취약점을 실시간으로 감지하고 경고합니다.' },
      { title: '코드 건강도 스코어', desc: '프로젝트 전체의 코드 품질을 A+ ~ F 등급으로 스코어링합니다. 추이 변화도 추적.' },
      { title: '비개발자 요약', desc: '기술 용어 없이, 이번 주 코드 변경이 프로젝트에 어떤 의미인지 쉽게 설명합니다.' },
    ],
    mockup: CodeReviewMock,
  },
  {
    id: 'report',
    label: '자동 보고서',
    title: '매주 보고서가\n자동으로 만들어집니다',
    desc: '개발팀에 물어볼 필요 없습니다. AI가 커밋 데이터를 분석해 경영진·PM이 바로 이해할 수 있는 보고서를 자동으로 생성합니다.',
    features: [
      { title: '주간 현황 리포트', desc: '이번 주 진척률, 코드 품질 변화, 주요 이슈를 한 페이지로 자동 요약합니다.' },
      { title: '이해관계자별 맞춤', desc: '경영진에겐 비용·일정 중심, PM에겐 태스크·이슈 중심으로 같은 데이터를 다르게 전달합니다.' },
      { title: '자동 발송', desc: '매주 월요일 아침, 슬랙·이메일·PDF로 보고서를 자동 전달합니다. 설정 한 번이면 끝.' },
      { title: '히스토리 아카이브', desc: '모든 보고서가 자동 저장됩니다. 인수인계 시 프로젝트 전체 맥락을 한번에 전달할 수 있습니다.' },
    ],
    mockup: ReportMock,
  },
];

/* ── Mock UIs ── */

function DashboardMock() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs text-slate-400">금주 진척률</div>
          <div className="text-3xl font-extrabold text-slate-900">84%</div>
        </div>
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">+12%</span>
      </div>
      <div className="flex items-end gap-1.5 h-24">
        {[30, 50, 42, 68, 55, 78, 84].map((h, i) => (
          <div key={i} className="flex-1 flex items-end">
            <div className={`w-full rounded-sm ${i === 6 ? 'bg-blue-600' : 'bg-slate-100'}`} style={{ height: `${h}%` }} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '완료 태스크', val: '127/152' },
          { label: '열린 이슈', val: '3건' },
          { label: '코드 품질', val: 'A+' },
        ].map(x => (
          <div key={x.label} className="bg-slate-50 rounded-lg p-2.5 text-center">
            <div className="text-[10px] text-slate-400">{x.label}</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">{x.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeReviewMock() {
  return (
    <div className="bg-[#0f1219] rounded-xl p-5 font-mono shadow-sm space-y-3">
      <div className="flex gap-1.5 mb-1">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="text-slate-500 text-[10px]">payment.js — PR #42</div>
      <div className="bg-red-500/10 rounded px-2 py-1">
        <span className="text-red-400 text-[11px]">- const calc = (amt) =&gt; amt * 1.1;</span>
      </div>
      <div className="bg-emerald-500/10 rounded px-2 py-1">
        <span className="text-emerald-400 text-[11px]">+ const calc = (amt, rate = 1.1) =&gt; amt * rate;</span>
      </div>
      <div className="bg-blue-500/[0.08] border border-blue-500/10 rounded-lg p-3 mt-2">
        <div className="text-blue-400 text-[10px] font-bold mb-1">AI Review · 품질 A+</div>
        <p className="text-[11px] text-slate-400 leading-relaxed m-0">
          세율 하드코딩을 파라미터로 분리해 확장성을 개선했습니다. 결제 모듈이므로 단위 테스트 커버리지(현재 92%)를 유지해주세요. 보안 취약점: 없음.
        </p>
      </div>
    </div>
  );
}

function ReportMock() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <div className="text-xs text-slate-400">주간 보고서</div>
          <div className="text-sm font-bold text-slate-900">2026년 3월 4주차</div>
        </div>
        <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded">자동 생성</span>
      </div>
      {[
        { label: '진척률', value: '84% (목표 80% 초과 달성)', color: 'text-emerald-600' },
        { label: '코드 품질', value: 'A+ (전주 대비 개선)', color: 'text-blue-600' },
        { label: '주요 이슈', value: '결제 API 응답 지연 (해결 완료)', color: 'text-slate-600' },
        { label: '다음 주 계획', value: '사용자 인증 모듈 개발 착수', color: 'text-slate-600' },
      ].map(r => (
        <div key={r.label} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
          <div>
            <div className="text-[10px] text-slate-400">{r.label}</div>
            <div className={`text-xs font-medium ${r.color}`}>{r.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            기능 상세 안내
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            Commitly가 제공하는 핵심 기능을 자세히 살펴보세요.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-slate-200 rounded-xl p-1 gap-1">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  active === i
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            {/* Left: text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug tracking-tight whitespace-pre-line">
                {tab.title}
              </h3>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">{tab.desc}</p>

              <div className="mt-8 space-y-5">
                {tab.features.map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockup */}
            <div className="lg:sticky lg:top-24">
              <tab.mockup />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
