function Site({a_tag}){
    return(<>
        <nav>
            <ul>{a_tag.map( (item, index)=> (
                <li key = {index}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                        {item.txt}
                    </a>
                </li>
            ))}</ul>
        </nav>
    </>)
}
export default Site;