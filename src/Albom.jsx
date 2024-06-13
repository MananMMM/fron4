export const Albom=({name,year,children})=>{
return <div className="Albom">
    <h3>{name}</h3>
    <p>Released in {year}</p>
    {children}
</div>
}