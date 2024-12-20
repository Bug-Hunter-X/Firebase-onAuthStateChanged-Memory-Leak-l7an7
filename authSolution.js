const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    console.log(user.email);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//This is the solution, the line was added to prevent the memory leak
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);