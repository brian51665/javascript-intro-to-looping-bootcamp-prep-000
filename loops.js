
function forLoop(array){
  for (let i = 0; i < 26; i++) {
    if (i === 1)
      array.push(`"I am ${i} strange loop."`)
    else if  (i > 1)
      array.push(`"I am ${i} strange loops."`)
}
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array){
  do {

  } while (array.length > 0 && maybeTrue())
}
