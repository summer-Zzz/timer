const time = process.argv.slice(2);


const timer = function(timing){
  if (timing.length > 0){
    for (const seconds of timing){
      if (seconds >= 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, `${seconds}000`)
    }
  }
  }
}


timer(time)