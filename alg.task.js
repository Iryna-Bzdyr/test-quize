//87, 226, 559
//559 Дано натуральне число n. Знайти всі менше числа n числа Марсена (2 в степені n -1)
function mersenneArray(n) {
    const mersenneArray = []
    for (let i = 1; i < n; i++) {
        if (2 ** i - 1 >= n) {
            break
        }
        mersenneArray.push(2 ** i - 1)
    }
    return mersenneArray
}

console.log(mersenneArray(300))

//226 Дані натуральні числа m,n. Получити всі їх натуральні спільні кратні числа менші mn

function multipleNumbers(m, n) {
    const multipleArray = []
    for (let i = 1; i <= m * n; i++) {
        if (i % n === 0 && i % m === 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}

console.log(multipleNumbers(5, 35))


//87 Дані натуральні числа n,m. Получити суму m останній цифр числа n

function findSum(n, m) {
    const nToArray = Array.from(String(n), Number).reverse()
    let sum = 0
    for (let i = 0; i < m; i++) {
        sum += nToArray[i]
    }
    return sum
}

console.log(findSum(2356, 3))
