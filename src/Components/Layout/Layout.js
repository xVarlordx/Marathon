import classes from './Layout.module.css'
import cn from 'classnames'

const Layout = (props) => {
    const styleRoot = (props.urlBg && {backgroundImage: `url(${props.urlBg})`}) || (props.colorBg && {backgroundColor: props.colorBg}) || {};

        return (
            <section className={classes.root} style={styleRoot}>
                <div className={classes.wrapper}>
                    <article>
                        <div className={classes.title}>
                            {props.title && <h3>{props.title}</h3>}
                            <span className={classes.separator} />
                        </div>
                        <div className={cn(classes.desc, classes.full)}>
                            {props.children}
                        </div>
                    </article>
                </div>
            </section>
    );
}

export default Layout;