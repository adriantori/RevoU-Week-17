
const whitelist =  {
    clientOptionsLimited : {
        origin: 'https://week-17-adriantori.web.app',
        methods:['GET','POST']
    },
    clientOptionsGlobal : {
        origin: ['https://week-17-adriantori.web.app','http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE', 'PATCH'],
        credentials: true,  // Allow credentials (cookies) to be sent
    }
}

export default whitelist