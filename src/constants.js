export const initialState = {
  orders: [
    {
      _id: Date.now().toString(16),
      orderNumber: 1,
      date: '22.08.2020',
      company: 'YetiCrab',
      courierName: 'Квашнин С.Е.',
      phoneNumber: '80123456789',
      comments: ['Номер получателя: 89876543210'],
      atiCode: 'https://ati.su/firms/12345/info'
    },
    {
      _id: Date.now().toString(16) + 1,
      orderNumber: 2,
      date: '23.08.2020',
      company: 'YetiCrab',
      courierName: 'Квашнин С.Е.',
      phoneNumber: '80123456789',
      comments: ['Номер получателя: 89876543210'],
      atiCode: 'https://ati.su/firms/14145/info'
    },
    {
      _id: Date.now().toString(16) + 2,
      orderNumber: 3,
      date: '23.08.2020',
      company: 'YetiCrab',
      courierName: 'Квашнин С.Е.',
      phoneNumber: '80123456789',
      comments: ['Номер получателя: 89876543210'],
      atiCode: 'https://ati.su/firms/14145/info'
    }
  ]
}
