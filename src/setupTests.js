// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'text-encoding';

// import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server'

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

server.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted:', request.method, request.url) 
  })
