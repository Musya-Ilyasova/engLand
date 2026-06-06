import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/submitLead';
import { Variants } from 'framer-motion';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitLead({
        formIdentifier: 'hero-trial-lesson',
        payload: formData,
      });

      setIsSuccess(true);
    } catch (err) {
      setError('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-slate-900 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-20 lg:py-32 bg-linear-to-br from-slate-900 via-slate-800 to-blue-950 relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Говорите по-английски <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">
              грамотно и уверенно
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Системный подход без навязчивых обещаний — только проверенные методы и реальный прогресс.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div variants={itemVariants} className="w-full max-w-md mt-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">

            {/* Form Inner Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent pointer-events-none" />

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-slate-300">
                  Спасибо за интерес. Я свяжусь с вами в ближайшее время для согласования времени бесплатного пробного урока.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    Бесплатный пробный урок
                  </h3>
                  <p className="text-sm text-slate-400">
                    Познакомимся, определим уровень и разберём одну грамматическую тему.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-500"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-1">Телефон или Email</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-500"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-slate-300 mb-1">Удобное время для связи</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white appearance-none"
                      >
                        <option value="" disabled className="text-slate-500">Выберите время</option>
                        <option value="morning">Утро (09:00 - 12:00)</option>
                        <option value="afternoon">День (12:00 - 18:00)</option>
                        <option value="evening">Вечер (18:00 - 21:00)</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm mt-2">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Записаться на урок
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
