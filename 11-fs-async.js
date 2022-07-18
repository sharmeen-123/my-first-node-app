// in async the application will be available right after it has served another user without waiting to finish the task 
const { readFile, writeFile} = require('fs')

readFile( './content/first.txt', 'utf8' /* if we will no provide utf than thne buffer will be shown in output */
                                        ,( err, result ) => {
    if(err){
        console.log(err);
        return
    }
    
    const first = result;
    readFile( './content/second.txt', 'utf8', ( err, result ) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;

        writeFile('./content/result-async.txt',  // file path
                `here is the result of : ${first} , ${second}`,
                ( err, result ) => {
                    if(err){
                        console.log(err);
                        return
                    }
                    
                    console.log(result);
        }) 
    })  
})