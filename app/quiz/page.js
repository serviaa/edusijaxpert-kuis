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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 border-2 border-pink-300">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-8 text-center drop-shadow-lg">💖 Kuis Matematika Dasar</h1>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg text-pink-700 font-medium">Soal {currentQuestion + 1} dari {questions.length}</span>
          <span className="text-lg text-pink-600 font-bold">Skor: {score}</span>
        </div>
        <div className="w-full bg-pink-100 h-2 rounded mb-8">
          <div
            className="bg-pink-400 h-2 rounded transition-all duration-300"
            style={{ width: `${((currentQuestion + (showScore ? 1 : 0)) / questions.length) * 100}%` }}
          ></div>
        </div>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">Kuis Selesai! 🎉</h2>
            <div className="bg-pink-50 p-8 rounded-xl mb-6 border border-pink-200">
              <p className="text-4xl font-extrabold text-pink-600 mb-2">{score}/{questions.length}</p>
              <p className="text-pink-700 text-lg">
                Skor Anda: {Math.round((score / questions.length) * 100)}%
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="w-full bg-pink-500 text-white px-4 py-3 rounded-lg hover:bg-pink-600 transition-colors mb-3 font-bold shadow"
            >
              🔄 Ulangi Kuis
            </button>
            <Link href="/" legacyBehavior>
              <a className="block w-full bg-pink-300 text-white px-4 py-3 rounded-lg hover:bg-pink-400 transition-colors font-bold shadow">
                ⬅️ Kembali ke Home
              </a>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-pink-700 mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`block p-4 border-2 rounded-xl cursor-pointer transition-all font-medium text-lg ${
                      selectedAnswer === option
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-pink-200 hover:border-pink-300'
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
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 ${
                        selectedAnswer === option
                          ? 'border-pink-500 bg-pink-500'
                          : 'border-pink-300'
                      }`}>
                        {selectedAnswer === option && (
                          <div className="w-3 h-3 rounded-full bg-white m-1"></div>
                        )}
                      </div>
                      <span className="text-pink-700">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            {!showExplanation ? (
              <button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-colors text-lg shadow ${
                  selectedAnswer
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-pink-200 text-pink-400 cursor-not-allowed'
                }`}
              >
                Jawab
              </button>
            ) : (
              <div className="mt-8 text-center">
                <div className={`text-xl font-bold mb-3 ${
                  selectedAnswer === questions[currentQuestion].correct
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}>
                  {selectedAnswer === questions[currentQuestion].correct ? 'Benar! 🎉' : 'Salah!'}
                </div>
                <div className="text-pink-700 mb-6 text-lg">
                  {questions[currentQuestion].explanation}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 transition-colors font-bold shadow"
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