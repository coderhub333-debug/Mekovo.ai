import { useState } from 'react';
import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[#070707] text-[#E2E8F0] font-sans overflow-x-hidden">


<header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="MEKOVO Logo Icon" className="w-9 h-9 rounded-full object-cover border border-amber-500/30 group-hover:border-amber-400 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-U5gfxeox4NkEmJtsjSzCnP1x_YIgKkjG1qiTUFnOvhRvmM1-6uLkQcDMEHMQewyLcLWBHnymmTz_K14ZHLJhvHwO1-v3fLJv4euQ39_UGUVdwv1BysfAx0tXt7-0yV3Rq2SyjH8ZWijq-PlGVsPFNVK4um1A6axjK7uBc23Tkba5QisidrT4P7j9ql7eGTtCLtdJQtv0WpQl9THquJ9cRWOloxfeZph2AcRrQf6C1C8aqwtNr1R1IE46OLpAw8GehQ"/>
<span className="text-xl font-bold tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors">MEKOVO</span>
</a>

<nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-400" href="#home">Home</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300" href="#contact">
<span>Start Your Project</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>
</div>
</header>

<main className="relative pt-24" id="home">

<section className="relative min-h-[85vh] flex items-center overflow-hidden py-16 lg:py-24">

<div className="absolute right-0 top-1/4 -z-10 w-[550px] h-[550px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">TECHNOLOGY &amp; DIGITAL SOLUTIONS AGENCY</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We Build Digital Solutions That Move <span className="gold-gradient-text block mt-1">Businesses Forward.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed">
              We help brands grow with AI automation, modern websites and custom software. Turning your ideas into powerful digital experiences.
            </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all" href="#contact">
<span>Start Your Project</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all" href="#services">
<svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
<span>Our Services</span>
</a>
</div>

<div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-medium text-neutral-400">
<div className="flex items-center gap-2 bg-[#121212] px-3.5 py-1.5 rounded-full border border-white/5">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>AI Automation</span>
</div>
<div className="flex items-center gap-2 bg-[#121212] px-3.5 py-1.5 rounded-full border border-white/5">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Web Development</span>
</div>
<div className="flex items-center gap-2 bg-[#121212] px-3.5 py-1.5 rounded-full border border-white/5">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Software Development</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center">

<div className="absolute -top-6 right-2 text-right hidden sm:block">
<span className="text-[10px] font-bold tracking-widest text-amber-400/90 leading-tight block">SMARTER SYSTEMS.</span>
<span className="text-[10px] font-bold tracking-widest text-amber-400/90 leading-tight block">STRONGER BUSINESSES.</span>
</div>

<div className="relative w-full max-w-lg group">

<div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/20 to-amber-300/10 rounded-2xl blur-2xl opacity-75"></div>

<div className="relative bg-gradient-to-b from-[#222222] to-[#121212] p-3 rounded-2xl border border-white/10 shadow-2xl">

<div className="aspect-[16/10] bg-black rounded-lg border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">

<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-amber-500/20 blur-3xl pointer-events-none"></div>

<img alt="MEKOVO Emblem" className="w-16 h-16 rounded-full mb-3 shadow-lg shadow-amber-500/20 border border-amber-400/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-U5gfxeox4NkEmJtsjSzCnP1x_YIgKkjG1qiTUFnOvhRvmM1-6uLkQcDMEHMQewyLcLWBHnymmTz_K14ZHLJhvHwO1-v3fLJv4euQ39_UGUVdwv1BysfAx0tXt7-0yV3Rq2SyjH8ZWijq-PlGVsPFNVK4um1A6axjK7uBc23Tkba5QisidrT4P7j9ql7eGTtCLtdJQtv0WpQl9THquJ9cRWOloxfeZph2AcRrQf6C1C8aqwtNr1R1IE46OLpAw8GehQ"/>
<h3 className="text-lg font-bold text-white tracking-widest">MEKOVO</h3>
<p className="text-xs text-amber-300/90 tracking-wider mt-1">Ideas. Code. Automation.</p>
<div className="absolute bottom-3 w-1/3 h-1 bg-neutral-800 rounded-full"></div>
</div>

<div className="h-2 mt-2 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-b-md mx-auto w-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-20 lg:py-28 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
<div className="lg:col-span-7">
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">OUR SERVICES</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 leading-tight">
              Digital Solutions <br className="hidden sm:inline"/>for a <span className="gold-gradient-text">Smarter Tomorrow.</span>
</h2>
</div>
<div className="lg:col-span-5 border-l-2 border-amber-400/40 pl-6 lg:pl-8">
<p className="text-sm text-neutral-400 leading-relaxed">
              We specialize in AI automation, web development, and software development — helping businesses work smarter, move faster and achieve more.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
<div>
<div className="flex items-center justify-between mb-8">

<div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2a9 9 0 00-9 9c0 3.86 2.45 7.15 5.9 8.44V22h6.2v-2.56A9.003 9.003 0 0012 2zm-2 9a2 2 0 114 0 2 2 0 01-4 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80 bg-white/5 px-2.5 py-1 rounded">01</span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">AI Automation</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Automate repetitive tasks, streamline workflows and boost productivity with intelligent AI solutions.
              </p>
<ul className="space-y-2 text-xs text-neutral-300 font-medium border-t border-white/5 pt-5 mb-8">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Business Process Automation</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> AI Integrations</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Custom AI Workflows</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300 group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
<div>
<div className="flex items-center justify-between mb-8">

<div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80 bg-white/5 px-2.5 py-1 rounded">02</span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">Web Design &amp; Development</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Modern, responsive and high-performance websites that represent your brand and turn visitors into customers.
              </p>
<ul className="space-y-2 text-xs text-neutral-300 font-medium border-t border-white/5 pt-5 mb-8">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Business Websites</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> E-commerce Platforms</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> UI/UX Design</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300 group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
<div>
<div className="flex items-center justify-between mb-8">

<div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80 bg-white/5 px-2.5 py-1 rounded">03</span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">Software Development</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Custom software and web applications built to solve real problems and scale with your business.
              </p>
<ul className="space-y-2 text-xs text-neutral-300 font-medium border-t border-white/5 pt-5 mb-8">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Web Applications</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Mobile-Ready Solutions</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> API Integrations</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300 group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>
</div>
</div>
</section>


<section className="py-20 lg:py-28 relative bg-[#090909] border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-5 relative">
<div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 blur-[100px] pointer-events-none"></div>
<div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-5 rounded-2xl border border-white/10 shadow-2xl">

<div className="absolute -top-3.5 right-6 bg-amber-400/90 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                Better Technology. Greater Results.
              </div>

<div className="bg-black/90 rounded-xl p-4 border border-white/5 space-y-4">
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">dashboard.mekovo.ai</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<span className="text-[10px] text-neutral-400">Execution Speed</span>
<p className="text-base font-bold text-amber-400">+340%</p>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<span className="text-[10px] text-neutral-400">Automation Rate</span>
<p className="text-base font-bold text-emerald-400">99.8%</p>
</div>
</div>
<div className="space-y-2 pt-2">
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-4/5 rounded-full"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-3/5 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-8">
<div>
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">WHY CHOOSE MEKOVO</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                More Than Just <span className="gold-gradient-text">Development.</span>
</h2>
<p className="text-neutral-400 text-sm mt-3 max-w-xl leading-relaxed">
                We combine creativity, technology and strategy to deliver digital solutions that create real value.
              </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

<div className="bg-[#121212] p-5 rounded-xl border border-white/5 hover:border-amber-400/30 transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2l8 5v10l-8 5-8-5V7l8-5z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h4 className="text-base font-bold text-white mb-1">High Quality Work</h4>
<p className="text-xs text-neutral-400 leading-relaxed">Clean code, modern design, reliable performance.</p>
</div>

<div className="bg-[#121212] p-5 rounded-xl border border-white/5 hover:border-amber-400/30 transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h4 className="text-base font-bold text-white mb-1">Latest Technology</h4>
<p className="text-xs text-neutral-400 leading-relaxed">Stay ahead with cutting-edge tools and frameworks.</p>
</div>

<div className="bg-[#121212] p-5 rounded-xl border border-white/5 hover:border-amber-400/30 transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h4 className="text-base font-bold text-white mb-1">Tailored Solutions</h4>
<p className="text-xs text-neutral-400 leading-relaxed">Built around your unique business goals.</p>
</div>

<div className="bg-[#121212] p-5 rounded-xl border border-white/5 hover:border-amber-400/30 transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728M12 3v18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h4 className="text-base font-bold text-white mb-1">Ongoing Support</h4>
<p className="text-xs text-neutral-400 leading-relaxed">We're with you beyond launch.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-20 lg:py-28 relative border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">OUR WORK</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Featured Projects</h2>
<p className="text-neutral-400 text-sm mt-1">A selection of our recent work in AI automation, web development and software solutions.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors" href="#contact">
<span>View All Projects</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-[#111111] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-400/40 transition-all group flex flex-col justify-between">
<div className="p-4 bg-gradient-to-b from-[#181818] to-[#101010] aspect-[16/10] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="w-full h-full bg-neutral-900 rounded-lg border border-white/10 p-3 flex flex-col justify-between">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-[10px] text-amber-400 font-mono">FLOW_AUTOMATION_V2</span>
<span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">Active</span>
</div>
<div className="space-y-1.5 py-2">
<div className="h-2 bg-amber-400/20 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
<div className="h-2 bg-white/5 rounded w-5/6"></div>
</div>
<div className="text-[9px] text-neutral-500 font-mono">Syncing 1,420 events / sec</div>
</div>
</div>
<div className="p-6">
<span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">AI AUTOMATION</span>
<div className="flex items-center justify-between mt-1 mb-2">
<h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Smart Workflow Automation</h3>
<svg className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">Automated business processes with AI, reducing manual work by 70%.</p>
</div>
</div>

<div className="bg-[#111111] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-400/40 transition-all group flex flex-col justify-between">
<div className="p-4 bg-gradient-to-b from-[#181818] to-[#101010] aspect-[16/10] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="w-full h-full bg-neutral-900 rounded-lg border border-white/10 p-3 flex flex-col items-center justify-center text-center">
<span className="text-[10px] text-neutral-400 tracking-widest uppercase mb-1">Corporate Platform</span>
<p className="text-sm font-bold text-white">Build Something <span className="text-amber-400">Amazing</span></p>
<div className="mt-3 px-3 py-1 rounded bg-white/10 text-[9px] text-neutral-300">Modern Architecture</div>
</div>
</div>
<div className="p-6">
<span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">WEB DEVELOPMENT</span>
<div className="flex items-center justify-between mt-1 mb-2">
<h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Business Website</h3>
<svg className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">Modern, responsive website for a growing tech brand.</p>
</div>
</div>

<div className="bg-[#111111] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-400/40 transition-all group flex flex-col justify-between">
<div className="p-4 bg-gradient-to-b from-[#181818] to-[#101010] aspect-[16/10] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="w-full h-full bg-neutral-900 rounded-lg border border-white/10 p-3 flex flex-col justify-between">
<div className="flex justify-between items-center text-[10px] text-neutral-400">
<span>METRICS DASHBOARD</span>
<span className="text-emerald-400">+18.4%</span>
</div>
<div className="flex items-end gap-1.5 h-12 pt-2">
<div className="w-1/6 bg-amber-400/30 h-1/3 rounded-t"></div>
<div className="w-1/6 bg-amber-400/40 h-1/2 rounded-t"></div>
<div className="w-1/6 bg-amber-400/60 h-3/4 rounded-t"></div>
<div className="w-1/6 bg-amber-400/80 h-2/3 rounded-t"></div>
<div className="w-1/6 bg-amber-400 h-full rounded-t"></div>
<div className="w-1/6 bg-amber-300 h-5/6 rounded-t"></div>
</div>
<div className="text-[9px] text-neutral-500 font-mono">Real-time Analytics Feed</div>
</div>
</div>
<div className="p-6">
<span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">SOFTWARE DEVELOPMENT</span>
<div className="flex items-center justify-between mt-1 mb-2">
<h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Custom Web Application</h3>
<svg className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">Scalable web application with real-time data and analytics.</p>
</div>
</div>
</div>
</div>
</section>


<section className="py-20 lg:py-28 relative bg-[#090909] border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">OUR PROCESS</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          From Idea to <span className="gold-gradient-text">Impact.</span>
</h2>
<p className="text-neutral-400 text-sm mt-2 max-w-xl mx-auto">
          A simple, transparent process to turn your vision into a powerful digital solution.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative">

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 text-left relative group hover:border-amber-400/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80">01</span>
</div>
<h4 className="text-base font-bold text-white mb-2">Discover</h4>
<p className="text-xs text-neutral-400 leading-relaxed">We understand your goals, needs and challenges.</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 text-left relative group hover:border-amber-400/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80">02</span>
</div>
<h4 className="text-base font-bold text-white mb-2">Design</h4>
<p className="text-xs text-neutral-400 leading-relaxed">We create a clear plan and wireframes.</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 text-left relative group hover:border-amber-400/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80">03</span>
</div>
<h4 className="text-base font-bold text-white mb-2">Develop</h4>
<p className="text-xs text-neutral-400 leading-relaxed">We build, test and refine the solution.</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 text-left relative group hover:border-amber-400/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-mono font-bold text-amber-400/80">04</span>
</div>
<h4 className="text-base font-bold text-white mb-2">Launch</h4>
<p className="text-xs text-neutral-400 leading-relaxed">We deploy and support your success.</p>
</div>
</div>
</div>
</section>


<section className="py-20 lg:py-28 relative border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-5 space-y-8">
<div>
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">WHAT CLIENTS SAY</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                Trusted by Businesses <span className="gold-gradient-text">Worldwide.</span>
</h2>
</div>

<div className="bg-[#111111] p-8 rounded-2xl border border-white/5 relative">
<span className="text-5xl text-amber-400/30 font-serif absolute top-4 left-6 leading-none">“</span>
<p className="text-sm text-neutral-300 leading-relaxed pt-4 relative z-10 italic">
                MEKOVO delivered a fantastic website for our business. The team was professional, responsive and truly understood our vision. Highly recommended!
              </p>
<div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-amber-400/30 flex items-center justify-center font-bold text-amber-400 text-xs">
                    AC
                  </div>
<div>
<h5 className="text-xs font-bold text-white">Alex Carter</h5>
<p className="text-[10px] text-neutral-400">Founder, NovaTech</p>
</div>
</div>

<div className="flex items-center gap-3 text-xs text-neutral-400">
<button aria-label="Previous testimonial" className="hover:text-amber-400 transition-colors" onClick={() => alert("Feature coming soon!")}>←</button>
<span className="font-mono text-[11px] text-amber-400">1 / 3</span>
<button aria-label="Next testimonial" className="hover:text-amber-400 transition-colors" onClick={() => alert("Feature coming soon!")}>→</button>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex items-center gap-3 text-xs text-neutral-300">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span>hello@mekovo.com</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-300">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span>+91 98765 43210</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-300">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span>Calicut, Kerala, India</span>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-[#111111] p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl">
<span className="text-xs font-bold tracking-widest text-amber-400 uppercase">GET IN TOUCH</span>
<h3 className="text-2xl font-bold text-white mt-1 mb-2">Let's Build Your Next Project.</h3>
<p className="text-xs text-neutral-400 mb-8">Have an idea? Let's talk! Fill out the form and we'll get back to you as soon as possible.</p>
<form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! We will get back to you soon."); }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-neutral-300 mb-2">Your Name *</label>
<input className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors" placeholder="Enter your name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-300 mb-2">Email Address *</label>
<input className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors" placeholder="Enter your email" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-300 mb-2">Service Needed *</label>
<select className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors">
<option className="bg-[#181818]">Select a service</option>
<option className="bg-[#181818]">AI Automation</option>
<option className="bg-[#181818]">Web Design &amp; Development</option>
<option className="bg-[#181818]">Software Development</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-300 mb-2">Project Details *</label>
<textarea className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors" placeholder="Tell us about your project..." required="" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all" type="submit">
<span>Send Message</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-emerald-400 transition-colors" href="https://wa.me/" rel="noopener noreferrer" target="_blank">
<span>Or reach us on</span>
<span className="text-emerald-400 font-bold underline">WhatsApp</span>
</a>
</div>
</form>
</div>
</div>
</div>
</section>

</main>

<footer className="bg-black border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">

<a className="flex items-center gap-3" href="#">
<img alt="MEKOVO Logo Mark" className="w-8 h-8 rounded-full border border-amber-400/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-U5gfxeox4NkEmJtsjSzCnP1x_YIgKkjG1qiTUFnOvhRvmM1-6uLkQcDMEHMQewyLcLWBHnymmTz_K14ZHLJhvHwO1-v3fLJv4euQ39_UGUVdwv1BysfAx0tXt7-0yV3Rq2SyjH8ZWijq-PlGVsPFNVK4um1A6axjK7uBc23Tkba5QisidrT4P7j9ql7eGTtCLtdJQtv0WpQl9THquJ9cRWOloxfeZph2AcRrQf6C1C8aqwtNr1R1IE46OLpAw8GehQ"/>
<span className="text-lg font-bold tracking-widest text-white uppercase">MEKOVO</span>
</a>

<nav className="flex items-center space-x-6 text-xs text-neutral-400 font-medium">
<a className="hover:text-amber-400 transition-colors" href="#home">Home</a>
<a className="hover:text-amber-400 transition-colors" href="#services">Services</a>
<a className="hover:text-amber-400 transition-colors" href="#work">Work</a>
<a className="hover:text-amber-400 transition-colors" href="#about">About</a>
<a className="hover:text-amber-400 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center space-x-4 text-neutral-400">
<a aria-label="LinkedIn" className="hover:text-amber-400 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a aria-label="GitHub" className="hover:text-amber-400 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
</a>
<a aria-label="X Twitter" className="hover:text-amber-400 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</a>
<a aria-label="YouTube" className="hover:text-amber-400 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
</a>
</div>
</div>
<div className="pt-6 text-center text-xs text-neutral-500">
        © 2025 MEKOVO. All rights reserved.
      </div>
</div>
</footer>


    </div>
  );
}

export default App;
