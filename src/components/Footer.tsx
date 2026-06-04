import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Send, Mail, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 text-center text-sm border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-slate-800/20 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center gap-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Brand & Mission */}
        <motion.div variants={itemVariants} className="flex flex-col items-center max-w-md">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 shadow-inner">
            <GraduationCap className="w-6 h-6 text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold text-slate-200 mb-2 tracking-wide">
            Английский для взрослых
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Системный подход. Понимание структуры. Грамотная речь — без пустых обещаний.
          </p>
          <p className="text-slate-500 leading-relaxed mt-4">
            Дмитрий — преподаватель с 20+ годами опыта. Работаю только со взрослыми от 18 лет.
          </p>
        </motion.div>

        {/* Contacts */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {/* TODO: заменить href на реальную ссылку Telegram Дмитрия (https://t.me/username) */}
          <a
            href="#"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-600 transition-colors">
              <Send className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
            </div>
            <span>Telegram</span>
          </a>
          <a
            href="mailto:crystal-english@yandex.ru"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-600 transition-colors">
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
            </div>
            <span>crystal-english@yandex.ru</span>
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="w-24 h-px bg-slate-800" />

        {/* Copyright */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 text-slate-600">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <p>© 2026 Дмитрий — частный преподаватель английского языка.</p>
          </div>
          <p>Все права защищены.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
