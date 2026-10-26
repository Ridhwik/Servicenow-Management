import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '2ab7046f938013107b3a7c5efaba1019': {
                        table: 'sys_app_application'
                        id: '2ab7046f938013107b3a7c5efaba1019'
                    }
                    '2eb7046f938013107b3a7c5efaba1027': {
                        table: 'sys_ui_application'
                        id: '2eb7046f938013107b3a7c5efaba1027'
                    }
                    '62b7046f938013107b3a7c5efaba102e': {
                        table: 'sys_ui_module'
                        id: '62b7046f938013107b3a7c5efaba102e'
                    }
                    '76b7046f938013107b3a7c5efaba1042': {
                        table: 'sys_security_acl'
                        id: '76b7046f938013107b3a7c5efaba1042'
                    }
                    '76b7046f938013107b3a7c5efaba10d8': {
                        table: 'sys_security_acl'
                        id: '76b7046f938013107b3a7c5efaba10d8'
                    }
                    '7ab7046f938013107b3a7c5efaba109b': {
                        table: 'sys_security_acl'
                        id: '7ab7046f938013107b3a7c5efaba109b'
                    }
                    b627042f938013107b3a7c5efaba1001: {
                        table: 'sys_app_application'
                        id: 'b627042f938013107b3a7c5efaba1001'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '86c40d9fdf204ddbbf2ac03b802a0713'
                    }
                    eeb7046f938013107b3a7c5efaba101e: {
                        table: 'sys_app_module'
                        id: 'eeb7046f938013107b3a7c5efaba101e'
                    }
                    f6b7046f938013107b3a7c5efaba10c6: {
                        table: 'sys_security_acl'
                        id: 'f6b7046f938013107b3a7c5efaba10c6'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f1adb9be403f4420b36cf03e2fa18d22'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '005ba4171be64d6d91429b60f6f1354b'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0658a82f938c13107b3a7c5efaba10a4'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '077b76693cd34d55b6254d3a4fadca91'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '093660e7938c13107b3a7c5efaba1097'
                        key: {
                            sys_security_acl: 'cd3660e7938c13107b3a7c5efaba1070'
                            sys_user_role: {
                                id: '703620e7938c13107b3a7c5efaba1090'
                                key: {
                                    name: 'x_2223823_apollo_0.patient_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '093660e7938c13107b3a7c5efaba10e7'
                        key: {
                            sys_security_acl: 'cd3660e7938c13107b3a7c5efaba10c0'
                            sys_user_role: {
                                id: '703620e7938c13107b3a7c5efaba1090'
                                key: {
                                    name: 'x_2223823_apollo_0.patient_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a00cc0886564c2e93d4e1e23d4b83ea'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'qualifications'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d108b6939194b17814eb2091e9b93b4'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0eb06b3037fa46989c37e3f2bacdb957'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f0d60f12def447ea51debb458ee2d18'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'qualifications'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1044e823938c13107b3a7c5efaba1072'
                        key: {
                            sys_security_acl: '1844e823938c13107b3a7c5efaba1064'
                            sys_user_role: {
                                id: '44446823938c13107b3a7c5efaba10e6'
                                key: {
                                    name: 'x_2223823_apollo_0.bed_reservations_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1044e823938c13107b3a7c5efaba10b5'
                        key: {
                            sys_security_acl: '5044e823938c13107b3a7c5efaba109b'
                            sys_user_role: {
                                id: '44446823938c13107b3a7c5efaba10e6'
                                key: {
                                    name: 'x_2223823_apollo_0.bed_reservations_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11ae58453e974ed1a8b6a636a39b8c84'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '163e5ec349524b12b499dcb171ab5053'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1710fe3492164514b795269285df761a'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c44a823938c13107b3a7c5efaba10ea'
                        key: {
                            sys_security_acl: '0444a823938c13107b3a7c5efaba10dd'
                            sys_user_role: {
                                id: '44446823938c13107b3a7c5efaba10e6'
                                key: {
                                    name: 'x_2223823_apollo_0.bed_reservations_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c8ad14cd28446c59c61c3262d4f2417'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_no'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1ec3a4af934c13107b3a7c5efaba1023'
                        key: {
                            name: 'x_2223823_apollo_0.rooms_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1fe564a7938c13107b3a7c5efaba105a'
                        key: {
                            sys_security_acl: '9be564a7938c13107b3a7c5efaba1040'
                            sys_user_role: {
                                id: '37df90a3934c13107b3a7c5efaba1076'
                                key: {
                                    name: 'x_2223823_apollo_0.admission_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21d07baac09540e183b28149c35aad1d'
                        key: {
                            name: 'x_2223823_apollo_0_beds'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '223badba830a4f2ab4cd6508814e8687'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '23e360ef934c13107b3a7c5efaba10b6'
                        key: {
                            sys_security_acl: '63e360ef934c13107b3a7c5efaba109c'
                            sys_user_role: {
                                id: '57e3a4af934c13107b3a7c5efaba1093'
                                key: {
                                    name: 'x_2223823_apollo_0.wards_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2768c0ef938013107b3a7c5efaba10fb'
                        key: {
                            sys_ui_section: {
                                id: '9b68c0ef938013107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_doctor'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2ab7c06f938013107b3a7c5efaba1025'
                        key: {
                            name: 'x_2223823_apollo_0.doctor_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2ec368af934c13107b3a7c5efaba10d2'
                        key: {
                            sys_security_acl: '6ec368af934c13107b3a7c5efaba10b8'
                            sys_user_role: {
                                id: '1ec3a4af934c13107b3a7c5efaba1023'
                                key: {
                                    name: 'x_2223823_apollo_0.rooms_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31b207fd96a847a597646db962a24747'
                        key: {
                            name: 'x_2223823_apollo_0_wards'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34166c2afcf34bde8dcf82582e2de988'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '37c123124656414a94a618a226bf2015'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_doctor'
                            col_name_string: 'ipd_visit_schedule'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '37df90a3934c13107b3a7c5efaba1076'
                        key: {
                            name: 'x_2223823_apollo_0.admission_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '380a1ad9c5424f61ae43682edc7c3734'
                        key: {
                            name: 'x_2223823_apollo_0_patient'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a14a8ef934c13107b3a7c5efaba10ea'
                        key: {
                            sys_security_acl: 'b214a8ef934c13107b3a7c5efaba10c4'
                            sys_user_role: {
                                id: '6614a8ef934c13107b3a7c5efaba1075'
                                key: {
                                    name: 'x_2223823_apollo_0.beds_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3ac4a8a3938c13107b3a7c5efaba10fd'
                        key: {
                            sys_ui_section: {
                                id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                                key: {
                                    name: 'x_2223823_apollo_0_qualification'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c0b69a8f6e74b29a88e6cae4b14b283'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'specialty'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ca4bf359874491b82c2bef6514cd1a7'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3dad802f93c013107b3a7c5efaba1034'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '413660e7938c13107b3a7c5efaba103b'
                        key: {
                            sys_security_acl: '4d3660e7938c13107b3a7c5efaba1020'
                            sys_user_role: {
                                id: '703620e7938c13107b3a7c5efaba1090'
                                key: {
                                    name: 'x_2223823_apollo_0.patient_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4188fc935a964bf1a7e5ae639ecfc8cb'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '44446823938c13107b3a7c5efaba10e6'
                        key: {
                            name: 'x_2223823_apollo_0.bed_reservations_user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44a0f5ebaf6246efbc4d9beccd298cb4'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44daf6e68efa4139862c2796b666537e'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_schedule'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '469360af934c13107b3a7c5efaba1001'
                        key: {
                            name: 'x_2223823_apollo_0_rooms'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48bfc37403ff44938ad03a9a4a5c41f2'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4a58a82f938c13107b3a7c5efaba10a3'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'hod'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4a67ec6b938c13107b3a7c5efaba1080'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b24b1077f1f495c821b2d8b9454fb16'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b536c2f934c13107b3a7c5efaba10ef'
                        key: {
                            sys_security_acl: '32536c2f934c13107b3a7c5efaba10db'
                            sys_user_role: {
                                id: 'b2536c2f934c13107b3a7c5efaba101e'
                                key: {
                                    name: 'x_2223823_apollo_0.hospital_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4e04e4ef934c13107b3a7c5efaba1012'
                        key: {
                            name: 'x_2223823_apollo_0_beds'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e4fece3849947ab8556267c7fa8fadd'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f964a260efb46e5916105f166ec632d'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55501b2f11694180b0fda2b4c14aa8c0'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'specialty'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '57e3a4af934c13107b3a7c5efaba1093'
                        key: {
                            name: 'x_2223823_apollo_0.wards_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '57e524a7938c13107b3a7c5efaba10ae'
                        key: {
                            sys_security_acl: 'd3e524a7938c13107b3a7c5efaba1094'
                            sys_user_role: {
                                id: '37df90a3934c13107b3a7c5efaba1076'
                                key: {
                                    name: 'x_2223823_apollo_0.admission_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58cbd84053d54e78822d2cda640b14c1'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5b24ecef934c13107b3a7c5efaba1042'
                        key: {
                            name: 'x_2223823_apollo_0_bed_reservations'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d5859351abb4ef3853f95e9e098ff69'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_duration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5df13b8d494c4cefa53bdc649d2c05ba'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_fee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5df464677e4747d68564d2abbd88b1a5'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_schedule'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5f4aca906d09411092a6933846cc9cfa'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_department'
                            col_name_string: 'hod'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '618fbe8abcaf451da8eeaa34a823d239'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'ipd_visit_schedule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '619cefdaff65425aa1c3eaa82c1fe93e'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'hospital'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '62c368af934c13107b3a7c5efaba103f'
                        key: {
                            sys_security_acl: 'dac368af934c13107b3a7c5efaba1018'
                            sys_user_role: {
                                id: '1ec3a4af934c13107b3a7c5efaba1023'
                                key: {
                                    name: 'x_2223823_apollo_0.rooms_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '635004eb5d4645c588a8297fbc028215'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '63c1422693c89b507b3a7c5efaba1060'
                        key: {
                            name: 'x_2223823_apollo_0.user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '63e360ef934c13107b3a7c5efaba1011'
                        key: {
                            sys_security_acl: '6be360ef934c13107b3a7c5efaba1003'
                            sys_user_role: {
                                id: '57e3a4af934c13107b3a7c5efaba1093'
                                key: {
                                    name: 'x_2223823_apollo_0.wards_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65bcf1754dc8480e92db7c63f5799782'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_duration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6614a8ef934c13107b3a7c5efaba1075'
                        key: {
                            name: 'x_2223823_apollo_0.beds_user'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6663242f934c13107b3a7c5efaba1092'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66fbd05adaa546a4a76d75b739819f6f'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '67e360ef934c13107b3a7c5efaba1055'
                        key: {
                            sys_security_acl: 'a7e360ef934c13107b3a7c5efaba103b'
                            sys_user_role: {
                                id: '57e3a4af934c13107b3a7c5efaba1093'
                                key: {
                                    name: 'x_2223823_apollo_0.wards_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6dad64c31ac94b5ea7e1a72116a4fa93'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e50157d55584662a05a5f1ce6358ef2'
                        key: {
                            name: 'x_2223823_apollo_0_wards'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '6f9f6656805f49c59f0e2a42f800b342'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_doctor'
                            col_name_string: 'user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '703620e7938c13107b3a7c5efaba1090'
                        key: {
                            name: 'x_2223823_apollo_0.patient_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74ae2d547cf04ecd92c2119f2b818057'
                        key: {
                            name: 'x_2223823_apollo_0_admission'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '771d0cbffe4242659682818a0b0e574a'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'primary_hospital'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '787b4224150f4851857fe08040d4726c'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79178533a3bb41689f3463f32e0053ee'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '792866385364433992988d0f0259ab6e'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7970cdc6fff842aba0daed988491a89f'
                        key: {
                            name: 'x_2223823_apollo_0_admission'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7a45ece3938c13107b3a7c5efaba1039'
                        key: {
                            name: 'x_2223823_apollo_0_patient'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7ab7046f938013107b3a7c5efaba10cd'
                        key: {
                            sys_security_acl: 'f6b7046f938013107b3a7c5efaba10c6'
                            sys_user_role: {
                                id: '2ab7c06f938013107b3a7c5efaba1025'
                                key: {
                                    name: 'x_2223823_apollo_0.doctor_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c6d8267641d4ab2ac2a5fdd15da6732'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7e4f8f6ad4844a2a8eaed02020f38317'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_department'
                            col_name_string: 'hospital'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8353ac2f934c13107b3a7c5efaba1054'
                        key: {
                            sys_security_acl: '8b53ac2f934c13107b3a7c5efaba1046'
                            sys_user_role: {
                                id: 'b2536c2f934c13107b3a7c5efaba101e'
                                key: {
                                    name: 'x_2223823_apollo_0.hospital_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '87790680881344f198378b7b8d92bfd4'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_doctor'
                            col_name_string: 'opd_schedule'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '893660e7938c13107b3a7c5efaba100f'
                        key: {
                            sys_security_acl: 'fc3620e7938c13107b3a7c5efaba10d0'
                            sys_user_role: {
                                id: '703620e7938c13107b3a7c5efaba1090'
                                key: {
                                    name: 'x_2223823_apollo_0.patient_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8a58a82f938c13107b3a7c5efaba10a5'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c8dbca43e954d1299bb211dfb1b4ff6'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_enabled'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e58a82f938c13107b3a7c5efaba10a2'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'hospital'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f3f04c2216846e9872d968aad396220'
                        key: {
                            name: 'x_2223823_apollo_0_rooms'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f7d49ee2b4749918b9a873070f564d2'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_schedule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92b99344578e48bc9ee6f8c7c0348cb8'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'hod'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '93d788eb938013107b3a7c5efaba108a'
                        key: {
                            category: 'x_2223823_apollo_0_doctor'
                            prefix: 'DOC'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '93e524a7938c13107b3a7c5efaba1069'
                        key: {
                            sys_security_acl: 'dbe5a467938c13107b3a7c5efaba1011'
                            sys_user_role: {
                                id: '37df90a3934c13107b3a7c5efaba1076'
                                key: {
                                    name: 'x_2223823_apollo_0.admission_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94aa40a793c013107b3a7c5efaba1030'
                        key: {
                            sys_ui_section: {
                                id: '9b68c0ef938013107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_doctor'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'user'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98d2d53550cb43439240c869aa87ff46'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '990368eb934c13107b3a7c5efaba1042'
                        key: {
                            name: 'x_2223823_apollo_0_hospital'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '990fcfc09a6a4289b8d549e2b9e57cf0'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99fe1d0309864501b347d89d985fd346'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'hospital'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a119f800dc64de3b4e8fbe4fbf723cf'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a72cf85b3dd4d3a978a0cf0e1a1d40f'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9aa56867938c13107b3a7c5efaba10c9'
                        key: {
                            name: 'x_2223823_apollo_0_admission'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9b68c0ef938013107b3a7c5efaba1098'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9be7e4eb938c13107b3a7c5efaba10ab'
                        key: {
                            sys_ui_section: {
                                id: '9b68c0ef938013107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_doctor'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'registration_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9c44e823938c13107b3a7c5efaba1047'
                        key: {
                            sys_security_acl: '5044e823938c13107b3a7c5efaba1015'
                            sys_user_role: {
                                id: '44446823938c13107b3a7c5efaba10e6'
                                key: {
                                    name: 'x_2223823_apollo_0.bed_reservations_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9ee688eb938013107b3a7c5efaba10ec'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a3c1422693c89b507b3a7c5efaba102e'
                        key: {
                            name: 'x_2223823_apollo_0.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a83e7f4871dd49369dd951354e5ebe0e'
                        key: {
                            name: 'x_2223823_apollo_0_qualification'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'afe5a4a7938c13107b3a7c5efaba1018'
                        deleted: true
                        key: {
                            category: 'x_2223823_apollo_0_admission'
                            prefix: 'ADM'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b000fbdffd1a446e9a57e982b6f5e979'
                        key: {
                            name: 'x_2223823_apollo_0_beds'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b19a3e3673b7427b8320cdd9bf3231ed'
                        key: {
                            name: 'x_2223823_apollo_0_hospital'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2447b21d8124ba68293bc8dd7911310'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_duration'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b2536c2f934c13107b3a7c5efaba101e'
                        key: {
                            name: 'x_2223823_apollo_0.hospital_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b2b7046f938013107b3a7c5efaba1080'
                        key: {
                            sys_security_acl: '76b7046f938013107b3a7c5efaba1042'
                            sys_user_role: {
                                id: '2ab7c06f938013107b3a7c5efaba1025'
                                key: {
                                    name: 'x_2223823_apollo_0.doctor_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3f9dec4f52242ffb83975db21add399'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'opd_enabled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3fe3a377535450eae27f76e52d93e52'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_schedule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba14e8ef934c13107b3a7c5efaba1014'
                        key: {
                            sys_security_acl: 'b214e8ef934c13107b3a7c5efaba1007'
                            sys_user_role: {
                                id: '6614a8ef934c13107b3a7c5efaba1075'
                                key: {
                                    name: 'x_2223823_apollo_0.beds_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bcaa8591293745ff9687221387b8a8f3'
                        key: {
                            name: 'x_2223823_apollo_0_rooms'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bec4a8a3938c13107b3a7c5efaba10fe'
                        key: {
                            sys_ui_section: {
                                id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                                key: {
                                    name: 'x_2223823_apollo_0_qualification'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfaaf2d566694bd28ce2871baddb0e5d'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c201dca36bc547afa22b337b2231918b'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'primary_hospital'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c258a82f938c13107b3a7c5efaba1098'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c258a82f938c13107b3a7c5efaba10a2'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c658a82f938c13107b3a7c5efaba10a1'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c753ac2f934c13107b3a7c5efaba1036'
                        key: {
                            sys_security_acl: '0b53ac2f934c13107b3a7c5efaba101c'
                            sys_user_role: {
                                id: 'b2536c2f934c13107b3a7c5efaba101e'
                                key: {
                                    name: 'x_2223823_apollo_0.hospital_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cb53ac2f934c13107b3a7c5efaba108a'
                        key: {
                            sys_security_acl: '0f53ac2f934c13107b3a7c5efaba1070'
                            sys_user_role: {
                                id: 'b2536c2f934c13107b3a7c5efaba101e'
                                key: {
                                    name: 'x_2223823_apollo_0.hospital_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ce58a82f938c13107b3a7c5efaba10a4'
                        key: {
                            sys_ui_section: {
                                id: 'c258a82f938c13107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_department'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'd136a0e7938c13107b3a7c5efaba104c'
                        key: {
                            category: 'x_2223823_apollo_0_patient'
                            prefix: 'PAT'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd3e564a7938c13107b3a7c5efaba1017'
                        key: {
                            sys_security_acl: '1be564a7938c13107b3a7c5efaba1009'
                            sys_user_role: {
                                id: '37df90a3934c13107b3a7c5efaba1076'
                                key: {
                                    name: 'x_2223823_apollo_0.admission_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd69652a61227441f97d64ff03a02d471'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6b47b6686154dc5ac822ec74170164b'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'on_cover'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd74bed4a161a4c83b20947a603cbb8e4'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db5b9b54e13f42e6a375f02b976f8383'
                        key: {
                            name: 'x_2223823_apollo_0_bed_reservations'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dfe7e4eb938c13107b3a7c5efaba10aa'
                        key: {
                            sys_ui_section: {
                                id: '9b68c0ef938013107b3a7c5efaba1098'
                                key: {
                                    name: 'x_2223823_apollo_0_doctor'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2a601594f2d424dbcf64f35ccef8b0c'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2bf510ec30941ec8cad37be5165ce49'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_no'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2c368af934c13107b3a7c5efaba109c'
                        key: {
                            sys_security_acl: '6ec368af934c13107b3a7c5efaba1075'
                            sys_user_role: {
                                id: '1ec3a4af934c13107b3a7c5efaba1023'
                                key: {
                                    name: 'x_2223823_apollo_0.rooms_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e3766ce7938c13107b3a7c5efaba10d0'
                        key: {
                            name: 'x_2223823_apollo_0_patient'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e6c368af934c13107b3a7c5efaba10f0'
                        key: {
                            sys_security_acl: 'eec368af934c13107b3a7c5efaba10e2'
                            sys_user_role: {
                                id: '1ec3a4af934c13107b3a7c5efaba1023'
                                key: {
                                    name: 'x_2223823_apollo_0.rooms_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e732142a834d43978fd5c608bd46b999'
                        key: {
                            name: 'x_2223823_apollo_0_patient'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e74ceaa7c1d84cd69d136149efaa0af3'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'status'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7a6035a0b3e4202b1c47391d3f7717f'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'on_cover'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e7e360ef934c13107b3a7c5efaba107f'
                        key: {
                            sys_security_acl: 'efe360ef934c13107b3a7c5efaba1071'
                            sys_user_role: {
                                id: '57e3a4af934c13107b3a7c5efaba1093'
                                key: {
                                    name: 'x_2223823_apollo_0.wards_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea9c6a96d4fa4aa9abc430c7ce3dd554'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'ipd_visit_schedule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eac6e2e28f5b48928783e1a1a3414545'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_fee'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ecc5ec9aff3e44ac808b18df92c6cf77'
                        key: {
                            logical_table_name: 'x_2223823_apollo_0_doctor'
                            col_name_string: 'video_schedule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f075a0905b634c17a38c898fd9ecb7fc'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f214e8ef934c13107b3a7c5efaba104b'
                        key: {
                            sys_security_acl: 'fa14e8ef934c13107b3a7c5efaba103d'
                            sys_user_role: {
                                id: '6614a8ef934c13107b3a7c5efaba1075'
                                key: {
                                    name: 'x_2223823_apollo_0.beds_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2c4a8a3938c13107b3a7c5efaba10e3'
                        key: {
                            sys_ui_section: {
                                id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                                key: {
                                    name: 'x_2223823_apollo_0_qualification'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2c4a8a3938c13107b3a7c5efaba10fe'
                        key: {
                            sys_ui_section: {
                                id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                                key: {
                                    name: 'x_2223823_apollo_0_qualification'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f360023d31044bcbaee04259870d1d27'
                        key: {
                            name: 'x_2223823_apollo_0_bed_reservations'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f6b7046f938013107b3a7c5efaba10df'
                        key: {
                            sys_security_acl: '76b7046f938013107b3a7c5efaba10d8'
                            sys_user_role: {
                                id: '2ab7c06f938013107b3a7c5efaba1025'
                                key: {
                                    name: 'x_2223823_apollo_0.doctor_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f82f49f7390e41519567f6b51e3e31c7'
                        key: {
                            name: 'x_2223823_apollo_0_hospital'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f95d1a2f3c064bcea3bb5850bbd2f078'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'video_duration'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa14a8ef934c13107b3a7c5efaba10b2'
                        key: {
                            sys_security_acl: '6614a8ef934c13107b3a7c5efaba108c'
                            sys_user_role: {
                                id: '6614a8ef934c13107b3a7c5efaba1075'
                                key: {
                                    name: 'x_2223823_apollo_0.beds_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fab7046f938013107b3a7c5efaba10bb'
                        key: {
                            sys_security_acl: '7ab7046f938013107b3a7c5efaba109b'
                            sys_user_role: {
                                id: '2ab7c06f938013107b3a7c5efaba1025'
                                key: {
                                    name: 'x_2223823_apollo_0.doctor_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe274d9c69994a91a9f2295c997be67a'
                        key: {
                            name: 'x_2223823_apollo_0_department'
                            element: 'hod'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fec4a8a3938c13107b3a7c5efaba10e3'
                        key: {
                            sys_ui_section: {
                                id: '6ec4a8a3938c13107b3a7c5efaba10d9'
                                key: {
                                    name: 'x_2223823_apollo_0_qualification'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fecc063cfe204e23968fe2468b7ec998'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ffd3acaf934c13107b3a7c5efaba1013'
                        key: {
                            name: 'x_2223823_apollo_0_wards'
                        }
                    },
                ]
            }
        }
    }
}
