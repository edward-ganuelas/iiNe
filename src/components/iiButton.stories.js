import { fn } from '@storybook/test';
import IiButton from './IiButton.vue'

export default {
    title: 'IiButton',
    component: IiButton,
    tags: ['autodocs']
}

export const Default = {
    args: {
        label: 'Test',
        ariaLabel: 'Button click',
        primary: true,
        onClick: fn()
    }
}

export const Secondary = {
    args: {
        label: 'Test',
        ariaLabel: 'Button click',
        primary: false,
        onClick: fn()
    }
}