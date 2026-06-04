import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, BookOpen, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const BentoGridFeatures = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Системный подход к языку. <br className="hidden md:block" />
            <span className="text-blue-600">Без иллюзий, с результатом.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Я не обещаю, что вы заговорите как носитель через месяц. Я предлагаю понятную структуру,
            глубокое понимание логики английского языка и методичную работу, которая неизбежно ведет к уверенности.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Grammar (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                <BrainCircuit size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Грамматика — ваш инструмент, а не враг
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Никакой «магии» и бессмысленной зубрежки правил. Мы разбираем структуры ясно, через живой контекст и реальные примеры. Вы поймете логику языка: почему в этой ситуации говорят именно так, а не иначе.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Понимание вместо заучивания',
                'Отработка в мини-диалогах',
                'Автоматизация полезных структур'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Experience (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-slate-900 rounded-4xl p-8 md:p-10 shadow-sm border border-slate-800 relative overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-linear-to-l from-blue-900/20 to-transparent pointer-events-none" />

            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 text-blue-400 border border-slate-700">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                20+ лет опыта и профильное образование
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Высшее лингвистическое образование и десятилетия практики. Я знаю типичные ошибки русскоговорящих студентов и владею методиками их эффективного преодоления.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Textbooks (Square) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 bg-white rounded-4xl p-8 shadow-sm border border-slate-200 group hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <BookOpen size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Проверенные материалы
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed grow">
              Работаем по аутентичным учебникам издательств Cambridge и Oxford. Материалы адаптируются строго под ваш текущий уровень и цели.
            </p>
          </motion.div>

          {/* Card 4: Adults Only (Square) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 bg-white rounded-4xl p-8 shadow-sm border border-slate-200 group hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Только для взрослых (18+)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed grow">
              Фокус на осознанном обучении. Мы обсуждаем темы, которые актуальны, интересны и полезны взрослым людям в реальной жизни и карьере.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGridFeatures;
