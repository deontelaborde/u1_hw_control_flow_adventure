let replay = true

while (replay === true) {
  let name = prompt('What is your name?')
  alert(`Nice to meet you ${name}.`)

  let year = prompt('What year would you like to go to? (YYYY)')

  if (year >= 2015) {
    let choice1 = prompt(
      "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B - Biff/G - Griff)"
    )
    switch (choice1) {
      case 'b':
        {
          let choice2 = prompt(
            'Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? (S - Stand and Fight /R - Run away)'
          )
          switch (choice2) {
            case 's':
              alert(
                'Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.'
              )
              break
            case 'S':
              alert(
                'Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.'
              )
              break
            case 'r':
              alert(
                "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
              )
              break
            case 'R':
              alert(
                "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
              )
              break
            default:
              alert('Invalid response.')
          }
        }
        break
      case 'g': {
        let choice1 = prompt(
          'Griff is asking you if you are in, or out. What do you say? (I - In /O - Out)'
        )
        switch (choice1) {
          case 'i':
            alert(
              'Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.'
            )
            break
          case 'I':
            alert(
              'Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.'
            )
            break
          case 'o':
            alert(
              'Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.'
            )
            break
          case 'O':
            alert(
              'Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.'
            )
            break
          default:
            alert('Invalid response.')
        }
        break
      }
      default:
        alert('Invalid response.')
    }
  } else if (year >= 1985 && year <= 2014) {
    let newName = prompt(
      "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would like to go by until then?"
    )
    alert(`Welcome to the future, ${newName}.`)
  } else if (year >= 1955 && year <= 1984) {
    let choice1 = prompt(
      "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y - Yes /N - No /S - Set her up with George)"
    )
    switch (choice1) {
      case 'y':
        alert(
          "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955."
        )
        break
      case 'Y':
        alert(
          "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955."
        )
        break
      case 'n':
        alert(
          'Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.'
        )
        break
      case 'N':
        alert(
          'Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.'
        )
        break
      case 's':
        alert(
          'Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.'
        )
        break
      case 'S':
        alert(
          'Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.'
        )
        break
      default:
        alert('Invalid response.')
    }
  } else if (year >= 0 && year < 1955) {
    let choice1 = prompt(
      "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H - Horses / M - Moonshine / T - Train)"
    )
    switch (choice1) {
      case 'h':
        alert(
          "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it."
        )
        break
      case 'H':
        alert(
          "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it."
        )
        break
      case 'm':
        alert(
          "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855."
        )
        break
      case 'M':
        alert(
          "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855."
        )
        break
      case 't':
        let choice2 = prompt(
          'Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T - Take her/L - Leave her)'
        )
        switch (choice2) {
          case 't':
            alert(
              "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her."
            )
            break
          case 'l':
            alert(
              'Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.'
            )
            break
          case 'T':
            alert(
              "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her."
            )
            break
          case 'L':
            alert(
              'Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.'
            )
            break
          default:
            alert('Invalid response.')
        }
        break
      case 'T':
        let choice3 = prompt(
          'Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T - Take her/L - Leave her)'
        )
        switch (choice3) {
          case 't':
            alert(
              "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her."
            )
            break
          case 'l':
            alert(
              'Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.'
            )
            break
          case 'T':
            alert(
              "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her."
            )
            break
          case 'L':
            alert(
              'Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.'
            )
            break
          default:
            alert('Invalid response.')
        }
        break
      default:
        alert('Invalid response.')
    }
  }
  replay = confirm('Do you want to play again?')
}
