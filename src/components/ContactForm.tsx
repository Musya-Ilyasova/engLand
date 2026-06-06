import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, User, Phone, Clock, BookOpen, Target, MessageSquare } from 'lucide-react';
import { submitLead } from '../lib/submitLead';
import { Variants } from 'framer-motion';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    preferredTime: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitLead({
        formIdentifier: 'trial-lesson-form',
        payload: formData,
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="w-full px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-blue-900 text-white py-16 px-6 sm:px-12 rounded-2xl max-w-4xl mx-auto my-20 shadow-2xl flex flex-col space-y-10 border border-blue-700 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Запишитесь на бесплатный пробный урок
          </motion.h2>
          <motion.p variants={itemVariants} className="text-blue-200 text-lg leading-relaxed">
            Сделаем первый шаг к уверенному английскому — без обязательств и «разогрева».
          </motion.p>
        </div>

        <div className="relative z-10 grid md:grid-cols-5 gap-12 items-start">

          {/* Info Section */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-blue-700/50 pb-4">
                Что будет на уроке?
              </h3>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center border border-blue-700/50">
                  <MessageSquare className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Знакомство и обсуждение целей</h4>
                  <p className="text-sm text-blue-200/80 mt-1">Обсудим ваши цели, прошлый опыт и выявим основные трудности.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center border border-blue-700/50">
                  <Target className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Диагностика уровня</h4>
                  <p className="text-sm text-blue-200/80 mt-1">Точная оценка без стресса, чтобы подобрать правильный вектор работы.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center border border-blue-700/50">
                  <BookOpen className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Разбор одной грамматической структуры с практикой</h4>
                  <p className="text-sm text-blue-200/80 mt-1">Возьмём одну конструкцию и разберём её логику до полного понимания — сразу с практикой.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <div className="md:col-span-3 bg-blue-950/40 p-6 sm:p-8 rounded-xl border border-blue-800/50 backdrop-blur-sm shadow-inner">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
                  <p className="text-blue-200">
                    Спасибо за интерес. Я свяжусь с вами в указанное время, чтобы согласовать дату нашего первого занятия.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <motion.div variants={itemVariants} className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-blue-200 ml-1">
                      Ваше имя
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-blue-400/70" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-blue-900/50 border border-blue-700/50 text-white placeholder:text-blue-300/40 rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Александр"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-1.5">
                    <label htmlFor="contact" className="text-sm font-medium text-blue-200 ml-1">
                      Контакт (Telegram или телефон)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-blue-400/70" />
                      </div>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full bg-blue-900/50 border border-blue-700/50 text-white placeholder:text-blue-300/40 rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="@username или +7 (999) 000-00-00"
                      />
                    </div>
                    <p className="text-xs text-blue-300/60 ml-1">Укажите Telegram — быстрее</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-1.5">
                    <label htmlFor="preferredTime" className="text-sm font-medium text-blue-200 ml-1">
                      Удобное время для связи
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-blue-400/70" />
                      </div>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-blue-900/50 border border-blue-700/50 text-white placeholder:text-blue-300/40 rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Например: «будни вечером», «выходные утром»"
                      />
                    </div>
                  </motion.div>

                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
                      Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.
                    </motion.p>
                  )}

                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Отправка...</span>
                        </>
                      ) : (
                        <>
                          <span>Записаться на урок</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-blue-300/60 mt-4">
                      Нажимая, вы соглашаетесь с обработкой персональных данных. Мы не спамим.
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
