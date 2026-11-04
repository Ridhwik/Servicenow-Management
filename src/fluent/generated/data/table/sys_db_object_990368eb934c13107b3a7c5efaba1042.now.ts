import { Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_hospital = Table({
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
    extends: 'cmn_location',
    label: [
        {
            label: 'Hospital',
            plural: 'Hospital s',
        },
    ],
    name: 'x_2223823_apollo_0_hospital',
    schema: {},
    createAccessControls: true,
})
