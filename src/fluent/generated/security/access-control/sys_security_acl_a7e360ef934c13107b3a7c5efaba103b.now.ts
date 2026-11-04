import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a7e360ef934c13107b3a7c5efaba103b'],
    description:
        'Allow read for records in x_2223823_apollo_0_wards, for users with role x_2223823_apollo_0.wards_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2223823_apollo_0.wards_user'],
    table: 'x_2223823_apollo_0_wards',
})
