import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
// import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {
    const [isAuth, setIsAuth] = useState(false);

    const { t } = useTranslation();
    const onToggleModal = useCallback(() => {
        setIsAuth(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuth} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur dolorem similique numquam culpa inventore, corporis laudantium
                    tenetur sint vitae facere quae exercitationem officia minima odit.
                    Magnam molestias tempore et eos?
            </Modal>
        </div>
    );
}
