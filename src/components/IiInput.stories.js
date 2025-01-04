import { fn } from '@storybook/test'
import IiInput from './iiInput.vue'

export default {
    title: 'IiInput',
    component: IiInput,
    tags: ['autodocs']
}

export const Text = {
    args: {
        onchange: fn()
    }
}

export const Number = {
    args: {
        inputType: 'number',
        onchange: fn()
    }
}

export const Password = {
    args: {
        inputType: 'password',
        onchange: fn()
    }
}

export const Email = {
    args: {
        inputType: 'email',
        onchange: fn()
    }
}