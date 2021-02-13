module.exports = function toReadable (number) {
  let str =  number;
 let Arr = [
            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
             'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

            ['' ,'','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

            ['', 'one hundred', 'two hundred', 'three hundred','four hundred','five hundred',
            'six hundred','seven hundred','eight hundred','nine hundred']
          ]
if (str == 0){
  return Arr[0][0];
}

 if (str < 20 ) {
return Arr[0][str];
}
 if  (str < 100) {
  if (str%10==0) {return (Arr[1][parseInt(str / 10)]);}
  else {return (Arr[1][parseInt(str / 10)] + ' '+Arr[0][str % 10])};
}

 if (str%100 == 0) {return (Arr[2][str/100])}
  let rest = (str % 100);
 if (rest < 20){
   return (Arr[2][parseInt(str/100)] + ' ' + Arr[0][rest])
 } else {
   if (rest%10 == 0) {
     return (Arr[2][parseInt(str/100)] + ' ' + Arr[1][rest/10])
   } else {
     return (Arr[2][parseInt(str/100)] + ' ' + Arr[1][parseInt(rest/10)] + ' ' + Arr[0][rest%10])
   }
 }
}
