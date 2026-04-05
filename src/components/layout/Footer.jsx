import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-100 py-16 border-t border-surface-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Brand Column */}
        <div className="flex-[1.5]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl tracking-tighter">C</div>
            <span className="font-extrabold text-2xl tracking-tighter text-surface-900">
              Commitly
            </span>
          </div>
          <p className="text-[15px] leading-relaxed mb-8 font-medium text-surface-500 max-w-sm">
            커밋리는 전사 프로젝트의 투명한 의사결정을 돕는 기업용 개발 통제 솔루션입니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center toss-shadow text-surface-500 hover:text-brand-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-surface-900 font-bold mb-4 text-[15px]">Product</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-surface-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">기능 안내</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">엔터프라이즈 요금제</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">릴리즈 노트</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-surface-900 font-bold mb-4 text-[15px]">Resources</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-surface-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">고객 사례</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">보안 아키텍처 가이드</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">기술 블로그</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-surface-900 font-bold mb-4 text-[15px]">Company</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-surface-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">회사 소개</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">인재 영입</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-surface-900 font-bold mb-4 text-[15px]">Legal</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-surface-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">이용약관</a></li>
              <li><a href="#" className="text-surface-900 font-bold transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 text-[13px] font-medium text-surface-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Commitly Inc. All rights reserved.</p>
        <p>사업자등록번호: 123-45-67890 | 대표: 백준원</p>
      </div>
    </footer>
  );
};

export default Footer;
