function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(() => resolve('long time gone'), 1000)
  })
}

async function test() {
  const res = await takeLongTime()
  console.log(res)
}

test()


new Promise(resolve => console.log('aaa'))