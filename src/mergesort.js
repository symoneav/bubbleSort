function split(wholeArr) {
  const firstHalf = wholeArr.splice(0, Math.floor(wholeArr.length / 2));
  const secondHalf = wholeArr;
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mainArray = [];
  while (arr1.length !== 0 || arr2.length !== 0) {
    console.log(arr1, arr2);
    if (arr1[0] < arr2[0]) {
      const [val] = arr1.splice(0, 1);
      mainArray.push(val);
    } else if (!arr2[0]) {
      const [val] = arr1.splice(0, 1);
      mainArray.push(val);
    } else {
      const [val] = arr2.splice(0, 1);
      mainArray.push(val);
    }
  }
  return mainArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    [arrOne, arrTwo] = split(arr);
    console.log("array 1:", arrOne);
    console.log("array 2:", arrTwo);
    // const  = mergeSort(arrTwo);
    // const newArrOne = mergeSort(arrOne);
    // console.log("new Array one:", newArrOne);
    // console.log("new Array two:", newArrTwo);
    const merged = merge(mergeSort(arrOne), mergeSort(arrTwo));
    console.log("sorted array:", merged);
    return merged;
  }
}
