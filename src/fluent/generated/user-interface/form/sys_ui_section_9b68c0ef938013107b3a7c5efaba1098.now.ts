import { default_view, Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9b68c0ef938013107b3a7c5efaba1098'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_2223823_apollo_0_doctor',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['2768c0ef938013107b3a7c5efaba10fb'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '9b68c0ef938013107b3a7c5efaba1098',
    },
})
Record({
    $id: Now.ID['94aa40a793c013107b3a7c5efaba1030'],
    table: 'sys_ui_element',
    data: {
        element: 'user',
        position: 1,
        sys_ui_section: '9b68c0ef938013107b3a7c5efaba1098',
    },
})
