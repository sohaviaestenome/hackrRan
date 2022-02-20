function timeConversion(s) {
    // Write your code here
    const [time, modifier] = s.split(' ');
    let r = s.replace(/[^a-zA-Z]+/g, '');
    console.log(modifier);
  
    let [hours, minutes,seconds] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
    
    if (r === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    let seconds2 = seconds.replace(/\D/g, '');
     
    return `${hours}:${minutes}:${seconds2}`;
  }
  