var confirmPlay = confirm("Get ready for the adventure of a lifetime!")
  // if (confirmPlay === "") {
  //   console.log("You must select OK or hit cancel.")
  // }

var refreshPage = function () {
  confirm("Please refresh this page to take a new adventure path!");
}

  /////////////////////////SAFARI GAME CHOICE//////////////////////
var answer = prompt("Are you ready to go on a safari? Type yes or no. If you'd rather play some trivia, type trivia.");
  if (answer === "yes") {
    confirm("Get ready for a rocking good time! We are headed deep into the untamed world of Namibia! Buckle up and please keep your hands inside the vehicle at all times. We are not responsible for any forcefully removed body parts.");
    answer = prompt("What animals are you hoping to see most? Lions,  elephants or giraffes?");

     //ANSWER EQUALS LIONS//
     if (answer === "lions") {
       answer = prompt("Awesome! Lions are cool. Do you think you could  beat a lion in a foot race?");
       if (answer === "yes") {
         confirm("You are sadly mistaken my friend. Lions can reach speeds of 36mph! Even the world's fastest man Usain Bolt, who has been clocked at 28mph couldn't escape a lions attack!");
         refreshPage();
       }
       else if (answer === "no") {
         confirm("You are right-o lion master tamer! Lions can reach speeds of 36mph!");
         refreshPage();
       }
       else {
         confirm("Sorry that was not a correct input.")
         refreshPage();
       }

     //ANSWER EQUALS LIONS//
  }  else if (answer === "elephants") {
       confirm("Cool! Me too! Elephants are the largest land animals in the world!");
       answer = prompt("Let me test your elephant knowledge. How much can an average elephant heart weigh? 27 pounds or 46 pounds?");
        if (answer === "27" || answer === "27 pounds") {
          confirm("Nope. An average elephant heart can weigh up to 46 pounds! That's a big heart throb!");
          refreshPage();
        }
        else if (answer === "46" || answer === "46 pounds") {
          confirm("That is right oh wise one! The average elephant heart can weigh up to 46 pounds! That's a big pumper!");
          refreshPage();
        }
        else {
          confirm("Sorry, that was not a choice. You lose.");
          refreshPage();
        }
  }

     //ANSWER EQUALS GIRAFFES//
     else if (answer === "giraffes") {
       confirm("Sweet! Giraffes are the tallest mammal in the world!");
       answer = prompt("Let me test your giraffe knowledge. On average do giraffes get more or less sleep than the average humans 6.5 hours of sleep?");
        if (answer === "more") {
          confirm("Wrong! Giraffes get on average less than 2 hours per day of sleep! They must drink lots of coffee.");
          refreshPage();
        }
        else if (answer === "less") {
          confirm("Whoa weirdo! Had no clue you knew so much about giraffes. Actually that's pretty cool. Knowledge is power bro.");
          refreshPage();
        }
        else {
          confirm("Sorry that was not a choice. But giraffes get on average less than 2 hours per day of sleep! They must drink lots of coffee.");
          refreshPage();
        }
     }

    // WRONG INPUT //
     else {
       confirm("That was not a choice. But I hope you get to see what you want on the safari!");
       refreshPage();
     }
} // END OF SAFARI GAME //

  /////////////////////START DRINKING GAME///////////////////////
  else if (answer === "no") {
      answer = prompt("You are a party pooper! Go back where you came from! I'm sorry I didn't mean that. Would you rather go get drunk?");

      // YES TO DRINKING //
      if (answer === "yes") {
        answer = prompt("I like drinking too. We are going to get along just fine. Do you prefer beer or wine?");

        // BEER CHOICE //
        if (answer = "beer") {
          confirm("I love beer too! Be careful not to drink too much or you will get a beer belly. Hairy beer bellies aren't pretty.");
          answer = prompt("Do you prefer IPA's or stouts?");
          if (answer === "ipas" || answer === "IPAs" || answer === "IPAS") {
            confirm("That's what I'm talking about! Unfortunately IPAs average more than 200 calories per beer. Guess we will starworking on our big hairy bellies together.");
            refreshPage();
          }
          else if (answer === "stouts") {
            confirm("I used to be a big fan of stouts. Now I just think they are thick and milky. That sounds gross.");
            refreshPage();
          }
          else {
            confirm("That wasn't a choice but any beer I will try at least once.");
            refreshPage();
          }
        }

        // WINE CHOICE //
        else if (answer === "wine") {
          confirm("Ok I like wine too. I usually only drink it with my wife.");
          answer = prompt("Do you prefer white or red?");
            if (answer === "white") {
              confirm("I am not a big fan of white wine. But I do occasionally drink it in the summer.");
              refreshPage();
            }
            else if (answer === "red") {
              confirm("Awh yeah! If it's red I will drink it!");
              refreshPage();
            }
            else {
              confirm("Not sure about that answer.");
              refreshPage();
            }
         }

         else {
           confirm("That was not a choice but hey, I like to indulge in most alcohol.");
           refreshPage();
         }
      }

      // NO TO DRINKING //
      else if (answer === "no") {
        confirm("Ok so you don't like to drink. That's totally cool. I'm sure we can find something in common.");
        answer = prompt("I love surfing and golfing. If you had to pick one which one would you want to do with me?");
          if (answer === "surfing") {
            confirm("Tubular dude! Let's go!");
            answer = prompt("Are you afraid of sharks?");
              if (answer === "yes") {
                confirm("Chances are that you won't die. The odds of getting attacked and killed by a shark are 1 in nearly 4 million!");
                refreshPage();
              }
              else if (answer === "no") {
                confirm("You shouldn't be scared. The odds of getting attacked and killed by a shark are 1 in nearly 4 million!");
                refreshPage();
              }
              else {
                confirm("I don't recognize that answer.");
                refreshPage();
              }
          }
          else if (answer === "golfing") {
            confirm("Sweet, I love to golf! Unfortunately my driving sucks. We might be searching for lots of balls. That sounds weird.");
            answer = prompt("Lets talk about your handicap in golf. Mine is 90. Is yours above or below that?");
              if (answer === "above") {
                confirm("Yikes! We might be searching for your balls more than mine.");
                refreshPage();
              }
              else if (answer === "below") {
                confirm("Cool, you are pretty good. Let's make some bets!");
                refreshPage();
              }
              else {
                confirm("You must answer with below or above.");
                refreshPage();
              }
          }
          else {
            answer = prompt("I guess we are going to have to find something else to do.");
            refreshPage();
          }
       }

       // UNKNOWN INPUT //
  else {
         confirm("Sorry, that was a yes or no question.");
         refreshPage();
  }
} // END OF DRINKING GAME //

