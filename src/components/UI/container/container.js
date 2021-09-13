import '../CSS/main.css'
const Container =(props)=>{
    const classes =' container ' + props.className;
return(
    <section className={classes}>
        {props.children}
    </section>
);
}

export default Container;