type PersonDetailPageProps = {
  role?: 'actor' | 'director'
}

export default function PersonDetailPage({ role }: PersonDetailPageProps) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold text-[#ede9e1]">Detalle de {role ?? 'persona'}</h1>
      <p className="text-[#8e8799] mt-4">Aquí irá la información sobre el actor o director seleccionado.</p>
    </main>
  )
}
