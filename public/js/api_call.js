//! Async Await API Call

const getQuotes = async () => {
  const API = "https://api.quotable.io/random";
  try {
    let data = await fetch(API);
    let realdata = await data.json();
    console.log(realdata.content);
  } catch (error) {
    console.log(error);
  }
};

getQuotes();
