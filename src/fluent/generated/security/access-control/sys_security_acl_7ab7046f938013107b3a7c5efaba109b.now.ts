import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7ab7046f938013107b3a7c5efaba109b'],
    description:
        'Allow read for records in x_2223823_apollo_0_doctor, for users with role x_2223823_apollo_0.doctor_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2223823_apollo_0.doctor_user'],
    table: 'x_2223823_apollo_0_doctor',
})
