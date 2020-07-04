
function showStats(){
  console.log($('#score').html())
	var name = $('#hero-name').html(),
  	score = parseInt($('#score').html()),
		level = $('#progress-span').html(),
		monsterskilled = $('#monsters-killed').html(),
		treasuresgotted = $('#treasures-gotted').html(),
		luckinessrating = $('#luckiness-rating').html();

  var scores = JSON.parse(localStorage.getItem('monstermash/scores') || '[]').concat({
    name,
    level,
    monsterskilled,
    treasuresgotted,
    luckinessrating,
    score
  })

  localStorage.setItem('monstermash/scores', JSON.stringify(scores))

  scores.sort((a, b) => a.score > b.score)

  var html = "<div id='stats-list'><h1>Game Over!</h1><h3>Top Scores</h3>"

  scores.slice(0, 4).forEach(({name, score, level, monsterskilled, treasuresgotted, luckinessrating}) => {
		html += `
			<span class='list_header'><h4>${name}</h4> (Level ${level})</span>
			<span class='list_score'>Score: ${score}</span>
			<ul>
				<li>Monsters Killed: ${monsterskilled}</li>
				<li>Treasures Gotted: ${treasuresgotted}</li>
				<li>Luckiness: ${luckinessrating}</li>
			</ul>`
	})

	var statsDiv = document.createElement("div");
	statsDiv.className = "stats_div";
	statsDiv.innerHTML = html;
	var wrapper = document.getElementById('game-wrapper');
	wrapper.innerHTML = "";
	wrapper.appendChild(statsDiv);

	var restartButton = document.createElement('a');
	var restartText = document.createTextNode("Try Again!");
	restartButton.addEventListener("click", () => window.location.reload());
	restartButton.id = "restart-button";
	restartButton.appendChild(restartText);
	//document.getElementById('game-wrapper').innerHTML = "";
	document.getElementById('game-wrapper').appendChild(restartButton);
	i = 0;
}
