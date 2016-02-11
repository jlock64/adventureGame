

    // START OF GAME //
    var startGame = function() {
    alert("Get ready for the adventure of a lifetime!")

    //  SAFARI GAME CHOICE //
    var answer = prompt(
      "Are you ready to go on a safari? Type yes or no. If you'd rather play some trivia, type trivia.").trim().toLowerCase();
    if (answer === "yes") {
      alert(
        "Get ready for a rocking good time! We are headed deep into the untamed world of Namibia! Buckle up and please keep your hands inside the vehicle at all times. We are not responsible for any forcefully removed body parts.");

      function animalChoice() {
      answer = prompt("What animals are you hoping to see most? Lions, elephants or giraffes?").trim().toLowerCase();

      // LION ANSWER //
      if (answer === "lions" || answer ==="lion") {
        function lionQuestion () {
        answer = prompt("Awesome! Lions are cool. Do you think you could beat a lion in a foot race?").trim().toLowerCase();
        if (answer === "yes") {
          alert(lionAnswer.yes);
          alert("Lets play again!");
          startGame();
        } else if (answer === "no") {
          alert(lionAnswer.no);
          alert("Lets play again!");
          startGame();
        } else {
          alert(lionAnswer.unknown);
          lionQuestion();
        }}
        lionQuestion();

        // ELEPHANT ANSWER //
      } else if (answer === "elephants" || answer ==="elephant") {
        alert("Cool! Me too! Elephants are the largest land animals in the world!");
        function elephantQuestion () {
        answer = prompt("Let me test your elephant knowledge. How much can an average elephant heart weigh? 27 pounds or 46 pounds?").trim().toLowerCase();
        if (answer === "27" || answer === "27 pounds") {
          alert(elephantAnswer.no);
          alert("Lets play again!");
          startGame();
        } else if (answer === "46" || answer === "46 pounds") {
          alert(elephantAnswer.yes);
          alert("Lets play again!");
          startGame();
        } else {
          alert(elephantAnswer.unknown);
          elephantQuestion();
        }
      }
      elephantQuestion();

      // GIRAFFE ANSWER //
      } else if (answer === "giraffes" || answer === "giraffe") {
        alert("Sweet! Giraffes are the tallest mammal in the world!");
        function giraffeQuestion() {
        answer = prompt("Let me test your giraffe knowledge. On average do giraffes get more or less sleep than the average humans 6.5 hours of sleep?").trim().toLowerCase();
        if (answer === "more") {
          alert(giraffeAnswer.more);
          alert("Lets play again!");
          startGame();
        } else if (answer === "less") {
          alert(giraffeAnswer.less);
          alert("Lets play again!");
          startGame();
        } else {
          alert(giraffeAnswer.unknown);
          giraffeQuestion();
        }}
        giraffeQuestion();

      // WRONG INPUT //
      } else {
        alert("That was not a choice. Pick again.");
        animalChoice();
      }
    }
      animalChoice();
    }
     // END OF SAFARI GAME //

    // START DRINKING GAME //
    else if (answer === "no") {
      answer = prompt("You are a party pooper! I'm sorry I didn't mean that. Would you rather go get drunk?").trim().toLowerCase();

      // YES TO DRINKING //
      if (answer === "yes") {
        function beerWineQuestion() {
        answer = prompt("I like drinking too. We are going to get along just fine. Do you prefer beer or wine?").trim().toLowerCase();

        // BEER CHOICE //
        if (answer === "beer") {
          alert("I love beer too! Be careful not to drink too much or you will get a beer belly. Hairy beer bellies aren't pretty.");
          function beerQuestion() {
          answer = prompt("Do you prefer IPA's or stouts?").trim().toLowerCase();
          if (answer === "ipas" || answer === "ipa's") {
            alert(beerAnswer.ipas);
            alert("Lets play again!");
            startGame();
          } else if (answer === "stouts") {
            alert(beerAnswer.stouts);
            alert("Lets play again!");
            startGame();
          } else {
            alert(beerAnswer.unknown);
            beerQuestion();
          }
        }
        beerQuestion();
      }

        // WINE CHOICE //
          else if (answer === "wine") {
          alert("Ok I like wine too. I usually only drink it with my wife.");
          function winePreference () {
            answer = prompt("Do you prefer white or red?").trim().toLowerCase();
            if (answer === "white") {
              alert(wineChoice.white);
              alert("Lets play again!");
              startGame();
            } else if (answer === "red") {
              alert(wineChoice.red);
              alert("Lets play again!");
              startGame();
            } else {

              alert(wineChoice.other);
              winePreference();
              }
          }
          winePreference();

          } else {
          alert("That was not a choice but hey, I like to indulge in most alcohol. Try again.");
          beerWineQuestion();
        }
       }
       beerWineQuestion();
      }
      // NO TO DRINKING //
      else if (answer === "no") {
        alert("Ok so you don't like to drink. That's totally cool. I'm sure we can find something in common.");
        function surfGolfQuestion() {
        answer = prompt("I love surfing and golfing. If you had to pick one which one would you want to do with me?").trim().toLowerCase();

        if (answer === "surfing" || answer === "surf") {
          alert("Tubular dude! Let's go!");
         function sharkQuestion() {
          answer = prompt("Are you afraid of sharks?").trim().toLowerCase();
          if (answer === "yes") {
            alert(sharkAnswer.yes);
            alert("Lets play again!");
            startGame();
          } else if (answer === "no") {
            alert(sharkAnswer.no);
            alert("Lets play again!");
            startGame();
          } else {
            alert(sharkAnswer.other);
            sharkQuestion();
          }
         }
         sharkQuestion();

       } else if (answer === "golfing" || answer === "golf") {
          alert("Sweet, I love to golf! Unfortunately my driving sucks. We might be searching for lots of balls. That sounds weird.");
          function golfQuestion () {
          answer = prompt("Lets talk about your handicap in golf. Mine is 90. Is yours above or below that?").trim().toLowerCase();
            if (answer === "above") {
            alert(golfAnswer.above);
            alert("Lets play again!");
            startGame();
          } else if (answer === "below") {
            alert(golfAnswer.below);
            alert("Lets play again!");
            startGame();
          } else {
            alert(golfAnswer.other);
            golfQuestion();
          }}
          golfQuestion();

        } else {
          alert("Awh come on be adventerous. Pick one please.")
          surfGolfQuestion();
        }
       }
       surfGolfQuestion();
      }
      // UNKNOWN INPUT //
      else {
        alert("Sorry, that was a yes or no question.");
        alert("Lets play again!");

        startGame();
      }
    } // END OF DRINKING GAME //

    // TRIVIA FUNCTIONS //
    else if (answer === "trivia") {
      var antarticaTrivia = function() {
        answer = prompt("Which continent is the only one without reptiles or snakes?").trim().toLowerCase();
      }
      var batTrivia = function() {
        answer = prompt("Which direction do bats always turn out of a cave? Left or right?").trim().toLowerCase();
      }
      var lotteryTrivia = function() {
        answer = prompt("What do 100% of all lottery winners do?").trim().toLowerCase();
      }
      var marriedMenTrivia = function() {
        answer = prompt(
          "Married men revealed that they do this twice as often as single men.").trim().toLowerCase();
      }

      // BEGIN TRIVIA //
      alert("Ok smartypants! Let's play trivia! Hit OK to continue.");
      antarticaTrivia();
      if (answer === "antartica" || answer === "Antartica") {
        alert(antarticaAnswer.right);
      } else {
        alert(antarticaAnswer.wrong);
        antarticaTrivia();
        if (answer === "antartica") {
          alert(antarticaAnswer.right);
        } else {
          alert(antarticaAnswer.wrongPlusAns)
        }
      }

      batTrivia();
      if (answer === "left") {
        alert("Right! I mean left is the right answer. Good work.")
      } else {
        alert("Nope. They always turn left. Weirdos!")
      }

      lotteryTrivia();
      if (answer === "gain weight" || answer === "get fat" || answer ==="get fatter") {
        alert(lotteryAnswer.right);
      } else {
        alert(lotteryAnswer.wrong)
        lotteryTrivia();
        if (answer === "gain weight" || answer === "get fat" || answer ==="get fatter") {
          alert(lotteryAnswer.right);
        } else {
          alert(lotteryAnswer.wrongAgain);
        }
      }

      marriedMenTrivia();
      if (answer === "change their underwear" || answer === "change underwear") {
        alert(marMenAnswer.right);
      } else {
        alert(marMenAnswer.wrong);
        marriedMenTrivia();
        if (answer === "change their underwear" || answer === "change underwear") {
          alert(marMenAnswer.right);
        } else {
          alert(marMenAnswer.wrongAgain);
        }
      }
      alert("Lets play again!");
      startGame();
    } else {
      alert("That's not a choice buddy! Come on and be adventerous!")
      startGame();
    }
  } // End of startGame function //
startGame();
