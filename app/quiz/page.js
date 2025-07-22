'use client';

import { useState } from 'react';

const questions = [
  { question: '1 + 2 = ?', answer: 3 },
  { question: '5 - 2 = ?', answer: 3 },
  { question: '2 x 2 = ?', answer: 4 },
  { question: '9 / 3 = ?', answer: 3 },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const cekJawaban = async (angka) => {
    const res = await fetch(`/api/cekjawaban?angka=${angka}&soal=${current}`);
    const data = await res.text();
    alert(data);

    if (data === 'Benar!') setScore(score + 1);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Kuis Matematika Dasar</h1>
      {showScore ? (
        <div>
          <h2>Skor Anda: {score} / {questions.length}</h2>
        </div>
      ) : (
        <>
          <p>{questions[current].question}</p>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => cekJawaban(num)}
              style={{ padding: '10px 20px', margin: '5px' }}
            >
              Jawaban {num}
            </button>
          ))}
        </>
      )}
    </div>
  );
}