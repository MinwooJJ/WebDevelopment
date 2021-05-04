var database = [
  {
    username: "minwoo",
    password: "secret",
  },
  {
    username: "sam",
    password: "secret",
  },
  {
    username: "mike",
    password: "secret",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }

  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!!");
  }
}

var usernamePrompt = prompt("Whata's your usename?");
var passwordPrompt = prompt("What's your password?");

signIn(usernamePrompt, passwordPrompt);
