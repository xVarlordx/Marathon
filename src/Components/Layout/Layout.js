import classes from './Layout.module.css'

const Layout = (props) => {
    const descFull = classes.desc + ' ' + classes.full;
    const styleRoot = (props.urlBg && {backgroundImage: `url(${props.urlBg})`}) || (props.colorBg && {backgroundColor: props.colorBg}) || {};

        return (
            <section className={classes.root} style={styleRoot}>
                <div className={classes.wrapper}>
                    <article>
                        <div className={classes.title}>
                            {props.title && <h3>{props.title}</h3>}
                            <span className={classes.separator} />
                        </div>
                        <div className={descFull}>
                            {props.children}
                        </div>
                    </article>
                </div>
            </section>
    );
}

export default Layout;