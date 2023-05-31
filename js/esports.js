function displayUpcoming() {
  let upcoming = document.querySelector("#upcoming");
  let completed = document.querySelector("#completed");
  let upcomingMatch = document.querySelector("#about .container .upcoming");
  let completedMatch = document.querySelector("#about .container .completed");

  upcoming.style.backgroundColor = "#bd3541";
  completed.style.backgroundColor = "#fa4454";
  upcomingMatch.style.display = "block";
  completedMatch.style.display = "none";
}

function completedUpcoming() {
  let upcoming = document.querySelector("#upcoming");
  let completed = document.querySelector("#completed");
  let upcomingMatch = document.querySelector("#about .container .upcoming");
  let completedMatch = document.querySelector("#about .container .completed");

  completed.style.backgroundColor = "#bd3541";
  upcoming.style.backgroundColor = "#fa4454";
  upcomingMatch.style.display = "none";
  completedMatch.style.display = "block";
}
