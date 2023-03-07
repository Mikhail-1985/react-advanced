import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender';
import { Sidebar } from 'widgets/Sidebar';


describe('test sidebar', () => {
    test('render Sidebar', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('render collapsed', () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});