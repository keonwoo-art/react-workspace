function Nav(props){
    console.log(props)
    const {name} = props
    const {name : n } = props
    const {name : a, addr} = props
    return(
        <div>
            <ul>
                <li><a href = "https://www.naver.com" target="blank">{name}</a></li>
                <li><a href = "www.naver.com">{n}</a></li>
                <li><a href = "www.naver.com">{addr}</a></li>
            </ul>
        </div>
    )

}

export default Nav;