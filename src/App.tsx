/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { 
  Cpu, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Download, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  Globe, 
  Mail, 
  Phone,
  BarChart3,
  Settings2,
  Layers
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-grey-border">
    <div className="max-w-7xl mx-auto px-10">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl tracking-tight text-brand-blue uppercase">
            SIGNAL<span className="text-brand-orange">HOUND</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[13px] font-semibold uppercase tracking-wider text-slate-600">
          <a href="#features" className="hover:text-brand-blue transition-colors">Специфікації</a>
          <a href="#software" className="hover:text-brand-blue transition-colors">Програмне забезпечення</a>
          <a href="#specs" className="hover:text-brand-blue transition-colors">Документація</a>
          <a href="#applications" className="hover:text-brand-blue transition-colors">Контакти</a>
        </div>
        <button className="bg-brand-orange text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-brand-orange/90 transition-all">
          Замовити
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-16 bg-white">
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[48px] font-extrabold text-brand-blue leading-[1.1] mb-4">
            Signal Hound SA44B
          </h1>
          <p className="text-base text-slate-600 mb-6 max-w-lg leading-relaxed">
            Професійний USB спектральний аналізатор з частотним діапазоном до 4.4 ГГц. Компактний форм-фактор та лабораторна точність у ваших руках.
          </p>
          <ul className="space-y-2 mb-8 text-[13px] font-medium text-slate-700">
            {[
              "Динамічний діапазон від -151 дБм до +10 дБм",
              "Висока швидкість сканування та аналізу",
              "Потужне програмне забезпечення Spike™ у комплекті",
              "Живлення через USB — жодних зайвих кабелів"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-brand-orange font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <button className="bg-brand-orange text-white px-10 py-4 rounded font-bold text-base uppercase tracking-wider hover:bg-brand-orange/90 transition-all">
              Замовити Signal Hound SA44B
            </button>
            <button className="bg-transparent border-2 border-brand-blue text-brand-blue px-8 py-4 rounded font-bold text-sm hover:bg-brand-blue/5 transition-colors">
              Завантажити Datasheet
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-grey-light border border-grey-border rounded-lg p-10 flex items-center justify-center min-h-[320px]"
        >
          <div className="absolute top-3 right-3 bg-brand-blue text-white px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-tighter">
            MADE IN USA
          </div>
          <img 
            src="https://signalhound.com/wp-content/uploads/2014/05/SA44B-USB-Spectrum-Analyzer.png" 
            alt="Signal Hound SA44B" 
            className="w-full max-w-[320px] h-auto drop-shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const QuickStats = () => (
  <section className="bg-grey-light border-y border-grey-border py-8">
    <div className="max-w-7xl mx-auto px-10">
      <div className="high-density-grid grid-cols-2 md:grid-cols-4">
        {[
          { label: "Частотний діапазон", value: "1 Гц – 4.4 ГГц" },
          { label: "Роздільна здатність (RBW)", value: "0.1 Гц – 250 кГц" },
          { label: "Динамічний діапазон", value: "-151 дБм до +10 дБм" },
          { label: "Точність амплітуди", value: "±1.5 дБ (типова)" },
        ].map((stat, i) => (
          <div key={i} className="high-density-item">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-[15px] font-mono font-bold text-brand-blue">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-10">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-brand-blue mb-2 uppercase tracking-tight">Технічні переваги</h2>
        <div className="w-12 h-1 bg-brand-orange" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Cpu className="w-6 h-6" />,
            title: "Широке покриття",
            desc: "Від 1 Гц до 4.4 ГГц, що охоплює аудіочастоти, стільникові та ISM діапазони."
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Висока чутливість",
            desc: "Рівень власних шумів до -151 дБм, ідеально для виявлення слабких сигналів."
          },
          {
            icon: <Download className="w-6 h-6" />,
            title: "Мобільність",
            desc: "Живлення від USB. Жодних зовнішніх блоків живлення, працюйте будь-де."
          }
        ].map((feature, i) => (
          <div key={i} className="p-6 border border-grey-border rounded bg-white hover:border-brand-blue/30 transition-colors">
            <div className="text-brand-orange mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SoftwareShowcase = () => (
  <section id="software" className="py-20 bg-grey-light border-y border-grey-border">
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-2 rounded border border-grey-border shadow-sm">
          <img 
            src="https://signalhound.com/wp-content/uploads/2018/03/Spike-Software-Screenshot.jpg" 
            alt="Spike Software" 
            className="w-full rounded"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-4">Програмне забезпечення <span className="text-brand-orange">Spike™</span></h2>
          <p className="text-slate-600 text-base mb-6 leading-relaxed">
            Кожен SA44B включає наше ПЗ Spike. Це повний набір інструментів для аналізу, включаючи спектральний аналіз у реальному часі та тестування на ЕМС.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Аналіз у реальному часі",
              "EMC pre-compliance",
              "Цифрова демодуляція",
              "Аналіз WLAN та Bluetooth",
              "Автоматизація через API"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-brand-blue text-white px-6 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-brand-blue/90 transition-all">
            Детальніше про Spike
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SpecificationsTable = () => (
  <section id="specs" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-10">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-2 uppercase tracking-tight">Повні специфікації</h2>
        <div className="w-12 h-1 bg-brand-orange" />
      </div>
      <div className="high-density-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { p: "Частотний діапазон", s: "1 Гц – 4.4 ГГц" },
          { p: "Роздільна здатність (RBW)", s: "0.1 Гц – 250 кГц" },
          { p: "Динамічний діапазон", s: "-151 дБм до +10 дБм" },
          { p: "Точність амплітуди", s: "±1.5 дБ (типова)" },
          { p: "Швидкість сканування", s: "Up to 700 MHz/s" },
          { p: "Інтерфейс", s: "USB 2.0 High Speed" },
          { p: "Вхідний опір", s: "50 Ом (SMA)" },
          { p: "Стабільність LO", s: "±1 ppm Stability" },
        ].map((row, i) => (
          <div key={i} className="high-density-item">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{row.p}</p>
            <p className="text-[14px] font-mono font-bold text-brand-blue">{row.s}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-16 bg-white border-t border-grey-border">
    <div className="max-w-7xl mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Вартість пристрою</span>
          <span className="text-4xl font-extrabold text-ink">$1,195.00</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-transparent border-2 border-brand-blue text-brand-blue px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-brand-blue/5 transition-colors">
            Завантажити Datasheet
          </button>
          <button className="bg-brand-orange text-white px-10 py-4 rounded font-bold text-base uppercase tracking-widest hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20">
            Замовити Signal Hound SA44B
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-grey-light text-slate-500 py-12 border-t border-grey-border">
    <div className="max-w-7xl mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="text-brand-blue">SIGNAL<span className="text-brand-orange">HOUND</span></span>
          <span className="text-slate-300">|</span>
          <span>© 2026 Всі права захищені</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-blue transition-colors">Специфікації</a>
          <a href="#" className="hover:text-brand-blue transition-colors">ПЗ</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Контакти</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20 
      }}
      className="fixed bottom-8 right-8 z-[100] pointer-events-none"
    >
      <button 
        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        className="pointer-events-auto bg-brand-orange text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-brand-orange/40 flex items-center gap-3 hover:scale-105 active:scale-95 transition-all group"
      >
        <Zap className="w-5 h-5 fill-current" />
        <span className="uppercase tracking-widest text-sm">Замовити зараз</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/20">
      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <Features />
        <SoftwareShowcase />
        <SpecificationsTable />
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
