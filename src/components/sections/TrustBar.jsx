import { motion } from 'framer-motion';

const metrics = [
  { value: '50+', label: '도입 팀' },
  { value: '12,000+', label: '분석된 커밋' },
  { value: '99.9%', label: '서비스 가동률' },
  { value: '4.8/5', label: '고객 만족도' },
];

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {metrics.map(m => (
            <motion.div
              key={m.label}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{m.value}</div>
              <div className="text-xs text-slate-400 mt-1">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
