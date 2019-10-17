function writeCards( a1, event ) {
  let a2 = []
  for ( let i = 0; i < a1.length; i++ ) {
    thankYouCards.push( `Thank you, ${a1[i]}, for the wonderful ${event} gift!` )
  }
  return a2
}


function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
