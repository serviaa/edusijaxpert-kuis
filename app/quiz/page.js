'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: "Berapakah hasil dari 15 + 27?",
    options: ["40", "42", "44", "45"],
    correct: "42",
    explanation: "15 + 27 = 42. Penjumlahan sederhana."
  },
  {
    question: "Manakah yang merupakan bilangan prima?",
    options: ["15", "21", "23", "25"],
    correct: "23",
    explanation: "23 adalah bilangan prima karena hanya bisa dibagi 1 dan 23."
  },
  {
    question: "Hasil dari 8 × 7 adalah?",
    options: ["54", "56", "58", "60"],
    correct: "56",
    explanation: "8 × 7 = 56. Perkalian dasar."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      alert('Pilih jawaban terlebih dahulu!');
      return;
    }
    setShowExplanation(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedAnswer('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setShowExplanation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">🎓 Kuis Matematika Dasar</h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-gray-600">Soal {currentQuestion + 1} dari {questions.length}</span>
          <span className="text-lg text-indigo-700 font-semibold">Skor: {score}</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded mb-8">
          <div
            className="bg-indigo-500 h-2 rounded transition-all duration-300"
            style={{ width: `${((currentQuestion + (showScore ? 1 : 0)) / questions.length) * 100}%` }}
          ></div>
        </div>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Kuis Selesai! 🎉</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-3xl font-bold text-green-600 mb-2">{score}/{questions.length}</p>
              <p className="text-green-700">
                Skor Anda: {Math.round((score / questions.length) * 100)}%
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-3"
            >
              Ulangi Kuis
            </button>
        <Link href="/">
        <a className="block w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Kembali ke Home
        </a>
        </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedAnswer === option
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        selectedAnswer === option
                          ? 'border-indigo-500 bg-indigo-500'
                          : 'border-gray-400'
                      }`}>
                        {selectedAnswer === option && (
                          <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            {!showExplanation ? (
              <button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  selectedAnswer
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Jawab
              </button>
            ) : (
              <div className="mt-6 text-center">
                <div className={`text-lg font-bold mb-2 ${
                  selectedAnswer === questions[currentQuestion].correct
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {selectedAnswer === questions[currentQuestion].correct ? 'Benar!' : 'Salah!'}
                </div>
                <div className="text-gray-700 mb-4">
                  {questions[currentQuestion].explanation}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {currentQuestion === questions.length - 1 ? 'Lihat Skor' : 'Soal Berikutnya'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}