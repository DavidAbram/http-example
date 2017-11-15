
const Zagreb = [4, 5, 5, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const Split  = [8, 7, 7, 7, 7, 7, 7, 7, 8, 10, 11, 12, 13, 14, 14, 14, 12, 12, 11, 11, 10, 9, 9, 9];
const Ljubljana = [1, 1, 1, 2, 2, 2, 1, 0, 1, 2, 4, 5, 6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2];

module.exports = () => {
  const date = new Date();
  const hours = date.getHours();
  return {
    data: [
      {
        city: [
          {
            name: 'Zagreb',
          },
          {
            temperature: Zagreb[hours],
          },
        ]
      },
      {
        city: [
          {
            name: 'Split',
          },
          {
            temperature: Split[hours],
          },
        ]
      },
      {
        city: [
          {
            name: 'Ljubljana',
          },
          {
            temperature: Ljubljana[hours],
          },
        ]
      },
    ]
  }
};