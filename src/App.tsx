import { Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy"
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (<>
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy />} />
                    <Route path={'/about'} element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    </>)
}