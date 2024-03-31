import style from '../Header/style.module.scss';
import { Link } from 'react-router-dom'

function Header() {
    return (<div className={style.wrapper}>
        <div className={style.item}>
            <h1>CoursesRUD.</h1>
            <div className={style.admin}>
                <p className={style.headerAdmin}><Link to={'/nav'}>Администрирование</Link></p>
                <p className={style.headerWitch}><Link to={'/'}>Просмотр</Link></p>
            </div>
        </div>
    </div>);
}

export default Header;