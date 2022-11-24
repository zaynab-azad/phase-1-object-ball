function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(name) {
  const obj = gameObject();
  if (obj.away.players[name] != undefined) {
    return obj.away.players[name].points;
  } else if (obj.home.players[name] != undefined) {
    return obj.home.players[name].points;
  } else {
    return -1;
  }
}
function shoeSize(name) {
  const obj = gameObject();
  if (obj.away.players[name] != undefined) {
    return obj.away.players[name].shoe;
  } else if (obj.home.players[name] != undefined) {
    return obj.home.players[name].shoe;
  } else {
    return -1;
  }
}
function teamColors(teamN) {
  const obj = gameObject();
  if (obj.away.teamName == teamN) {
    return obj.away.colors;
  } else if (obj.home.teamName == teamN) {
    return obj.home.colors;
  } else {
    return undefined;
  }
}
function teamNames() {
  const obj = gameObject();
  return [obj.away.teamName, obj.home.teamName];
}
function playerNumbers(teamN) {
  let arrayNumbers = [];
  const obj = gameObject();
  if (teamN == obj.away.teamName) {
    for (let player in obj.away.players) {
      arrayNumbers.push(obj.away.players[player].number);
    }
    return arrayNumbers;
  } else if (teamN == obj.home.teamName) {
    for (let player in obj.home.players) {
      arrayNumbers.push(obj.home.players[player].number);
    }
    return arrayNumbers;
  } else {
    return undefined;
  }
}

function playerStats(pName) {
  const obj = gameObject();
  if (obj.home.players[pName] != undefined) {
    return obj.home.players[pName];
  } else if (obj.away.players[pName] != undefined) {
    return obj.away.players[pName];
  } else {
    return undefined;
  }
}

function bigShoeRebounds() {
  const obj = gameObject();
  let largestShoe = 0;
  let LSPlayerRebounds = 0;

  for (let player in obj.away.players) {
    if (obj.away.players[player].shoe > largestShoe) {
      largestShoe = obj.away.players[player].shoe;
      LSPlayerRebounds = obj.away.players[player].rebounds;
    }
  }
  for (let player in obj.home.players) {
    if (obj.home.players[player].shoe > largestShoe) {
      largestShoe = obj.home.players[player].shoe;
      LSPlayerRebounds = obj.home.players[player].rebounds;
    }
  }
  return LSPlayerRebounds;
}

function mostPointsScored() {
  const obj = gameObject();
  let mostPoint = 0;
  for (let team in obj) {
    for (let player in obj[team].players) {
      if (obj[team].players[player].points > mostPoint) {
        mostPoint = obj[team].players[player].points;
      }
    }
  }
  return mostPoint;
}

function winningTeam() {
  const obj = gameObject();
  let homeTotalPoint = 0;
  let awayTotalPoint = 0;
  for (let player in obj.home.players) {
    homeTotalPoint += obj.home.players[player].points;
  }
  for (let player in obj.away.players) {
    awayTotalPoint += obj.away.players[player].points;
  }
  return homeTotalPoint > awayTotalPoint
    ? `${obj.home.teamName} is the winner.`
    : `${obj.away.teamName} is the winner.`;
}

function playerWithLongestName() {
  const obj = gameObject();
  let longestName = "";
  for (let team in obj) {
    for (let player in obj[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

function doesLongNameStealATon() {
  const obj = gameObject();
  let longestName = playerWithLongestName();
  const steals =
    obj.home.players[longestName] != undefined
      ? obj.home.players[longestName]
      : obj.away.players[longestName].steals;
  for (let team in obj) {
    for (let player in obj[team].players) {
      if (obj[team].players[player].steals > steals) {
        return false;
      } else {
        return true;
      }
    }
  }
}
