import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1844e823938c13107b3a7c5efaba1064'],
    description:
        'Allow write for records in x_2223823_apollo_0_bed_reservations, for users with role x_2223823_apollo_0.bed_reservations_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_2223823_apollo_0.bed_reservations_user'],
    table: 'x_2223823_apollo_0_bed_reservations',
})