////////////////// UNKNOWN INPUT ON SAFARI QUESTION ////////////////

    else {

      var antarticaTrivia = function() {
        answer = prompt("Which continent is the only one without reptiles or snakes?");
        }

      var batTrivia = function() {
        answer = prompt("Which direction do bats always turn out of a cave? Left or right?");
        }

      var lotteryTrivia = function() {
        answer = prompt("What do 100% of all lottery winners do?");
        }

      var marriedMenTrivia = function() {
        answer = prompt("Married men revealed that they do this twice as often as single men.");
        }

      confirm("Ok smartypants! Let's play trivia! Hit OK to continue.");
      antarticaTrivia();

      if (answer === "antartica") {
        confirm("Correct-o smarty pants!");
      }
      else {
        confirm("Wrong answer. I will give you one more try.");
        antarticaTrivia();
        if (answer === "antartica") {
          confirm("Correct-o smarty pants!");
        }
        else {
          confirm("Sorry, wrong answer. Next question.")
        }
      }

      batTrivia();
      if (answer === "left") {
        confirm("Right! I mean left is the right answer. Good work.")
      }
      else {
        confirm("Nope. They always turn left. Weirdos!")
      }

      lotteryTrivia();
      if (answer === "gain weight" || answer === "get fat" || answer === "get fatter") {
        confirm("That's right big boy! Doesn't that make you feel just a bit better about not winning the lottery?")
      }
      else {
        confirm("Sorry wrong answer. Try one more time.")
        lotteryTrivia();
        if (answer === "gain weight" || answer === "get fat" || answer === "get fatter") {
          confirm("That's right big boy! Doesn't that make you feel just a bit better about not winning the lottery?")
        }
        else {
          confirm("Sorry, wrong again.");
        }
      }

      marriedMenTrivia();
      if (answer === "change their underwear" || answer === "change underwear") {
        confirm("That's right! Single men have smellier underwear!");
      }
      else {
        confirm("Wrong answer! Try again. Think brainiac.");
        marriedMenTrivia();
        if (answer === "change their underwear" || answer === "change underwear") {
          confirm("That's right! Single men have smellier underwear!");
        }
        else {
          confirm("Wrong answer! Better luck next time.");
      }
    }
      refreshPage();

    }
