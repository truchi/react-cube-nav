export default {
  groupBy: (arr, key) => {
    const isFunc = typeof key === 'function'

    return arr.reduce((reduced, item) => {
      const by = isFunc
        ? key(item)
        : item[key]

      reduced[by] = reduced[by] || []
      reduced[by].push(item)

      return reduced
    }, {})
  }
, def: (o)    => typeof o !== 'undefined'
}
