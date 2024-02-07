import {rest} from 'msw'  

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx)=>{
        return res(ctx.status(200),
        ctx.json([
            {
                name:"James Anderson",
                email:"jamesjimmyanderson@gmail.com"
            },

            {
                name:"Stuart Broad",
                email:"broadystuart@gmail.com"
            }, 

            {
                name:"Andrew Strauss",
                email:"andrewstrauss@gmail .com"
            }
        ]))
    })
]