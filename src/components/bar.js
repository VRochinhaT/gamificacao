const Bar = (props) => {
    const className = 'bar-'+(props.index + 1);

    return(
        <>
            <div class='side'>
            <span>{props.nome}</span>
            </div>

            <div class='middle'>
            <div class="bar-container">
                <div class={className} style={{width: props.valor+'%'}}></div>
            </div>
            </div>

            <div class="side right">
            <div>{props.valor}</div>
            </div>
        </>
    )
}

export default Bar