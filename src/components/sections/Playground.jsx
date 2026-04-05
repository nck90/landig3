import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const devLogs = [
  {
    id: 1,
    title: "백엔드 API",
    raw: `git commit -m "feat(auth): integrate OAuth2 payload"\n> Refactor session validation logic\n> UPDATE users SET token = ? WHERE id = ?\n> POST /api/v1/auth/kakao/callback 200 OK`,
    translation: "카카오톡 간편 로그인 연동이 구조적으로 완벽히 끝났습니다. 이제 고객들이 비회원으로도 3초 만에 결제 단계로 진입할 수 있어, 이탈률이 크게 줄어듭니다."
  },
  {
    id: 2,
    title: "프론트 UI",
    raw: `git commit -m "fix(checkout): resolve race condition in PG module"\n> Unmount listener on dispatch\n> z-index overflow in Safari fixed\n> Render cycle optimized (14ms -> 2ms)`,
    translation: "결제 버튼을 연타했을 때 이중 결제되던 심각한 버그를 수정했습니다! 또한 구형 아이폰(사파리) 브라우저에서 화면이 깨지던 현상도 깔끔하게 잡혔습니다."
  },
  {
    id: 3,
    title: "DB 마이그레이션",
    raw: `git commit -m "chore(db): index idx_user_orders on timestamp"\n> Table scan bottleneck resolved\n> Execution time: 4.2s -> 0.05s`,
    translation: "보이지 않는 서버 성능을 80배 넘게 끌어올렸습니다. 이제 이벤트 기간에 수만 명의 접속자가 몰려도 앱이 아예 멈추거나 먹통이 되지 않고 쾌적하게 돌아갑니다."
  }
];

const Playground = () => {
  const [activeLog, setActiveLog] = useState(devLogs[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(activeLog.translation.slice(0, i));
      i++;
      if (i > activeLog.translation.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 18); // fast, snappy typing
    return () => clearInterval(timer);
  }, [activeLog]);

  return (
    <section className="py-32 bg-surface-900 border-y border-surface-800 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 text-white max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black heading-tight mb-6 text-white tracking-tighter">
            백 번의 설명보다<br className="hidden md:block"/>
            <span className="text-brand-400">직접 한 번 눌러보세요.</span>
          </h3>
          <p className="text-xl text-surface-400 font-medium">
            개발자가 쓴 외계어 같은 로그가, Commitly를 거치면<br className="hidden md:block"/>
            얼마나 직관적인 비즈니스 언어로 바뀌는지 체험해 보세요.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-surface-800/50 p-6 rounded-[40px] border border-surface-700 backdrop-blur-xl">
          
          {/* Left panel: Trigger Buttons */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {devLogs.map((log) => (
              <button
                key={log.id}
                onClick={() => setActiveLog(log)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border ${
                  activeLog.id === log.id 
                  ? 'bg-brand-500/20 border-brand-500/50 toss-shadow' 
                  : 'bg-surface-800 border-surface-700 hover:bg-surface-700 hover:border-surface-600'
                }`}
              >
                <div className={`text-sm font-bold mb-3 uppercase tracking-wider ${activeLog.id === log.id ? 'text-brand-400' : 'text-surface-500'}`}>
                  {log.title}
                </div>
                <div className="font-mono text-[13px] text-surface-300 opacity-80 line-clamp-2">
                  {log.raw.split('\n')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Right panel: Terminal & Translation Output */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {/* Raw Terminal Data */}
            <div className="bg-surface-950 rounded-3xl p-6 font-mono text-[14px] text-surface-400 border border-surface-800 relative h-48 overflow-hidden group">
              <div className="absolute top-4 right-6 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)] z-20"></div><div className="text-xs font-bold text-surface-600 mb-4 uppercase tracking-widest">Raw Data</div>
              <pre className="whitespace-pre-wrap font-medium leading-relaxed">
                <span className="text-green-400">root@dev:~$</span> {activeLog.raw}
              </pre>
            </div>

            {/* AI Translation Output */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 border border-brand-500 relative flex-1 min-h-[200px] toss-shadow-hover">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
               <div className="text-brand-200 font-extrabold text-sm mb-4 tracking-widest flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-brand-400 flex items-center justify-center text-brand-900 text-[10px]">AI</div>
                 CEO 맞춤 요약 보고서
               </div>
               <div className="text-2xl md:text-3xl font-bold text-white leading-relaxed tracking-tight">
                  <span className="opacity-90">{displayedText}</span>
                  {isTyping && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-3 h-8 bg-brand-300 ml-1 align-middle"></motion.span>}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Playground;
