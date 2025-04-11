//Q1) Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

//A1)
advice.replace("important", "urgent");

//How would you replace all occurrences of "important" instead of only one?
advice.replaceAll("important", "urgent");

