import Header from "../../components/Header/Header";
import style from '../Navigation/style.module.scss'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';

function Navigation() {
    return (
        <div className={style.wrapper}>
            <Header></Header>

            <div className={style.name}>
                <h3>Создание</h3>
                <h3>Обновление</h3>
                <h3>Удаление</h3>
            </div>

            <div className={style.course}>
                <p>курс</p>
                <Input placeholder="Введите название курса" />
            </div>
            <div className={style.course2}>
                <p>описание</p>
                <Input placeholder="Введите описание курса" />
            </div>

            <Button fullWidth>Применить</Button>
        </div>
    );
}

export default Navigation;