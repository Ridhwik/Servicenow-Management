import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d3e524a7938c13107b3a7c5efaba1094'],
    description:
        'Allow read for records in x_2223823_apollo_0_admission, for users with role x_2223823_apollo_0.admission_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2223823_apollo_0.admission_user'],
    table: 'x_2223823_apollo_0_admission',
})
