'use client';

export default function QuizPage() {
  const cekJawaban = async () => {
    const res = await fetch('/api/cekjawaban?angka=3');
    const data = await res.text();
    alert(data); // Akan menampilkan "Benar!" atau "Salah!" dari API
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Kuis Matematika Dasar</h1>
      <p>1 + 2 = ?</p>
      <button onClick={cekJawaban} style={{ padding: '10px 20px' }}>Jawaban 3</button>
    </div>
  );
}
