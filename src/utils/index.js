export const keysToLabels = arr => {
  return arr.map(key => {
    switch (key) {
      case '_id':
        return {
          text: 'Уникальный ID',
          type: 'text'
        }
      case 'orderNumber':
        return {
          text: 'Номер заказа',
          type: 'number'
        }
      case 'date':
        return {
          text: 'Дата',
          type: 'date'
        }
      case 'company':
        return {
          text: 'Название компании',
          type: 'text'
        }
      case 'courierName':
        return {
          text: 'ФИО курьера',
          type: 'text'
        }
      case 'phoneNumber':
        return {
          text: 'Номер телефона',
          type: 'tel'
        }
      case 'comments':
        break
      case 'atiCode':
        return {
          text: 'АТИ',
          type: 'url'
        }
    }
  })
}

export const indexById = (arr, id) => {
  return arr.findIndex(item => item._id === id)
}

export const elementById = (arr, id) => {
  return arr.find(item => item._id === id)
}
