import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername/LoginModal/LoginModal';
// import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}
