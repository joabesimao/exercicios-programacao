function changePlaces(list, position1, position2) {
  [list[position1], list[position2]] = [list[position2], list[position1]];
}

function putPivotInTheIndex(list, start, end) {
  const currentPivotIndex = end;
  const valuePivot = list[currentPivotIndex];
  let whereThePivotShouldBe = start;

  for (let i = start; i < end; i++) {
    const valueCurrent = list[i];
    if (valueCurrent < valuePivot) {
      changePlaces(list, i, whereThePivotShouldBe);
      whereThePivotShouldBe++;
    }
  }
  changePlaces(list, currentPivotIndex, whereThePivotShouldBe);
  const indexPivot = whereThePivotShouldBe;
  return indexPivot;
}

function quickSortR(list, start, end) {
  if (start >= end) {
    return;
  }

  let indexPivot = putPivotInTheIndex(list, start, end);

  quickSortR(list, start, indexPivot - 1);
  quickSortR(list, indexPivot + 1, end);
}


