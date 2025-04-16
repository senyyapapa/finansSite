import { Link } from "react-router";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            Финансовые калькуляторы
          </h2>
          <p className="text-gray-600 text-lg">
            Простые инструменты для расчета ваших финансов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link
            to="/calculate_credit"
            className="bg-white rounded-xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-blue-500 text-4xl mb-3">💰</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Кредитный калькулятор
            </h3>
            <p className="text-gray-600">
              Рассчитайте платежи и переплату по кредиту
            </p>
          </Link>

          <Link
            to="/calculate_deposition"
            className="bg-white rounded-xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-green-500 text-4xl mb-3">💵</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Депозитный калькулятор
            </h3>
            <p className="text-gray-600">Узнайте доход от ваших вкладов</p>
          </Link>

          <Link
            to="/calculate_investments"
            className="bg-white rounded-xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-amber-500 text-4xl mb-3">📈</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Инвестиционный калькулятор
            </h3>
            <p className="text-gray-600">Планируйте свои инвестиции с умом</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
