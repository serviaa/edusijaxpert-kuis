export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Selamat Datang di Kuis EduSijaXpert</h1>
      <p>Silakan mulai kuis dengan menuju ke halaman /quiz</p>
      <a href="/quiz">
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>Mulai Kuis</button>
      </a>
    </div>
  );
}
