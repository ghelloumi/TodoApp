const fetchImage = async () => {
  const myInit = {method: 'GET', mode: 'cors', cache: 'default'}

  try {
    const res = await fetch('http://aws.random.cat/meow', myInit)
    return res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}

export default fetchImage()
