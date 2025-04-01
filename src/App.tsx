import './styles/pages/App.scss'
import LearnMore from "./components/LearnMore.tsx";


export default function App() {
    return (
        <>
            <div className='welcome'>
                Добро пожаловать на наш сайт!
            </div>
            <div className='flex justify-center'>
                <LearnMore />
            </div>
            <div className='small-text'>
                <p>Вы можете получить более подробную информацию о функционале нашего сайта перейдя по кнопке выше.</p>
            </div>
        </>
    )
}