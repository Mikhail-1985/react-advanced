import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
// import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
}
