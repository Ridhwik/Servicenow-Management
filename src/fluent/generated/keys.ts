import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '86c40d9fdf204ddbbf2ac03b802a0713'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f1adb9be403f4420b36cf03e2fa18d22'
                    }
                }
                composite: [
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
                        id: '1710fe3492164514b795269285df761a'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'number'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '34166c2afcf34bde8dcf82582e2de988'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'user'
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
                        table: 'sys_dictionary'
                        id: '58cbd84053d54e78822d2cda640b14c1'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'NULL'
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
                        table: 'sys_documentation'
                        id: '66fbd05adaa546a4a76d75b739819f6f'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_number'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '79178533a3bb41689f3463f32e0053ee'
                        key: {
                            name: 'x_2223823_apollo_0_doctor'
                            element: 'registration_number'
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
                        table: 'sys_number'
                        id: '93d788eb938013107b3a7c5efaba108a'
                        key: {
                            category: 'x_2223823_apollo_0_doctor'
                            prefix: 'DOC'
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
                ]
            }
        }
    }
}
