import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Route, BookOpenCheck, Quote } from 'lucide-react';

const MethodologyData = [
  {
    id: 1,
    icon: BrainCircuit,
    title: 'Автоматизм через заучивание',
    description: 'Да, мы будем учить наизусть. Ключевые фразы, речевые паттерны и мини-диалоги. Это не слепая зубрежка, а единственный способ создать языковой автоматизм. В реальном разговоре у вас нет времени конструировать предложение с нуля — вы должны использовать готовые, грамматически верные блоки.',
  },
  {
    id: 2,
    icon: Route,
    title: 'Индивидуальный темп и снятие страхов',
    description: 'Кажется, что вы «всё забыли со школы»? Испытываете панику перед таблицей времен? Мы начнем с той точки, где вы находитесь сейчас. Мы будем двигаться с той скоростью, которая нужна именно вам для полного усвоения материала. Никакой гонки за программой — только глубокое понимание.',
  },
  {
    id: 3,
    icon: BookOpenCheck,
    title: 'Системность и аутентичность',
    description: 'Я не верю в методики «английский по сериалам за месяц без грамматики». Мы работаем по проверенным материалам издательств Cambridge и Oxford. Грамматика — это не враг, а логичный инструмент, который мы разбираем ясно и на живых примерах.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut'  as const },
  },
};

export default function ContentBlock() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="bg-white py-16 px-6 md:px-16 max-w-4xl mx-auto border-l-4 border-blue-800 shadow-xl rounded-r-2xl"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-blue-800 rounded-full" />
              <span className="text-blue-800 font-semibold tracking-wider uppercase text-sm">
                Методика работы
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Как мы превращаем знания в уверенную речь
            </h2>

            <div className="relative p-6 bg-slate-50 rounded-xl border border-slate-100 mb-8">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              <p className="text-lg text-slate-700 italic relative z-10">
                Я не обещаю вам «выучить язык без грамматики». Это маркетинговый миф.
                Свободная и грамотная речь строится на понимании структуры языка,
                а не на хаотичном наборе слов.
              </p>
            </div>
          </motion.div>

          <div className="space-y-10">
            {MethodologyData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 group"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
