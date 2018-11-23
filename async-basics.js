console.log('Starting');

setTimeout(() => {
   console.log('Inside first Timeout - 2000ms');
    
}, 2000);

setTimeout(() => {
    console.log('Inside second Timeout - 0ms');
}, 0);

console.log('Finishing up');

