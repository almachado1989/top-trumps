const superheroes = [
  (captainAmerica = {
    alias: "Captain America",
    name: "Steve Rogers",
    strength: 7,
    speed: 5,
    technique: 7,
    range: 3,
    intelligence: 7,
    experience: 9,
    morality: 10,
    airborne: "No",
    quote: "I can do this all day",
    image:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/9EQZueVTaS9BwFdrZDdDWWHd1IdkIU.jpg",
  }),
  (spiderman = {
    alias: "Spiderman",
    name: "Peter Parker",
    strength: 8,
    speed: 8,
    technique: 6,
    range: 4,
    intelligence: 9,
    experience: 3,
    morality: 8,
    airborne: "No",
    quote:
      "You can’t be a friendly neighborhood spider-man if there is no neighborhood",
    image:
      "https://parade.com/.image/t_share/MTkwNTc4NzY1OTgxMDk5MTMz/spider-man.jpg",
  }),
  (ironman = {
    alias: "Iron Man",
    name: "Tony Stark",
    strength: 8,
    speed: 9,
    technique: 5,
    range: 10,
    intelligence: 10,
    experience: 7,
    morality: 5,
    airborne: "Yes",
    quote: "I am Iron Man",
    image:
      "https://www.koimoi.com/wp-content/new-galleries/2022/12/robert-downey-jr-is-back-baby-iron-man-is-finally-coming-back-to-avengers-001.jpg",
  }),
  (thor = {
    alias: "Thor",
    name: "Thor Odinson",
    strength: 9,
    speed: 8,
    technique: 7,
    range: 5,
    intelligence: 6,
    experience: 10,
    morality: 9,
    airborne: "Yes",
    quote: "Because that's what heroes do",
    image:
      "https://heroichollywood.com/wp-content/uploads/2019/05/Thor-Chris-Hemsworth-Avengers-Endgame.jpg",
  }),
  (blackwidow = {
    alias: "Black Widow",
    name: "Natasha Romanov",
    strength: 3,
    speed: 3,
    technique: 10,
    range: 6,
    intelligence: 8,
    experience: 9,
    morality: 4,
    airborne: "No",
    quote: "Whatever it takes",
    image:
      "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2021/07/MER80a606a7d4977802277b7d2a75fc9_blackwidow0709.jpg",
  }),
  (hulk = {
    alias: "The Incredible Hulk",
    name: "Hulk",
    strength: 10,
    speed: 6,
    technique: 1,
    range: 1,
    intelligence: 1,
    experience: 7,
    morality: 1,
    airborne: "No",
    quote: "Hulk always angry",
    image:
      "https://www.looper.com/img/gallery/our-hulk-expert-answers-the-worlds-most-difficult-hulk-questions/intro-1611178512.jpg",
  }),
  5,
  "some string",
]

superheroes.forEach((superhero) => {
  const keys = Object.keys(superhero)
  const card = document.createElement("div")
  const cardWrapper = document.querySelector(".card-wrapper")
  const logo = document.createElement("div")
  logo.classList.add("logo")

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "image") {
      const img = document.createElement("img")
      card.classList.add("card")
      img.src = superhero.image
      card.appendChild(img)
      continue
    }

    const div = document.createElement("div")

    if (keys[i] === "alias") {
      div.innerHTML = superhero[keys[i]]
      div.classList.add("name")
      card.appendChild(div)
      continue
    }

    if (keys[i] === "quote") {
      div.innerHTML = '"' + superhero[keys[i]] + '"'
      div.classList.add("quote")
      card.appendChild(div)
      continue
    }

    div.classList.add("category")
    div.innerHTML =
      `<span class="key">${capitalize(keys[i])}: </span>` +
      `<span class="value">${superhero[keys[i]]}</span>`
    card.appendChild(div)
    card.appendChild(logo)
    cardWrapper.appendChild(card)
  }
})

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}
