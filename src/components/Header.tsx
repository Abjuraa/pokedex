import style from './header.module.css'
type HeaderProps = {
    query: string
    setQuery: (query: string) => void
};

const Header = ({query, setQuery}: HeaderProps) => {
    return (
        <header className={style.header}>
            <input className={style.input} type="text" placeholder='Search a Pokemon' value={query} 
            onChange={(event) => setQuery(event.target.value)}/>
        </header>
    )
}

export default Header

