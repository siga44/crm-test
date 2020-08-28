export const keysToLabels = arr => {
  return arr.map(key => {
    switch (key) {
      case '_id':
        return 'Уникальный ID'
      case 'orderNumber':
        return 'Номер заказа'
      case 'date':
        return 'Дата'
      case 'company':
        return 'Название компании'
      case 'courierName':
        return 'ФИО курьера'
      case 'phoneNumber':
        return 'Номер телефона'
      case 'comments':
        break
      case 'atiCode':
        return 'АТИ'
    }
  })
}

export const indexById = (arr, id) => {
  return arr.findIndex(item => item._id === id)
}

export const elementById = (arr, id) => {
  return arr.find(item => item._id === id)
}
