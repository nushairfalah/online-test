function palindrome(str) {
  // Step 1. The first part is the same as earlier
  let regex = /[^A-Za-z0-9]/g; // a-z, A-Z, 0-9
  str = str.toLowerCase().replace(regex, "");

  // Step 2. Create the FOR loop
  for (let i = 0; i < str.length / 2; i++) {
    // str.length = "A man, a plan, a canal. Panama" = 30
    if (str[i] !== str[str.length - 1 - i]) {
      // As long as the characters from each part match, the FOR loop will go on
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

palindrome("A man, a plan, a canal. Panama");
