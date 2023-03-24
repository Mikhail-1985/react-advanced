import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
// import { Modal } from 'shared/ui/Modal/Modal';
// import { Button } from 'shared/ui/Button/Button';
// import { ButtonTheme } from '../shared/ui/Button/Button';

export const App = () => {

    const { theme } = useTheme();

    // useEffect(() => {
    //     if(Math.random() < 0.5){
    //         throw new Error();
    //     }
    // }, []);
    return (<>
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    </>);
};