import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Loader2, CalendarDays, BookOpen, GraduationCap, Clock } from 'lucide-react';

const PROJECT_ID = 'aca44d9e-a73f-4c91-8964-7d287e895910';

interface Plan {
  id: string;
  name: string;
  lessons: number;
  price: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    id: 'plan-4',
    name: 'Старт',
    lessons: 4,
    price: '8 000 ₽',
    description: 'Идеально для поддержания уровня или плавного старта.',
    features: [
      '4 индивидуальных урока (60 мин)',
      'Адаптация материалов под ваши цели',
      'Проверка домашних заданий',
      'Разбор базовой грамматики',
    ],
  },
  {
    id: 'plan-8',
    name: 'Оптимум',
    lessons: 8,
    price: '15 000 ₽',
    description: 'Рекомендуемый темп для заметного прогресса (2 раза в неделю).',
    isPopular: true,
    features: [
      '8 индивидуальных уроков (60 мин)',
      'Работа по учебникам Cambridge/Oxford',
      'Углубленный разбор грамматики',
      'Заучивание ключевых структур',
      'Постоянная обратная связь',
    ],
  },
  {
    id: 'plan-12',
    name: 'Интенсив',
    lessons: 12,
    price: '21 000 ₽',
    description: 'Для тех, кому нужен быстрый результат и глубокое погружение.',
    features: [
      '12 индивидуальных уроков (60 мин)',
      'Интенсивная проработка всех навыков',
      'Сложные грамматические темы',
      'Преодоление языкового барьера',
      'Приоритет в выборе расписания',
    ],
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleOpenModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setIsSuccess(false);
    setError('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPlan(null);
      setFormData({ name: '', contact: '', preferredTime: '' });
      setIsSuccess(false);
    }, 300); // Wait for animation
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        ...formData,
        selectedPlan: selectedPlan?.name,
        lessonsCount: selectedPlan?.lessons,
      };

      const response = await fetch(
        `#`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formIdentifier: 'pricing-enrollment-form',
            payload,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка при отправке заявки');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь со мной напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-100 py-20 px-6 flex flex-col items-center space-y-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl text-center z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Прозрачные условия обучения
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Системный подход требует регулярности. Выберите комфортный для вас темп занятий.
            Никаких скрытых платежей, только честная работа на результат.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200/60"
        >
          <div className="bg-blue-100 p-2 rounded-full text-blue-700">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Важное правило</p>
            <p className="text-slate-700 font-medium">
              Срок действия любого абонемента — <span className="text-blue-700 font-bold">35 дней</span> с момента первого занятия.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex flex-col bg-white rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-1 ${
              plan.isPopular
                ? 'border-2 border-blue-600 shadow-blue-900/10 scale-105 md:scale-110 z-10'
                : 'border border-slate-200 shadow-slate-900/5 mt-0 md:mt-6'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                Рекомендуемый
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-slate-500 mt-2 min-h-12 text-sm">{plan.description}</p>
            </div>

            <div className="mb-6 flex items-baseline text-slate-900">
              <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
            </div>

            <div className="flex items-center gap-2 mb-8 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <BookOpen className="w-5 h-5 text-slate-400" />
              <span className="font-medium text-slate-700">{plan.lessons} уроков</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleOpenModal(plan)}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Выбрать абонемент
            </button>
          </motion.div>
        ))}
      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                {isSuccess ? (
                  <div className="text-center py-8 space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Заявка принята!</h3>
                    <p className="text-slate-600 text-lg">
                      Спасибо за выбор абонемента «{selectedPlan?.name}». Я свяжусь с вами в ближайшее время для уточнения деталей и расписания.
                    </p>
                    <button
                      onClick={handleCloseModal}
                      className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Закрыть
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Оформление абонемента</h3>
                      <p className="text-slate-600">
                        Вы выбрали <span className="font-semibold text-blue-700">«{selectedPlan?.name}»</span> ({selectedPlan?.lessons} уроков). Оставьте контакты, и мы согласуем расписание.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="Иван Иванов"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-slate-700 mb-1">
                          Телефон / Telegram / WhatsApp
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          required
                          value={formData.contact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="+7 (999) 000-00-00 или @username"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-1">
                          Удобное время для занятий (примерно)
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="Будни вечером, выходные утром..."
                          />
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Отправка...
                          </>
                        ) : (
                          'Записаться'
                        )}
                      </button>
                      <p className="text-xs text-center text-slate-500 mt-4">
                        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
