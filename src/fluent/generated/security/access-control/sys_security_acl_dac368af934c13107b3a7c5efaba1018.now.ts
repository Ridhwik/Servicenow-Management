import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['dac368af934c13107b3a7c5efaba1018'],
    description:
        'Allow create for records in x_2223823_apollo_0_rooms, for users with role x_2223823_apollo_0.rooms_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_2223823_apollo_0.rooms_user'],
    table: 'x_2223823_apollo_0_rooms',
})
