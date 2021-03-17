import { Role } from 'testcafe'
import { CREDENTIALS } from './Constants';

const standard_users = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.STANDARD_USER.USERNAME)
        .typeText('#password', CREDENTIALS.STANDARD_USER.PASSWORD)
        .click('#login-button')
});

const locked_out_users = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.LOCKED_OUT_USER.USERNAME)
        .typeText('#password', CREDENTIALS.LOCKED_OUT_USER.PASSWORD)
        .click('#login-button')
});

const problem_users = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.PROBLEM_USER.USERNAME)
        .typeText('#password', CREDENTIALS.PROBLEM_USER.PASSWORD)
        .click('#login-button')
});

const performance_glitch_users = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.PERFORMANCE_GLITCH_USER.USERNAME)
        .typeText('#password', CREDENTIALS.PERFORMANCE_GLITCH_USER.PASSWORD)
        .click('#login-button')
});