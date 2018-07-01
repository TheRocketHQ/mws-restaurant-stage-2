function format(time) {
    // return human readable string 
    return time.toTimeString() 
                 .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'); 
    } 
    // run the async fn and time how much it took to complete 
    async function run(fn, options) { 
      const start = new Date(); 
      console.log(`[${format(start)}] Starting '${fn.name}'...`); 
      await fn(options); 
      const end = new Date(); 
      const time = end.getTime() - start.getTime(); 
      console.log( 
        `[${format(end)}] Finished '${fn.name}' after ${time} ms` 
      ); 
    } 
     
    if (process.mainModule.children.length === 0 && process.argv.length > 2) { 
      delete require.cache[__filename]; 
      const module = process.argv[2]; 
      run(require('./' + module + '.js')) 
        .catch(err => console.error(err.stack)); 
    } 
     
    export default run; 