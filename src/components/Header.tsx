import {NavLink, useLocation} from "react-router";

export default function Header() {
    const location = useLocation();
    const calculateLoc = location.pathname.startsWith('/calculate');
    return(
        <>
            <div className="flex h-16 shadow-xl">
                <div className="flex h-full w-full items-center justify-center gap-4">
                    <NavLink to='/' className={location.pathname == '/' ? 'font-semibold border-b-2 text-lg border-black' : ''}>Главная</NavLink>
                    <div className="relative group">
                        <div className={calculateLoc ? 'font-bold border-b-2 border-black pb-0.5': ''}>Калькулятор</div>
                        <div className='absolute text-center top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 gap-4 invisible group-hover:visible'>
                            <NavLink to='/calculate_credit' className='block p-2 bg-gray-100'>Калькулятор кредитов</NavLink>
                            <NavLink to='/calculate_deposition' className='block p-2 bg-gray-100'>Калькулятор депозитов</NavLink>
                            <NavLink to='/calculate_investments' className='block p-2 bg-gray-100'>Калькулятор инвестиций</NavLink>
                        </div>
                    </div>
                    <NavLink to='/about' className={location.pathname == '/about' ? 'font-semibold border-b-2 text-lg border-black' : ''}>О сайте</NavLink>
                </div>
            </div>
        </>
    )
}