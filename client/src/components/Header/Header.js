import style from '../Header/style.module.scss';

function Header() {
    return (<div className={style.wrapper}>
        <h1>CoursesRUD.</h1>
        <div className={style.admin}>
            <p className={style.headerAdmin}>Администрирование</p>
            <p className={style.headerWitch}>Просмотр</p>
        </div>
    </div>);
}

export default Header;