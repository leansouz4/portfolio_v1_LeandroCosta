/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

/*
Function onAuthStateChanged(user)
Write a function to check if a user is logged
*/


window.addEventListener('load', function () {

    //Listen for auth state changes
    firebase.auth().onAuthStateChanged(onAuthStateChanged);

    //Implement SignOut Function


});