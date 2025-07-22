'use client'; 

export default function HomePage() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        background: 'linear-gradient(135deg, #f9a8d4 0%, #fdf2f8 100%)',
        minHeight: '100vh',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(240, 46, 170, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.7rem',
          color: '#ec4899',
          marginBottom: '24px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textShadow: '0 2px 8px #f9a8d4',
        }}
      >
        🎀 Selamat Datang di Kuis EduSijaXpert
      </h1>

      <p
        style={{
          fontSize: '1.3rem',
          color: '#be185d',
          marginBottom: '32px',
          background: 'rgba(255, 228, 242, 0.7)',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px #f9a8d4',
          display: 'inline-block',
        }}
      >
        Uji kemampuan matematika dasar Anda.
        <br />
        Klik tombol di bawah untuk memulai kuis!
      </p>

      <a href="/quiz" style={{ textDecoration: 'none' }}>
        <button
          style={{
            padding: '16px 36px',
            fontSize: '1.2rem',
            background: 'linear-gradient(90deg, #ec4899 0%, #f472b6 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(236, 72, 153, 0.15)',
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: '1px',
            transition: 'background 0.3s, transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          💖 Mulai Kuis
        </button>
      </a>
    </div>
  );
}
