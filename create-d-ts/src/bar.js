export default function bar(a,b) {
  if (typeof a === "number" && typeof b === 'number') {
    return a + b
  } else {
    throw new Error('a 和 b 需为数字类型')
  }
}
