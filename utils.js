import moment from 'moment';

let printDate = () => {

    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.querySelector('span').innerHTML = now;
    setInterval(function() { printDate(); }, 1000);
    
}


//making the module
export default {
    printDate
}
