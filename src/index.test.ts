import {Greeter} from '.'

describe('greeter', () => {
    test('greeter', ()=> {
        expect(Greeter('17')).toEqual('Hello-17');
    })
})
