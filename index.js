const chalk = require('chalk')

const describe = (description, callback) => {
  console.log(chalk.bold(description))
  callback()
}

const test = (description, callback) => {
  try {
    callback()
    console.log(chalk.green(`✔ Passed: ${description}`))
  } catch (error) {
    console.log(chalk.red(`✘ Failed: ${description}`))
    console.log(error)
  }
}

const it = test

const expect = expected => {
  return {
    toBe: actual => {
      if (expected !== actual) {
        throw new Error(`Expected ${chalk.green(expected)} but received ${chalk.red(actual)}`)
      }
    },
    // More assertions go here
  }
}

module.exports = {
  describe,
  test,
  it,
  expect
}