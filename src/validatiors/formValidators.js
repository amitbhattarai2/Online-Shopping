import React from 'react'

export const usernameValidator = (username) => {
  var letters = /^[0-9a-zA-Z]+$/
  if (username.match(letters)) return true
  return false
}

export const nameValidator = (name) => {
  var letters = /^[a-zA-Z]+$/
  if (name.match(letters)) return true
  return false
}

export const emailValidator = (email) => {
  var letters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(letters)) return true
  return false
}

export const passwordValidator = (password) => {
  var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
  if (password.match(letters)) return true
  return false
}
