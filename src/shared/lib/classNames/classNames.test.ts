import { classNames } from './classNames';

describe('ClassNames', () => {
    test('только первый параметр', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('первый параметр и добавочные классы', () => {
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe('someClass cls1 cls2');
    });

    test('с добавочными классами и модами где они true', () => {
        expect(classNames('someClass', { 'hovered': true, 'scrollable': true }, ['cls1', 'cls2'])).toBe('someClass cls1 cls2 hovered scrollable');
    });
    test('с добавочными классами и модами где один false', () => {
        expect(classNames('someClass', { 'hovered': false, 'scrollable': true }, ['cls1', 'cls2'])).toBe('someClass cls1 cls2 scrollable');
    });
    test('с добавочными классами и модами где один undefined', () => {
        expect(classNames('someClass', { 'hovered': true, 'scrollable': undefined }, ['cls1', 'cls2'])).toBe('someClass cls1 cls2 hovered');
    });
});