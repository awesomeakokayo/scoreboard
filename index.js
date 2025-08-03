homeScore = document.getElementById("hscore")
hcount = 0

function haddone() {
    hcount = hcount += 1
    homeScore.innerText = hcount
    console.log(homeScore)
}

function haddtwo() {
    hcount = hcount += 2
    homeScore.innerText = hcount
    console.log(homeScore)
}

function haddthree() {
    hcount = hcount += 3
    homeScore.innerText = hcount
    console.log(homeScore)
}

guestScore = document.getElementById("gscore")
gcount = 0

function gaddone() {
    gcount = gcount += 1
    guestScore.innerText = gcount
    console.log(gcount)
}

function gaddtwo() {
    gcount = gcount += 2
    guestScore.innerText = gcount
    console.log(gcount)
}

function gaddthree() {
    gcount = gcount += 3
    guestScore.innerText = gcount
    console.log(gcount)
}

leadTeam = document.getElementById("lead-team")

function lead() {
    if (hcount > gcount) {
        leadTeam.innerText = "Home Team is leading"
    }
    else if (hcount == gcount) {
        leadTeam.innerText = "It is a Draw"
    }
    else {
        leadTeam.innerText = "Away Team is leading"
    }
}