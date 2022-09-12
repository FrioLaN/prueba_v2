"use strict";

const d = document,
  $ = (query) => d.querySelector(query);

fetch("./markdown/prueba.md")
  .then((data) => (data.ok ? data.text() : Promise.reject(data)))
  .then((res) => {
    $("main").innerHTML = new showdown.Converter().makeHtml(res);
  })
  .catch((err) => {
    console.log(err);
  });
