import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid='sidebar-toggle'
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={toggleCollapsed}
                className={cls.collapseBtn}
                square
                size={ButtonSize.XL}
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.link}
                >
                    {collapsed ? <HomeIcon className={cls.icon}/> : t('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.link}
                >
                    {collapsed ? <AboutIcon className={cls.icon} /> : t('О сайте')}
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
};