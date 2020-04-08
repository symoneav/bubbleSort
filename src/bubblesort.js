function bubbleSort(array) {
  function swap(valOne, valTwo) {
    return [valTwo, valOne];
  }
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      // console.log(i)
      if (array[i] < array[i + 1]) {
        continue;
      }
      if (array[i] > array[i + 1]) {
        // console.log('this is the array before swap', array)
        const [valOne, valTwo] = swap(array[i], array[i + 1]);
        // console.log(' this is valOne: ',valOne, 'This is val Two:', valTwo)
        array[i] = valOne;
        array[i + 1] = valTwo;
        // console.log('this is the array after swap', array)
        i = i - 1;
        // console.log(i)
      } else {
      }
    }
  }
  return array;
}
