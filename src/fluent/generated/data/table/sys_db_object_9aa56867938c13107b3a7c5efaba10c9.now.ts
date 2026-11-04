import { Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_admission = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowConfiguration: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    autoNumber: {
        number: 0,
        numberOfDigits: 5,
        prefix: 'ADM',
    },
    extends: 'task',
    label: 'Admission',
    name: 'x_2223823_apollo_0_admission',
    schema: {},
    createAccessControls: true,
})
