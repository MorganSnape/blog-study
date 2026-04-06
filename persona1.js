function persona() {
  let age = 0;

  const getAge = () => age
  const gain1Year = () => {age ++}

  return {
    getAge,
    gain1Year
  }
}

const persona1 = persona()
console.log(`Persona 1: edad: ${persona1.getAge()}`)
console.log('Persona 1 a aumentado su edad')
persona1.gain1Year()
persona1.gain1Year()
console.log(`Persona 1: edad: ${persona1.getAge()}`)

console.log(persona1.age)