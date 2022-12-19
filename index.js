const $root = document.querySelector('.root')

const options = [
  {
    name: 'Abelha',
    image: './assets/images/bee.png',
  },
  {
    name: 'Baleia',
    image: './assets/images/whale.png',
  },
  
  {
    name: 'Borboleta',
    image: './assets/images/butterfly.png',
  },

  {
    name: 'Cachorro',
    image: './assets/images/dog.png',
  },
  {
    name: 'Peixe',
    image: './assets/images/clown-fish.png',
  },
  {
    name: 'Vaca',
    image: './assets/images/cow.png',
  },
  {
    name: 'Caranguejo',
    image: './assets/images/crab.png',
  },
  {
    name: 'Elefante',
    image: './assets/images/elephant.png',
  },
  {
    name: 'Sapo',
    image: './assets/images/frog.png',
  },
  {
    name: 'Galinha',
    image: './assets/images/hen.png',
  },
  {
    name: 'Coruja',
    image: './assets/images/owl.png',
  },
  {
    name: 'Porco',
    image: './assets/images/pig.png',
  },

  {
    name: 'Cobra',
    image: './assets/images/snake.png',
  },
  {
    name: 'Esquilo',
    image: './assets/images/squirrel.png',
  },
  {
    name: 'Tartaruga',
    image: './assets/images/turtle.png',
  }
]

const getRandomOption = (quantity, result = []) => {
  const random = Math.floor(Math.random() * options.length)

  const evenExists = result.find((item) => item.name === options[random].name)

  if (!evenExists) result.push(options[random])

  if (result.length === quantity) {
    return result
  }

  if (result.find((item) => item.name === options[random].name)) {
    return getRandomOption(quantity, result)
  }

  return getRandomOption(quantity, result)
}

const printOptions = (quantity) => {
  const result = getRandomOption(quantity)
  const randomCorrect = Math.floor(Math.random() * result.length)

  const $optionsContainer = document.querySelector('.box-text')
  const $boxImage = document.querySelector('.box-image')

  const $newImage = document.createElement('img')
  $newImage.src = result[randomCorrect].image

  $boxImage.innerHTML = ''

  $boxImage.appendChild($newImage)

  $optionsContainer.innerHTML = ''

  result.forEach((item) => {
    const option = document.createElement('button')
    option.classList.add('button-option')
    option.textContent = item.name

    $optionsContainer.appendChild(option)

    option.addEventListener('click', () => {
      const $buttonList = document.querySelectorAll('.button-option')

      $buttonList.forEach(($item) => {
        $item.classList.add('wrong')
      })

      $buttonList[randomCorrect].classList.add('correct')

      setTimeout(() => {
        printOptions(quantity)
      }, 1000)
    })
  })
}

printOptions(3)