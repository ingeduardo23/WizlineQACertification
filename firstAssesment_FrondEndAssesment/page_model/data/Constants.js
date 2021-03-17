import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    STANDARD_USER:{
        USERNAME: process.env.STANDARDUSERNAME,
        PASSWORD: process.env.ALLPASSWORD
    },
    
    LOCKED_OUT_USER:{
        USERNAME:process.env.LOCKEDUSERNAME,
        PASSWORD:process.env.ALLPASSWORD
    },
    PROBLEM_USER:{
        USERNAME:process.env.PROBLEMUSERNAME,
        PASSWORD:process.env.ALLPASSWORD
    },
    PERFORMANCE_GLITCH_USER:{
        USERNAME:process.env.PERFORMANCEUSERNAME,
        PASSWORD:process.env.ALLPASSWORD
    },

    SHIPPINGUSER:{
        FNAME:'Eduardo',
        LNAME:'Araujo',
        ZCODE:'1024786-SANTO DOMINGO'
    }
}