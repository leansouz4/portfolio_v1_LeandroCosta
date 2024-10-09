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


function authStateListener() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid
    } else {
      signOut()
      location.href = 'index.html'
    }
  })
}

window.addEventListener('load', function () {
  //Listen for auth state changes
  authStateListener()

  document.getElementById('sign-out').addEventListener('click', function () {
    signOut()
  })
})


function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
  // [END auth_sign_out]
}
