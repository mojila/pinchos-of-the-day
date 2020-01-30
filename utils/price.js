const price = function(num) {
    let result = Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    if (result.substring(result.length - 2, result.length) === '00') {
        result = result.substring(0, result.length - 3)
    }

    return result
}

export default price