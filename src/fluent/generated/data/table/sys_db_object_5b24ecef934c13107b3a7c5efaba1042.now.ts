import { Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_bed_reservations = Table({
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
    label: 'Bed Reservations',
    name: 'x_2223823_apollo_0_bed_reservations',
    schema: {},
    createAccessControls: true,
})
