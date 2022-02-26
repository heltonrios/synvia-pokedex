import '../styles/header.scss'

export function Header() {
  return (
    <header>
      <div className="title">
        <p>POKÉDEX</p>
        <input className="filter" type="text" placeholder="Buscar Pokémon" />
      </div>
    </header>
  )
}
