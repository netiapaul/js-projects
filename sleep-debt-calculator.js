const getSleepHours = day =>{
  switch(day){
    case 'Monday':
    return '8 hours slept'
    break;
    case 'Tuesday':
    return '7 hours slept'
    break;
    case 'Wednesday':
    return '6 hours slept'
    break;
    case 'Thursday':
    return '10 hours slept'
    break;
    case 'Friday':
    return '8 hours slept'
    break;
    case 'Saturday':
    return '5 hours slept'
    break;
    case 'Sunday':
    return '3 hours slept'
    break;
    default:
    return 'you are nuts'
    break
}
}
  console.log(getSleepHours('monday'))
const getActualSleepHours= () => 6 + 7 + 9 + 8 + 5 + 10 + 11

 
const getIdealSleepHours = () =>{
  let idealHours =8;
  return idealHours * 7;
}

console.log(getIdealSleepHours(7));

const calculateSleepDebt = () =>{
  const actualSleepHours=getActualSleepHours();
  const idealSleepHours=getIdealSleepHours();
 if (actualSleepHours===idealSleepHours){
 console.log('user got perfect amount of sleep');
 }else if(actualSleepHours > idealSleepHours){
 console.log('got more sleep than needed');   
 }else{
     console.log('the user should get some rest')
  }
  
}
calculateSleepDebt()
