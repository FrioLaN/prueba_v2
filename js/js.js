"use strict";

const printHi = (number) => {
  if (number >= 5) {
    console.log("hola");
  } else {
    console.log("adios");
  }
};

printHi(Math.round(Math.random() * 1));
