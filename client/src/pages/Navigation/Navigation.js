import { useState } from "react";
import Header from "../../components/Header/Header";
import style from '../Navigation/style.module.scss'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from "../../services/course";

function Navigation() {
    const [createCourse] = useCreateCourseMutation()
    const [updateCourse] = useUpdateCourseMutation()
    const [deleteCourse] = useDeleteCourseMutation()
    const [activeBtn, setActiveBtn] = useState('')
    const [data, setData] = useState([{
        titleRu: '',
        placeholder: 'Выберите кнопку из предложенных выше'
    }])
    const [inp, setInp] = useState({
        id: '',
        title: '',
        info: '',
        city: ''
    })

    function changeLayoutInputs(e) {
        if (e.target.textContent == 'Создание') {
            setData([{
                titleRu: 'Курс',
                placeholder: 'Введите название курса',
                titleEn: 'title'
            }, {
                titleRu: 'Описание',
                placeholder: 'Введите описание курса',
                titleEn: 'info'
            }, {
                titleRu: 'Город',
                placeholder: 'Введите город',
                titleEn: 'city'
            }])
            setActiveBtn(e.target.textContent)
        } else if (e.target.textContent == 'Обновление') {
            setData([{
                titleRu: 'ID',
                placeholder: 'Введите ID курса',
                titleEn: 'id'
            }, {
                titleRu: 'Курс',
                placeholder: 'Введите название курса',
                titleEn: 'title'
            }, {
                titleRu: 'Описание',
                placeholder: 'Введите описание курса',
                titleEn: 'info'
            }, {
                titleRu: 'Город',
                placeholder: 'Введите город',
                titleEn: 'city'
            }])
            setActiveBtn(e.target.textContent)
        } else if (e.target.textContent) {
            setData([{
                titleRu: 'ID',
                placeholder: 'Введите ID курса',
                titleEn: 'id'
            }])
            setActiveBtn(e.target.textContent)
        }
    }

    function changeStateInp(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    async function sendRequest() {
        switch (activeBtn) {
            case 'Создание':
                const result = await createCourse(inp)
                console.log(result);
                break;
            case 'Обновление':
                const result2 = await updateCourse(inp)
                console.log(result2);
                break;
            case 'Удаление':
                const result3 = await deleteCourse(inp);
                console.log(result3);
                break;
            default:
                break;
        }
    }

    return (
        <div className={style.wrapper}>
            <Header></Header>
            <div className={style.item}>
                <div className={style.name}>
                    <h3 onClick={changeLayoutInputs}>Создание</h3>
                    <h3 onClick={changeLayoutInputs}>Обновление</h3>
                    <h3 onClick={changeLayoutInputs}>Удаление</h3>
                </div>

                {data.map((el) =>
                    <div className={style.course}>
                        <p>{el.titleRu}</p>
                        <Input name={el.titleEn} onChange={changeStateInp} placeholder={el.placeholder} />
                    </div>
                )}

                < Button onClick={sendRequest} fullWidth>Применить</Button>
            </div>
        </div >
    );
}

export default Navigation;