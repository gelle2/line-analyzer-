// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)
function getLength(x1, y1, x2, y2) {
  let length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let out = length.toFixed(2);
  return out;
}

function getSlope(x1, y1, x2, y2) {
  let slope = (y1 - y2) / (x1 - x2);
  let out = slope.toFixed(2);
  return out;
}

function getDescription(x1, y1, x2, y2) {
  let slope = getSlope(x1, y1, x2, y2);
  if (slope > 0) {
    let out = `Increasing`;
    return out;
  } else if (slope < 0) {
    let out = `decreasing`;
    return out;
  } else if (slope == 0) {
    let out = `horizontal`;
    return out;
  } else {
    let out = "vertical";
    return out;
  }
}

function getPointLocation(x, y) {
  if (y > 0 || x > 0) {
    let out = `Q1`;
    return out;
  } else if (y > 0 && x < 0) {
    let out = `Q2`;
    return out;
  } else if (y < 0 && x < 0) {
    let out = `Q3`;
    return out;
  } else {
    let out = `Q4`;
    return out;
  }
}

function getPointSlope(x1, y1, x2, y2) {
  let sl = getSlope(x1, y1, x2, y2);
  if (y1 > 0 && x1 > 0) {
    let out = `y-${y1}=${sl}(x-${x1})`;
    return out;
  } else if (y1 < 0 && x1 < 0) {
    let out = `y-(${y1})=${sl}(x-(${x1}))`;
    return out;
  } else if (y1 > 0 && x1 < 0) {
    let out = `y-${y1}=${sl}(x-(${x1}))`;
    return out;
  } else {
    let out = `y-(${y1})=${sl}(x-${x1})`;
    return out;
  }
}
function getEquation(x1, y1, x2, y2) {
  let m = getSlope(x1, y1, x2, y2);
  let b = y1 - m * x1;
  return `y=${m}x + ${b}`;
}
