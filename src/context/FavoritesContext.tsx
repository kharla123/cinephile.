import { createContext, useContext, useState, type ReactNode } from 'react'

type FavoritesContextValue = {
  favorites: string[]
  toggleFavorite: (id: string) => void
}

const initialValue: FavoritesContextValue = {
  favorites: [],
  toggleFavorite: () => {},
}

export const FavoritesContext = createContext<FavoritesContextValue>(initialValue)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])

  function toggleFavorite(id: string) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
