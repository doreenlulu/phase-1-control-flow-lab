function scuberGreetingForFeet(ride) {
  let result
  if (ride > 2500) {
    result = 'No can do.';
  }
  else if (ride > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  else {
    result = 'This one is on me!';
  }
  return result
}

function ternaryCheckCity(city) {
  let result2 = city === "NYC" ? "Ok, sounds good." : "No go.";
  return result2;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;

    case "not as generous":
      return "Thank you.";
      break;

      default:
        return "Bye.";
  }
}
