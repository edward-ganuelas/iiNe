import IiHeaders from './iiHeaders.vue'

export default {
    title: 'IiHeaders',
    component: IiHeaders,
    tags: ['autodocs']
}

export const Default = {
    args: {
        headingType: '1',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">Heading 1</IiHeaders>`
    })
}

export const H2 = {
    args: {
        headingType: '2',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">H2</IiHeaders>`
    })
}

export const H3 = {
    args: {
        headingType: '3',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">H3</IiHeaders>`
    })
}
export const H4 = {
    args: {
        headingType: '4',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">H4</IiHeaders>`
    })
}

export const H5 = {
    args: {
        headingType: '5',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">H5</IiHeaders>`
    })
}

export const H6 = {
    args: {
        headingType: '6',
    },
    render: (args) => ({
        components: { IiHeaders },
        setup() {
            return { args };
        },
        template: `<IiHeaders v-bind="args">H6</IiHeaders>`
    })
}
