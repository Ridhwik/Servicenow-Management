import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['63e360ef934c13107b3a7c5efaba109c'],
    description:
        'Allow delete for records in x_2223823_apollo_0_wards, for users with role x_2223823_apollo_0.wards_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_2223823_apollo_0.wards_user'],
    table: 'x_2223823_apollo_0_wards',
})
