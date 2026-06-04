// ─────────────────────────────────────────────────────────────────────────────
// ЗАГЛУШКА приёма заявок.
//
// Сайт статический (GitHub Pages), своего сервера нет. Чтобы заявки реально
// доходили до Дмитрия, нужно подключить внешний приёмник (Telegram-бот,
// Formspree, EmailJS, Google Apps Script и т.п.) и вписать его URL в LEAD_ENDPOINT.
//
// Пока LEAD_ENDPOINT пустой:
//   • форма проигрывает обычный сценарий (загрузка → «успех») для демонстрации;
//   • payload пишется в консоль браузера;
//   • НИКУДА не отправляется — реальные заявки потеряются.
//
// Когда появится endpoint — впиши его ниже, остальной код менять не нужно.
// ─────────────────────────────────────────────────────────────────────────────

export const LEAD_ENDPOINT = ''; // TODO: вставить реальный URL приёма заявок

export interface LeadData {
  formIdentifier: string;
  payload: Record<string, unknown>;
}

export async function submitLead(data: LeadData): Promise<void> {
  if (!LEAD_ENDPOINT) {
    console.warn('[submitLead] LEAD_ENDPOINT не задан — заявка НЕ отправлена:', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }

  const response = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}
