// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: conor-otoole
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03/sw.js", {
    scope: "/ICS2O-Unit3-03/",
  })
}

/**
 * This function calculates the volume of a pyramid
 */
function enterClicked() {
  //input
  const radius = parseFloat(document.getElementById("radius-of-sphere").value)

  //process
  const volume = (4.0 * Math.PI * radius ** 3) / 3.0

  //output
  document.getElementById("volume-of-sphere").innerHTML =
    "The volume of the sphere is: " + volume.toFixed(2) + " cm³."
}