export default function LoremIpsum (size) {
  const myText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
  if(size === 1){
    return(myText)
  }  

  if(size === 2){
    return (myText + myText)
  }  
  
  if(size === 3){
    return (myText + myText + myText)
  }

  if(size === 4){
    return (myText + myText + myText + myText)
  }

  if(!size) {
    return('DESIGNATE LOREM IPSUM SIZE')
  }

}