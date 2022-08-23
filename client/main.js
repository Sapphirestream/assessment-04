const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortune-btn");
const tarotBtn = document.querySelector("#get-tarot-btn");
const addTarotBtn = document.querySelector("#addTarotBtn");

const mainText = document.querySelector("#output-text");
const tarotHolder = document.querySelector("#tarot-hold");
const titleInput = document.getElementById("titleInput");
const picInput = document.getElementById("picInput");
const uprightInput = document.getElementById("uprightInput");
const invertedInput = document.getElementById("invertedInput");
const quoteInput = document.getElementById("quoteInput");

const deleteInput = document.getElementById("deleteInput");
const deleteTarotBtn = document.getElementById("deleteBtn");

const changeTarotBtn = document.getElementById("changeTarotBtn");

let Tarot = [];

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    mainText.textContent = data;
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune").then((res) => {
    const data = res.data;
    mainText.textContent = data;
  });
};

const drawTarot = () => {
  axios.get("http://localhost:4000/api/tarot").then((res) => {
    //console.log(res.data);
    {
      path = res.data;

      //creates picture
      const picture = document.querySelector("#picture");
      picture.setAttribute("src", path.picture);

      //creates title
      const title = document.querySelector("#title");
      title.textContent = path.title;

      //create text
      const upright = document.querySelector("#upright");
      upright.textContent = "Upright // " + path.upright;

      const inverted = document.querySelector("#inverted");
      inverted.textContent = "Inverted // " + path.inverted;

      const quote = document.querySelector("#quote");
      quote.textContent = '"' + path.quote + '"';
      quote.classList.add("italics");
    }
  });
};

const addTarot = () => {
  const newCard = {
    title: titleInput.value,
    picture: picInput.value,
    upright: uprightInput.value,
    inverted: invertedInput.value,
    quote: quoteInput.value,
  };

  titleInput.value = "";
  picInput.value = "";
  uprightInput.value = "";
  invertedInput.value = "";
  quoteInput.value = "";

  axios
    .post("http://localhost:4000/api/tarot", newCard)
    .then((res) => {
      Tarot = res.data;
      console.log(Tarot);
    })
    .catch((error) => console.log(error));
};

const deleteTarot = () => {
  const card = deleteInput.value;
  axios
    .delete(`http://localhost:4000/api/tarot/${card}`)
    .then((res) => {
      Tarot = res.data;
      console.log(Tarot);
    })
    .catch((error) => console.log(error));
};

const changeTarot = () => {
  const newCard = {
    title: titleInput.value,
    picture: picInput.value,
    upright: uprightInput.value,
    inverted: invertedInput.value,
    quote: quoteInput.value,
  };

  titleInput.value = "";
  picInput.value = "";
  uprightInput.value = "";
  invertedInput.value = "";
  quoteInput.value = "";

  axios
    .put("http://localhost:4000/api/tarot", newCard)
    .then((res) => {
      Tarot = res.data;
      console.log(Tarot);
    })
    .catch((error) => console.log(error));
};

changeTarotBtn.addEventListener("click", changeTarot);
deleteTarotBtn.addEventListener("click", deleteTarot);
addTarotBtn.addEventListener("click", addTarot);
tarotBtn.addEventListener("click", drawTarot);
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
