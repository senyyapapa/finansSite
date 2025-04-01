import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CreditCalculator from "./pages/CalculatePages/CreditCalculator.tsx";
import Header from "./components/Header.tsx";
import NotFounded from "./pages/404Page/NotFounded.tsx";
import DepositCalculator from "./pages/CalculatePages/DepositCalculator.tsx";
import InvestCalculator from "./pages/CalculatePages/InvestCalculator.tsx";
import LearnPage from "./pages/LearnMore.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Header />
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/calculate_credit' element={<CreditCalculator />}/>
                <Route path='/calculate_deposition' element={<DepositCalculator />}/>
                <Route path='/calculate_investments' element={<InvestCalculator />}/>
                <Route path='/learn_more' element={<LearnPage />}/>
                <Route path='*' element={<NotFounded />}/>
            </Routes>
        </StrictMode>
    </BrowserRouter>
)
