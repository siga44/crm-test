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
        return 'Комментарии'
      case 'atiCode':
        return 'АТИ'
    }
  })
}
