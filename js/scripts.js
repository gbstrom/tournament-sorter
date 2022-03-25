function produceTeams() {
  document.getElementById('day1').innerHTML = '';
  document.getElementById('day2').innerHTML = '';
  document.getElementById('day3').innerHTML = '';
  document.getElementById('day4').innerHTML = '';  
  let nameString = document.getElementById('name').value;
  const nameArray = nameString.split(',');

  let day1team1, day1team2, day1team3, day1team4, day1team5, day1team6;
  let day2team1, day2team2, day2team3, day2team4, day2team5, day2team6;
  let day3team1, day3team2, day3team3, day3team4, day3team5, day3team6;
  let day4team1, day4team2, day4team3, day4team4, day4team5, day4team6;
  let day5team1, day5team2, day5team3, day5team4, day5team5, day5team6;
  let day6team1, day6team2, day6team3, day6team4, day6team5, day6team6;
  let day7team1, day7team2, day7team3, day7team4, day7team5, day7team6;

  let case9day1, case9day2, case9day3, case9day4;
  let case10day1, case10day2, case10day3, case10day4;
  let case11day1, case11day2, case11day3, case11day4;
  let case12day1, case12day2, case12day3, case12day4;
  let case13day1, case13day2, case13day3, case13day4;
  let case14day1, case14day2, case14day3, case14day4;
  let case15day1, case15day2, case15day3, case15day4, case15day5, case15day6, case15day7;
  let case16day1, case16day2, case16day3, case16day4, case16day5, case16day6, case16day7;
  let case17day1, case17day2, case17day3, case17day4, case17day5, case17day6, case17day7;
  let case18day1, case18day2, case18day3, case18day4;
  let case19day1, case19day2, case19day3, case19day4;
  let case20day1, case20day2, case20day3, case20day4;

  if (nameArray.length === 9) {
    console.log('JS thinks we are in case 9')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      case9day1 = {team1: day1team1, team2: day1team2, team3: day1team3}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8]]
      case9day2 = {team1: day2team1, team2: day2team2, team3: day2team3}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[8]]
      day3team2 = [nameArray[1], nameArray[5], nameArray[6]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      case9day3 = {team1: day3team1, team2: day3team2, team3: day3team3}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[7]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[6]]
      case9day4 = {team1: day4team1, team2: day4team2, team3: day4team3}
      
      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case9day1.team1}<br>Team 2: ${case9day1.team2}<br>Team 3: ${case9day1.team3}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case9day2.team1}<br>Team 2: ${case9day2.team2}<br>Team 3: ${case9day2.team3}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case9day3.team1}<br>Team 2: ${case9day3.team2}<br>Team 3: ${case9day3.team3}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case9day4.team1}<br>Team 2: ${case9day4.team2}<br>Team 3: ${case9day4.team3}`;
  } else if (nameArray.length === 10) {
    console.log('JS thinks we are in case 10')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[9]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      case10day1 = {team1: day1team1, team2: day1team2, team3: day1team3}

      //I can't find a way to get nameArray[9] not to pair up with earlier partners
      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8], nameArray[9]]
      case10day2 = {team1: day2team1, team2: day2team2, team3: day2team3}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[8], nameArray[9]]
      day3team2 = [nameArray[1], nameArray[5], nameArray[6]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      case10day3 = {team1: day3team1, team2: day3team2, team3: day3team3}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[7]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8],nameArray[9]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[6]]
      case10day4 = {team1: day4team1, team2: day4team2, team3: day4team3}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case10day1.team1}<br>Team 2: ${case10day1.team2}<br>Team 3: ${case10day1.team3}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case10day2.team1}<br>Team 2: ${case10day2.team2}<br>Team 3: ${case10day2.team3}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case10day3.team1}<br>Team 2: ${case10day3.team2}<br>Team 3: ${case10day3.team3}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case10day4.team1}<br>Team 2: ${case10day4.team2}<br>Team 3: ${case10day4.team3}`;
  } else if (nameArray.length === 11) {
    console.log('JS thinks we are in case 11')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[9]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5], nameArray[10]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      case11day1 = {team1: day1team1, team2: day1team2, team3: day1team3}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7], nameArray[10]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8], nameArray[9]]
      case11day2 = {team1: day2team1, team2: day2team2, team3: day2team3}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[8], nameArray[9]]
      day3team2 = [nameArray[1], nameArray[5], nameArray[6], nameArray[10]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      case11day3 = {team1: day3team1, team2: day3team2, team3: day3team3}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[7]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8], nameArray[9]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[6], nameArray[10]]
      case11day4 = {team1: day4team1, team2: day4team2, team3: day4team3}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case11day1.team1}<br>Team 2: ${case11day1.team2}<br>Team 3: ${case11day1.team3}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case11day2.team1}<br>Team 2: ${case11day2.team2}<br>Team 3: ${case11day2.team3}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case11day3.team1}<br>Team 2: ${case11day3.team2}<br>Team 3: ${case11day3.team3}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case11day4.team1}<br>Team 2: ${case11day4.team2}<br>Team 3: ${case11day4.team3}`;
  } else if (nameArray.length === 12) {
    console.log('JS thinks we are in case 12')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[7], nameArray[11], nameArray[10]]
      day1team4 = [nameArray[8], nameArray[9], nameArray[6]]
      case12day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4}

      day2team1 = [nameArray[0], nameArray[3], nameArray[7]] 
      day2team2 = [nameArray[1], nameArray[4], nameArray[6]]
      day2team3 = [nameArray[2], nameArray[8], nameArray[10]]
      day2team4 = [nameArray[5], nameArray[9], nameArray[11]]
      case12day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4}

      day3team1 = [nameArray[1], nameArray[7], nameArray[8]]
      day3team2 = [nameArray[2], nameArray[3], nameArray[11]]
      day3team3 = [nameArray[5], nameArray[6], nameArray[0]]
      day3team4 = [nameArray[9], nameArray[10], nameArray[4]]
      case12day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4}

      // at this point I cannot avoid redundancy:

      day4team1 = [nameArray[0], nameArray[8], nameArray[4]]
      day4team2 = [nameArray[1], nameArray[10], nameArray[3]]
      day4team3 = [nameArray[2], nameArray[5], nameArray[7]]
      day4team4 = [nameArray[6], nameArray[9], nameArray[11]]
      case12day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case12day1.team1}<br>Team 2: ${case12day1.team2}<br>Team 3: ${case12day1.team3}<br>Team 4: ${case12day1.team4}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case12day2.team1}<br>Team 2: ${case12day2.team2}<br>Team 3: ${case12day2.team3}<br>Team 4: ${case12day2.team4}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case12day3.team1}<br>Team 2: ${case12day3.team2}<br>Team 3: ${case12day3.team3}<br>Team 4: ${case12day3.team4}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case12day4.team1}<br>Team 2: ${case12day4.team2}<br>Team 3: ${case12day4.team3}<br>Team 4: ${case12day4.team4}`;
  } else if (nameArray.length === 13) {
    console.log('JS thinks we are in case 13')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[6], nameArray[7], nameArray[12], nameArray[11]]
      day1team4 = [nameArray[8], nameArray[9], nameArray[10]]
      case13day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4}

      day2team1 = [nameArray[0], nameArray[3], nameArray[7]] 
      day2team2 = [nameArray[1], nameArray[4], nameArray[6]]
      day2team3 = [nameArray[2], nameArray[8], nameArray[11], nameArray[10]]
      day2team4 = [nameArray[5], nameArray[9], nameArray[12]]
      case13day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4}

      day3team1 = [nameArray[1], nameArray[7], nameArray[8]]
      day3team2 = [nameArray[2], nameArray[3], nameArray[12]]
      day3team3 = [nameArray[5], nameArray[6], nameArray[10], nameArray[0]]
      day3team4 = [nameArray[9], nameArray[11], nameArray[4]]
      case13day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4}

      // at this point I cannot avoid redundancy, but I did my best.

      day4team1 = [nameArray[0], nameArray[7], nameArray[11], nameArray[5]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[10]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[9]]
      day4team4 = [nameArray[6], nameArray[8], nameArray[12]]
      case13day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4}  

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case13day1.team1}<br>Team 2: ${case13day1.team2}<br>Team 3: ${case13day1.team3}<br>Team 4: ${case13day1.team4}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case13day2.team1}<br>Team 2: ${case13day2.team2}<br>Team 3: ${case13day2.team3}<br>Team 4: ${case13day2.team4}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case13day3.team1}<br>Team 2: ${case13day3.team2}<br>Team 3: ${case13day3.team3}<br>Team 4: ${case13day3.team4}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case13day4.team1}<br>Team 2: ${case13day4.team2}<br>Team 3: ${case13day4.team3}<br>Team 4: ${case13day4.team4}`;
    } else if (nameArray.length === 14) {
    console.log('JS thinks we are in case 14')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[6], nameArray[7], nameArray[8], nameArray[13]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11], nameArray[12]]
      case14day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7], nameArray[11]]
      day2team3 = [nameArray[2], nameArray[9], nameArray[12], nameArray[8]]
      day2team4 = [nameArray[5], nameArray[10], nameArray[13]]
      case14day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4}
      
      day3team1 = [nameArray[1], nameArray[8], nameArray[9]]
      day3team2 = [nameArray[2], nameArray[3], nameArray[13]]
      day3team3 = [nameArray[5], nameArray[7], nameArray[11], nameArray[0]]
      day3team4 = [nameArray[6], nameArray[10], nameArray[12], nameArray[4]]
      case14day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4}

      // at this point I cannot avoid redundancy, but I did my best.

      day4team1 = [nameArray[0], nameArray[8], nameArray[12], nameArray[5]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[11]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[10]]
      day4team4 = [nameArray[7], nameArray[9], nameArray[13], nameArray[6]]
      case14day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case14day1.team1}<br>Team 2: ${case14day1.team2}<br>Team 3: ${case14day1.team3}<br>Team 4: ${case14day1.team4}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case14day2.team1}<br>Team 2: ${case14day2.team2}<br>Team 3: ${case14day2.team3}<br>Team 4: ${case14day2.team4}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case14day3.team1}<br>Team 2: ${case14day3.team2}<br>Team 3: ${case14day3.team3}<br>Team 4: ${case14day3.team4}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case14day4.team1}<br>Team 2: ${case14day4.team2}<br>Team 3: ${case14day4.team3}<br>Team 4: ${case14day4.team4}`;
  } else if (nameArray.length === 15) {
    console.log('JS thinks we are in case 15')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14]]
      case15day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6],] 
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[9], nameArray[12]]
      day2team4 = [nameArray[5], nameArray[10], nameArray[13]]
      day2team5 = [nameArray[8], nameArray[11], nameArray[14]] 
      case15day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[14]]
      day3team2 = [nameArray[1], nameArray[8], nameArray[9]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[13]]
      day3team4 = [nameArray[5], nameArray[7], nameArray[11]]
      day3team5 = [nameArray[6], nameArray[10], nameArray[12]]
      case15day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5}

      day4team1 = [nameArray[0], nameArray[8], nameArray[12]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[11]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[10]]
      day4team4 = [nameArray[5], nameArray[6], nameArray[14]]
      day4team5 = [nameArray[7], nameArray[9], nameArray[13]]
      case15day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5}
      
      // day5team1 = [nameArray[0], nameArray[5], nameArray[9]]
      // day5team2 = [nameArray[1], nameArray[10], nameArray[14]]
      // day5team3 = [nameArray[2], nameArray[6], nameArray[11]]
      // day5team4 = [nameArray[3], nameArray[7], nameArray[12]]
      // day5team5 = [nameArray[4], nameArray[8], nameArray[13]]
      // case15day5 = {team1: day5team1, team2: day5team2, team3: day5team3, team4: day5team4, team5: day5team5}
      
      // day6team1 = [nameArray[0], nameArray[7], nameArray[10]]
      // day6team2 = [nameArray[1], nameArray[6], nameArray[13]]
      // day6team3 = [nameArray[2], nameArray[5], nameArray[8]]
      // day6team4 = [nameArray[3], nameArray[9], nameArray[14]]
      // day6team5 = [nameArray[4], nameArray[11], nameArray[12]]
      // case15day6 = {team1: day6team1, team2: day6team2, team3: day6team3, team4: day6team4, team5: day6team5}
      
      // day7team1 = [nameArray[0], nameArray[11], nameArray[13]]
      // day7team2 = [nameArray[1], nameArray[5], nameArray[12]]
      // day7team3 = [nameArray[2], nameArray[7], nameArray[14]]
      // day7team4 = [nameArray[3], nameArray[8], nameArray[10]]
      // day7team5 = [nameArray[4], nameArray[6], nameArray[9]]
      // case15day7 = {team1: day7team1, team2: day7team2, team3: day7team3, team4: day7team4, team5: day7team5}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case15day1.team1}<br>Team 2: ${case15day1.team2}<br>Team 3: ${case15day1.team3}<br>Team 4: ${case15day1.team4}<br>Team 5: ${case15day1.team5}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case15day2.team1}<br>Team 2: ${case15day2.team2}<br>Team 3: ${case15day2.team3}<br>Team 4: ${case15day2.team4}<br>Team 5: ${case15day2.team5}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case15day3.team1}<br>Team 2: ${case15day3.team2}<br>Team 3: ${case15day3.team3}<br>Team 4: ${case15day3.team4}<br>Team 5: ${case15day3.team5}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case15day4.team1}<br>Team 2: ${case15day4.team2}<br>Team 3: ${case15day4.team3}<br>Team 4: ${case15day4.team4}<br>Team 5: ${case15day4.team5}`;
      // document.getElementById('day5').innerHTML = 'Day 5: ' + JSON.stringify(case15day5);
      // document.getElementById('day6').innerHTML = 'Day 6: ' + JSON.stringify(case15day6);
      // document.getElementById('day7').innerHTML = 'Day 7: ' + JSON.stringify(case15day7);

  } else if (nameArray.length === 16) {
    console.log('JS thinks we are in case 16')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[15]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14]]
      case16day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[9], nameArray[12]]
      day2team4 = [nameArray[5], nameArray[10], nameArray[13]]
      day2team5 = [nameArray[8], nameArray[11], nameArray[14], nameArray[15]] 
      case16day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[14]]
      day3team2 = [nameArray[1], nameArray[8], nameArray[9]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[13]]
      day3team4 = [nameArray[5], nameArray[7], nameArray[11]]
      day3team5 = [nameArray[6], nameArray[10], nameArray[12], nameArray[15]]
      case16day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5}

      day4team1 = [nameArray[0], nameArray[8], nameArray[12]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[11]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[10]]
      day4team4 = [nameArray[5], nameArray[6], nameArray[14]]
      day4team5 = [nameArray[7], nameArray[9], nameArray[13], nameArray[15]]
      case16day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5}
      
      // after this point, nameArray[15] can have no non-redundant home as far as I can tell, but I have assigned it anyway.
      // day5team1 = [nameArray[0], nameArray[5], nameArray[9]]
      // day5team2 = [nameArray[1], nameArray[10], nameArray[14], nameArray[15]]
      // day5team3 = [nameArray[2], nameArray[6], nameArray[11]]
      // day5team4 = [nameArray[3], nameArray[7], nameArray[12]]
      // day5team5 = [nameArray[4], nameArray[8], nameArray[13]]
      // case16day5 = {team1: day5team1, team2: day5team2, team3: day5team3, team4: day5team4, team5: day5team5}
      
      // day6team1 = [nameArray[0], nameArray[7], nameArray[10]]
      // day6team2 = [nameArray[1], nameArray[6], nameArray[13]]
      // day6team3 = [nameArray[2], nameArray[5], nameArray[8], nameArray[15]]
      // day6team4 = [nameArray[3], nameArray[9], nameArray[14]]
      // day6team5 = [nameArray[4], nameArray[11], nameArray[12]]
      // case16day6 = {team1: day6team1, team2: day6team2, team3: day6team3, team4: day6team4, team5: day6team5}
      
      // day7team1 = [nameArray[0], nameArray[11], nameArray[13]]
      // day7team2 = [nameArray[1], nameArray[5], nameArray[12]]
      // day7team3 = [nameArray[2], nameArray[7], nameArray[14]]
      // day7team4 = [nameArray[3], nameArray[8], nameArray[10]]
      // day7team5 = [nameArray[4], nameArray[6], nameArray[9], nameArray[15]]
      // case16day7 = {team1: day7team1, team2: day7team2, team3: day7team3, team4: day7team4, team5: day7team5}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case16day1.team1}<br>Team 2: ${case16day1.team2}<br>Team 3: ${case16day1.team3}<br>Team 4: ${case16day1.team4}<br>Team 5: ${case16day1.team5}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case16day2.team1}<br>Team 2: ${case16day2.team2}<br>Team 3: ${case16day2.team3}<br>Team 4: ${case16day2.team4}<br>Team 5: ${case16day2.team5}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case16day3.team1}<br>Team 2: ${case16day3.team2}<br>Team 3: ${case16day3.team3}<br>Team 4: ${case16day3.team4}<br>Team 5: ${case16day3.team5}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case16day4.team1}<br>Team 2: ${case16day4.team2}<br>Team 3: ${case16day4.team3}<br>Team 4: ${case16day4.team4}<br>Team 5: ${case16day4.team5}`;
      // document.getElementById('day5').innerHTML = 'Day 5: ' + JSON.stringify(case16day5);
      // document.getElementById('day6').innerHTML = 'Day 6: ' + JSON.stringify(case16day6);
      // document.getElementById('day7').innerHTML = 'Day 7: ' + JSON.stringify(case16day7);
  } else if (nameArray.length === 17) {
    console.log('JS thinks we are in case 17')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[15]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]] 
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14], nameArray[16]]
      case17day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6], nameArray[16]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[9], nameArray[12]]
      day2team4 = [nameArray[5], nameArray[10], nameArray[13]]
      day2team5 = [nameArray[8], nameArray[11], nameArray[14], nameArray[15]] 
      case17day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[14]]
      day3team2 = [nameArray[1], nameArray[8], nameArray[9], nameArray[16]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[13]]
      day3team4 = [nameArray[5], nameArray[7], nameArray[11]]
      day3team5 = [nameArray[6], nameArray[10], nameArray[12], nameArray[15]]
      case17day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5}

      day4team1 = [nameArray[0], nameArray[8], nameArray[12]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[11]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[10], nameArray[16]]
      day4team4 = [nameArray[5], nameArray[6], nameArray[14]]
      day4team5 = [nameArray[7], nameArray[9], nameArray[13], nameArray[15]]
      case17day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5}
      
      // after this point, nameArray[15] and nameArray[16] can have no non-redundant home as far as I can tell, but I have assigned them anyway.
      // day5team1 = [nameArray[0], nameArray[5], nameArray[9]]
      // day5team2 = [nameArray[1], nameArray[10], nameArray[14], nameArray[15]]
      // day5team3 = [nameArray[2], nameArray[6], nameArray[11]]
      // day5team4 = [nameArray[3], nameArray[7], nameArray[12], nameArray[16]]
      // day5team5 = [nameArray[4], nameArray[8], nameArray[13]]
      // case17day5 = {team1: day5team1, team2: day5team2, team3: day5team3, team4: day5team4, team5: day5team5}
      
      // day6team1 = [nameArray[0], nameArray[7], nameArray[10]]
      // day6team2 = [nameArray[1], nameArray[6], nameArray[13], nameArray[16]]
      // day6team3 = [nameArray[2], nameArray[5], nameArray[8], nameArray[15]]
      // day6team4 = [nameArray[3], nameArray[9], nameArray[14]]
      // day6team5 = [nameArray[4], nameArray[11], nameArray[12]]
      // case17day6 = {team1: day6team1, team2: day6team2, team3: day6team3, team4: day6team4, team5: day6team5}
      
      // day7team1 = [nameArray[0], nameArray[11], nameArray[13]]
      // day7team2 = [nameArray[1], nameArray[5], nameArray[12]]
      // day7team3 = [nameArray[2], nameArray[7], nameArray[14], nameArray[16]]
      // day7team4 = [nameArray[3], nameArray[8], nameArray[10]]
      // day7team5 = [nameArray[4], nameArray[6], nameArray[9], nameArray[15]]
      // case17day7 = {team1: day7team1, team2: day7team2, team3: day7team3, team4: day7team4, team5: day7team5}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case17day1.team1}<br>Team 2: ${case17day1.team2}<br>Team 3: ${case17day1.team3}<br>Team 4: ${case17day1.team4}<br>Team 5: ${case17day1.team5}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case17day2.team1}<br>Team 2: ${case17day2.team2}<br>Team 3: ${case17day2.team3}<br>Team 4: ${case17day2.team4}<br>Team 5: ${case17day2.team5}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case17day3.team1}<br>Team 2: ${case17day3.team2}<br>Team 3: ${case17day3.team3}<br>Team 4: ${case17day3.team4}<br>Team 5: ${case17day3.team5}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case17day4.team1}<br>Team 2: ${case17day4.team2}<br>Team 3: ${case17day4.team3}<br>Team 4: ${case17day4.team4}<br>Team 5: ${case17day4.team5}`;
      // document.getElementById('day5').innerHTML = 'Day 5: ' + JSON.stringify(case17day5);
      // document.getElementById('day6').innerHTML = 'Day 6: ' + JSON.stringify(case17day6);
      // document.getElementById('day7').innerHTML = 'Day 7: ' + JSON.stringify(case17day7);
    
  } else if (nameArray.length === 18) {
    console.log('JS thinks we are in case 18')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14]]
      day1team6 = [nameArray[15], nameArray[16], nameArray[17]]
      case18day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5, team6: day1team6}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8]]
      day2team4 = [nameArray[9], nameArray[12], nameArray[15]]
      day2team5 = [nameArray[10], nameArray[13], nameArray[16]]
      day2team6 = [nameArray[11], nameArray[14], nameArray[17]]
      case18day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5, team6: day2team6}
      
      day3team1 = [nameArray[0], nameArray[4], nameArray[8]]
      day3team2 = [nameArray[1], nameArray[5], nameArray[6]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      day3team4 = [nameArray[9], nameArray[13], nameArray[17]]
      day3team5 = [nameArray[10], nameArray[4], nameArray[15]]
      day3team6 = [nameArray[11], nameArray[12], nameArray[16]]
      case18day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5, team6: day3team6}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[7]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[6]]
      day4team4 = [nameArray[9], nameArray[14], nameArray[16]]
      day4team5 = [nameArray[10], nameArray[12], nameArray[17]]
      day4team6 = [nameArray[11], nameArray[13], nameArray[15]]
      case18day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5, team6: day4team6}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case18day1.team1}<br>Team 2: ${case18day1.team2}<br>Team 3: ${case18day1.team3}<br>Team 4: ${case18day1.team4}<br>Team 5: ${case18day1.team5}<br>Team 6: ${case18day1.team6}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case18day2.team1}<br>Team 2: ${case18day2.team2}<br>Team 3: ${case18day2.team3}<br>Team 4: ${case18day2.team4}<br>Team 5: ${case18day2.team5}<br>Team 6: ${case18day1.team6}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case18day3.team1}<br>Team 2: ${case18day3.team2}<br>Team 3: ${case18day3.team3}<br>Team 4: ${case18day3.team4}<br>Team 5: ${case18day3.team5}<br>Team 6: ${case18day1.team6}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case18day4.team1}<br>Team 2: ${case18day4.team2}<br>Team 3: ${case18day4.team3}<br>Team 4: ${case18day4.team4}<br>Team 5: ${case18day4.team5}<br>Team 6: ${case18day1.team6}`;
  } else if (nameArray.length === 19) {
    console.log('JS thinks we are in case 19')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[18]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14]]
      day1team6 = [nameArray[15], nameArray[16], nameArray[17]]
      case19day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5, team6: day1team6}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8]]
      day2team4 = [nameArray[9], nameArray[12], nameArray[15], nameArray[18]]
      day2team5 = [nameArray[10], nameArray[13], nameArray[16]]
      day2team6 = [nameArray[11], nameArray[14], nameArray[17]]
      case19day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5, team6: day2team6}
      
      day3team1 = [nameArray[13], nameArray[4], nameArray[8], nameArray[18]]
      day3team2 = [nameArray[1], nameArray[5], nameArray[6]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      day3team4 = [nameArray[9], nameArray[0], nameArray[17]]
      day3team5 = [nameArray[10], nameArray[4], nameArray[15]]
      day3team6 = [nameArray[11], nameArray[12], nameArray[16]]
      case19day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5, team6: day3team6}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[7]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[9]]
      day4team4 = [nameArray[6], nameArray[14], nameArray[16], nameArray[18]]
      day4team5 = [nameArray[10], nameArray[12], nameArray[17]]
      day4team6 = [nameArray[11], nameArray[13], nameArray[15]]
      case19day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5, team6: day4team6}

      document.getElementById('outputHeading').innerText = 'Your teams are:'
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case19day1.team1}<br>Team 2: ${case19day1.team2}<br>Team 3: ${case19day1.team3}<br>Team 4: ${case19day1.team4}<br>Team 5: ${case19day1.team5}<br>Team 6: ${case19day1.team6}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case19day2.team1}<br>Team 2: ${case19day2.team2}<br>Team 3: ${case19day2.team3}<br>Team 4: ${case19day2.team4}<br>Team 5: ${case19day2.team5}<br>Team 6: ${case19day1.team6}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case19day3.team1}<br>Team 2: ${case19day3.team2}<br>Team 3: ${case19day3.team3}<br>Team 4: ${case19day3.team4}<br>Team 5: ${case19day3.team5}<br>Team 6: ${case19day1.team6}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case19day4.team1}<br>Team 2: ${case19day4.team2}<br>Team 3: ${case19day4.team3}<br>Team 4: ${case19day4.team4}<br>Team 5: ${case19day4.team5}<br>Team 6: ${case19day1.team6}`;
  } else if (nameArray.length === 20) {
    console.log('JS thinks we are in case 20')
      day1team1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[18]]
      day1team2 = [nameArray[3], nameArray[4], nameArray[5], nameArray[19]]
      day1team3 = [nameArray[6], nameArray[7], nameArray[8]]
      day1team4 = [nameArray[9], nameArray[10], nameArray[11]]
      day1team5 = [nameArray[12], nameArray[13], nameArray[14]]
      day1team6 = [nameArray[15], nameArray[16], nameArray[17]]
      case20day1 = {team1: day1team1, team2: day1team2, team3: day1team3, team4: day1team4, team5: day1team5, team6: day1team6}

      day2team1 = [nameArray[0], nameArray[3], nameArray[6]]
      day2team2 = [nameArray[1], nameArray[4], nameArray[7]]
      day2team3 = [nameArray[2], nameArray[5], nameArray[8]]
      day2team4 = [nameArray[9], nameArray[12], nameArray[15], nameArray[18]]
      day2team5 = [nameArray[10], nameArray[13], nameArray[16]]
      day2team6 = [nameArray[11], nameArray[14], nameArray[17], nameArray[19]]
      case20day2 = {team1: day2team1, team2: day2team2, team3: day2team3, team4: day2team4, team5: day2team5, team6: day2team6}
      
      day3team1 = [nameArray[13], nameArray[4], nameArray[8], nameArray[18]]
      day3team2 = [nameArray[12], nameArray[5], nameArray[6], nameArray[19]]
      day3team3 = [nameArray[2], nameArray[3], nameArray[7]]
      day3team4 = [nameArray[9], nameArray[0], nameArray[17]]
      day3team5 = [nameArray[10], nameArray[4], nameArray[15]]
      day3team6 = [nameArray[11], nameArray[1], nameArray[16]]
      case20day3 = {team1: day3team1, team2: day3team2, team3: day3team3, team4: day3team4, team5: day3team5, team6: day3team6}
      
      day4team1 = [nameArray[0], nameArray[5], nameArray[11]]
      day4team2 = [nameArray[1], nameArray[3], nameArray[8]]
      day4team3 = [nameArray[2], nameArray[4], nameArray[9]]
      day4team4 = [nameArray[6], nameArray[14], nameArray[16], nameArray[18]]
      day4team5 = [nameArray[10], nameArray[12], nameArray[17]]
      day4team6 = [nameArray[7], nameArray[13], nameArray[15], nameArray[19]]
      case20day4 = {team1: day4team1, team2: day4team2, team3: day4team3, team4: day4team4, team5: day4team5, team6: day4team6}

      document.getElementById('outputHeading').innerText = 'Your teams are:'      
      document.getElementById('day1').innerHTML = `Day 1: <br>Team 1: ${case20day1.team1}<br>Team 2: ${case20day1.team2}<br>Team 3: ${case20day1.team3}<br>Team 4: ${case20day1.team4}<br>Team 5: ${case20day1.team5}<br>Team 6: ${case20day1.team6}`;
      document.getElementById('day2').innerHTML = `Day 2: <br>Team 1: ${case20day2.team1}<br>Team 2: ${case20day2.team2}<br>Team 3: ${case20day2.team3}<br>Team 4: ${case20day2.team4}<br>Team 5: ${case20day2.team5}<br>Team 6: ${case20day1.team6}`;
      document.getElementById('day3').innerHTML = `Day 3: <br>Team 1: ${case20day3.team1}<br>Team 2: ${case20day3.team2}<br>Team 3: ${case20day3.team3}<br>Team 4: ${case20day3.team4}<br>Team 5: ${case20day3.team5}<br>Team 6: ${case20day1.team6}`;
      document.getElementById('day4').innerHTML = `Day 4: <br>Team 1: ${case20day4.team1}<br>Team 2: ${case20day4.team2}<br>Team 3: ${case20day4.team3}<br>Team 4: ${case20day4.team4}<br>Team 5: ${case20day4.team5}<br>Team 6: ${case20day1.team6}`;
  } else {
    console.log('JS thinks we are in case whatever')
    document.getElementById('day1').innerHTML = "You must enter a sequence of names with at least 9 and no more than 20 members."
  }
}
