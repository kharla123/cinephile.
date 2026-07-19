import { useNavigate } from 'react-router-dom'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=900&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&h=900&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1400&h=900&fit=crop&auto=format',
]

const STATS = [
  { value: '20+', label: 'Películas curadas' },
  { value: '5', label: 'Directores aclamados' },
  { value: '12', label: 'Actores destacados' },
]

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Full-bleed hero */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={HERO_IMAGES[0]}
          alt="Cinema"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0f]/40 via-[#0c0b0f]/60 to-[#0c0b0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0f]/60 via-transparent to-transparent" />

        <div className="relative h-full flex flex-col justify-end pb-24 px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-[#c8954a] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Para los que aman el cine de verdad
            </p>
            <h1
              className="text-5xl md:text-7xl font-light text-[#ede9e1] leading-[1.05] mb-8"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Descubre el cine
              <br />
              <em className="italic text-[#c8954a]">que te transforma.</em>
            </h1>
            <p className="text-[#8e8799] text-lg leading-relaxed mb-10 max-w-lg">
              Explora películas, consulta fichas detalladas de actores y directores,
              y construye tu lista de favoritas. Todo en un espacio diseñado para cinéfilos.
            </p>
            <button
              onClick={() => navigate('/explore')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c8954a] text-[#0c0b0f] text-sm font-semibold tracking-wide uppercase hover:bg-[#d4a45a] transition-colors"
            >
              Explorar películas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="bg-[#16141c] border-t border-[#2c2636]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-4xl font-light text-[#c8954a] mb-1"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {value}
              </p>
              <p className="text-[#8e8799] text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2
          className="text-3xl font-light text-[#ede9e1] mb-16 text-center"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Todo lo que necesita un cinéfilo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2c2636]">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
              title: 'Busca y filtra',
              desc: 'Encuentra películas por título, género, puntuación o tendencia. Con scroll infinito para no perder el hilo.',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              ),
              title: 'Fichas completas',
              desc: 'Sinopsis, reparto, director, fecha de estreno y tráiler. Navega entre películas, actores y directores de forma fluida.',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
              title: 'Tu lista de favoritas',
              desc: 'Guarda las películas que te interesan y gestiona tu lista personal desde cualquier dispositivo.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#0c0b0f] p-10 flex flex-col gap-4">
              <span className="text-[#c8954a]">{icon}</span>
              <h3
                className="text-[#ede9e1] text-xl font-medium"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {title}
              </h3>
              <p className="text-[#8e8799] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-[#2c2636] py-20 text-center">
        <p
          className="text-2xl text-[#8e8799] font-light mb-8 italic"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          "El cine es un espejo que refleja lo que no queremos ver."
        </p>
        <button
          onClick={() => navigate('/explore')}
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#c8954a] text-[#c8954a] text-sm font-semibold tracking-wide uppercase hover:bg-[#c8954a] hover:text-[#0c0b0f] transition-colors"
        >
          Empezar a explorar
        </button>
      </div>
    </div>
  )
}
