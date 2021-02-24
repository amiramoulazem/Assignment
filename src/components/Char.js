const Char = ({char,input,onClick}) => {
    const style = {
        display : "inline-block",
        padding : "16px" ,
        margin :  "16px" ,
        textAlign : "center" , 
        border : "1px solid black"

    }
    return (
        <div>
           
            <p style={style} onClick={onClick}>{char}</p>
        </div>
    )
}

export default Char
