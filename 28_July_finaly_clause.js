//finally Clause Always executes

try {
    let a = 0;
    console.log(program)
    console.log("Program runs successfully")
}
catch (err) {
    console.log("This is an error")
    console.log(err.stack)//error inside catch
}
finally {
    console.log("This finally clause always executes ")
    //use for close the file    // final cleanup
    // exit the loop
    //write to the log file
}