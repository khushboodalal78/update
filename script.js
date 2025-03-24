const reviews = [
    {
      id: 1,
      name: 'Vince Taylor',
      job: 'McMOHAN TRANSPORTATION',
      img: 'me.jpg',
      text: "INTERHAUL LOGISTICS is the best!! I just focus on driving and arriving the destination at time, they take care of the rest",
    },
    {
      id: 2,
      name: 'Syed',
      job: 'ABBAS TRANSPORTATION',
      img: 'me1.jpg',
      text: 'My previous dispatchers will never show me the RATE CONFIRMATION, but with INTERHAUL LOGISTICS  every information I need is a click away.',
    },
    {
      id: 3,
      name: 'Chiki',
      job: 'XYZ CARRIERS',
      img: 'me2.jpg',
      text: 'INTERHAUL LOGISTICS provides more than just good loads, they know where I want to go, what my priorities are, and almost never fail to send me home when I need to go home',
    },
    {
      id: 4,
      name: 'Shayar',
      job: 'OPTIMUS PRIME LLC',
      img: 'me3.jpg',
      text: 'I never have to search anything on the phone while driving, whether it’s a restaurant, or a parking location, or a warehouse, my dispatcher will just send a link that I need to click ',
    },
    {
        id: 5,
        name: 'Me',
        job: 'STS PAK LLC',
        img: 'me4.jpg',
        text: 'Since I started working with INTERHAUL LOGISTICS, it feels like I have more hours in a day. With their Hours-Of-Service assistance I get more out of my ELD now ',
      },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });

  const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


