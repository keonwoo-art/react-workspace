function Child( props ) {
    console.log(props)
    const [a, b] = props.children
    return ( 
    <>
    a : {a}, b : {b} <br/>
    n : {props.n}<br/>
    n : {props.children}<br/>
    child
    </>)
}

export default Child