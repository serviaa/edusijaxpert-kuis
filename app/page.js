export default function HomePage() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)',
        minHeight: '100vh',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(60, 60, 120, 0.15)',
      }}
    >
      <h1 style={{
        fontSize: '2.5rem',
        color: '#3b82f6',
        marginBottom: '20px',
        fontWeight: 'bold',
        letterSpacing: '2px',
      }}>
        Selamat Datang di Kuis EduSijaXpert
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#374151',
        marginBottom: '30px',
      }}>
        Uji kemampuan matematika dasar Anda.<br />
        Klik tombol di bawah untuk memulai kuis!
      </p>
      <a href="/quiz" style={{ textDecoration: 'none' }}>
        <button
          style={{
            marginTop: '20px',
            padding: '14px 32px',
            fontSize: '1.1rem',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(59, 130, 246, 0.15)',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
        >
          🚀 Mulai Kuis
        </button>
      </a>
    </div>
  );
}