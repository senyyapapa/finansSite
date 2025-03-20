import './About.scss'
import { github, images } from './images'
export default function AboutPage() {
    return (
        <>
            <div className="first-div">
                <div>
                    <p className='p'>На нашем сайте присутствует следующий функционал:</p>
                    <ul className='ul'>
                        <li>Калькулятор подсчета ежемесячной платы за кредит.</li>
                        <ol className='ol-credit'>
                            <li>Введите сумму кредита.</li>
                            <li>Введите годовую ставку.</li>
                            <li>Введите срок кредита.</li>
                        </ol>
                        <li>Калькулятор подсчета общей суммы депозита.</li>
                        <ol className='ol-deposit'>
                            <li>Введите сумму депозита.</li>
                            <li>Введите годовую ставку.</li>
                            <li>Введите срок депозита.</li>
                        </ol>
                        <li>Калькулятор подсчета общей прибыли с инвестиций.</li>
                        <ol id='ol-invest'>
                            <li>Введите сумму инвестиций.</li>
                            <li>Введите годовую ставку.</li>
                            <li>Введите срок инвестиций.</li>
                            <li>Тип капитализации.</li>
                        </ol>
                    </ul>
                </div>

                <div className='js'>
                    <button 
                    className='rounded-xs'
                    onClick={() => {
                        let name1 = prompt('Напишите ваше имя');
                        alert(`Вас зовут: ${name1}`);
                    }}
                    >
                        Нажми на меня
                    </button>
                </div>

                <div className='github'>
                    <p>
                        
                        <a href={github}><img className='inline-block align-middle items-center' src={images.github} width={18} />Ссылка на проект(GitHub)</a>
                    
                    </p>
                </div>
            </div>
            <div className='second-div'>
                <p>Используемые инструменты для сайта(версии - <a href='#table'>см.таблицу</a>):</p>
                <div>
                    <dl>
                        <dt>React</dt>
                            <dd>
                            React.js — это библиотека для языка программирования JavaScript с открытым исходным кодом 
                            для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, 
                            когда в ответ на изменение одного элемента меняется все остальное. 
                            </dd>
                        <dt>TypeScript</dt>
                            <dd>
                            TypeScript — это строго типизированный язык программирования, построенный на JavaScript.
                            Разработчики добавили в него дополнительные возможности, такие как статическая типизация, 
                            классы и модули, чтобы создавать более надежные и поддерживаемые программы.
                            TypeScript позволяет выявлять ошибки на этапе разработки, облегчает совместную работу в 
                            команде и улучшает производительность разработки в больших проектах. Он преобразуется в обычный 
                            JavaScript, поэтому код, написанный на TypeScript, может выполняться в любом современном браузере 
                            или окружении, поддерживающем JavaScript.
                            </dd>
                        <dt>Tailwind css</dt>
                            <dd>
                            Tailwind CSS — утилитный фреймворк, основанный на принципе Utility-First, 
                            который позволяет разработчикам быстро применять стили, используя предопределенные классы прямо в HTML        
                            </dd>   
                        <dt>Scss</dt>
                        <dd>
                        Scss - метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов
                        каскадных таблиц стилей. Включён в состав языка разметки Haml.         
                        </dd>     
                    </dl>
                </div>
                <div className='tables'>
                    <p>Версии библиотек/фреймворков/инструментов: </p>
                    <table id='table'>
                        <tr>
                            <th>Инструмент</th>
                            <th>Версия</th>
                        </tr>
                        <tr>
                            <td><img className='inline-block align-middle items-center' src={images.react} width={24}/>React</td>
                            <td>v. 19.0.0.</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>
                                <table>
                                    <tr>
                                        <td><img className='inline-block align-middle items-center' src={images.css} width={24}/>CSS</td>
                                        <td>v. 5.1</td>
                                    </tr>
                                    <tr>
                                        <td><img className='inline-block align-middle items-center' src={images.tailwind} width={24}/>Tailwind CSS</td>
                                        <td>v. 4.0.13</td>
                                    </tr>
                                    <tr>
                                        <td><img className='inline-block align-middle items-center' src={images.sass} width={24}/> SCSS</td>
                                        <td>v. 1.86.0</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={images.ts} width={24} className='inline-block align-middle items-center'/> TS
                            </td>
                            <td>v. ~5.7.2</td>
                        </tr>
                        <tr>
                            <td>
                            <img className='inline-block align-middle items-center' src={images.html} width={24}/> HTML 
                            </td>
                            <td>v. 5.2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}