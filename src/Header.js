function Head( props ){
    console.log( props )
    return (
        <div>
            <h1>HEADER 영역<br></br>
                props.test : {props.test}<br></br>
                props.number : {props.number}
            </h1>
        </div>
    )
}

export default Head