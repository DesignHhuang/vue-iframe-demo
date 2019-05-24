import Mock from 'mockjs'
import { deepClone } from '../../src/utils/index.js'
import { constantRoutes } from './routes.js'

const routes = deepClone([...constantRoutes])

const roles = [
    {
        key: 'admin',
        name: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
        routes: routes
    }
]

export default [
    // mock get all routes form server
    {
        url: '/routes',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: routes
            }
        }
    },

    // mock get all roles form server
    {
        url: '/roles',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: roles
            }
        }
    },

    // add role
    {
        url: '/role',
        type: 'post',
        response: {
            code: 20000,
            data: {
                key: Mock.mock('@integer(300, 5000)')
            }
        }
    },

    // update role
    {
        url: '/role/[A-Za-z0-9]',
        type: 'put',
        response: {
            code: 20000,
            data: {
                status: 'success'
            }
        }
    },

    // delete role
    {
        url: '/role/[A-Za-z0-9]',
        type: 'delete',
        response: {
            code: 20000,
            data: {
                status: 'success'
            }
        }
    }
]
