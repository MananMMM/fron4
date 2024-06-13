import Song from './Song.jsx'
export const Songlist=({items,onDelete,onMove})=>{
    return <div className="Songlist">
        <h3>Songlist</h3>
        {
            items.map(elm=> <Song key={elm.id} {...elm} onDelete={onDelete} onMove={onMove}/>)
        }
        
    </div>
}