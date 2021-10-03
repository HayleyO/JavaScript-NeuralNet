function shuffle(array) 
{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) 
    {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function shuffle(array1, array2) 
{
    //THIS IS UNDER THE ASSUMPTION ARRAY1 AND ARRAY2 ARE OF THE SAME SIZE
    //TODO: ADD AN EXCEPTION HERE IF THEY ARE NOT/ABSTRACT TO ALLOW shuffle([array]) and shuffle as many arrays as needed with same key
    let currentIndex = array1.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) 
    {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array1[currentIndex], array1[randomIndex]] = [
        array1[randomIndex], array1[currentIndex]];
    [array2[currentIndex], array2[randomIndex]] = [
        array2[randomIndex], array2[currentIndex]];
    }
    return [array1, array2];
}