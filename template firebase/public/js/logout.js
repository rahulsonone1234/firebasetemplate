function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location="googleLogin.html";
    }).catch(function(error) {
        // An error happened.
    });
}
