import { highlightedApartments } from '../../../queries/useQueryHighlightedApartments'
export const albumMock: highlightedApartments[] = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit amet, maximus.',
    number: '01',
    images: [
      {
        id: 1,
        url: 'https://pix6.agoda.net/hotelImages/167/167578/167578_15020923560025224264.jpg?s=1024x768',
        favorite: false,
      },
      {
        id: 2,
        url: 'https://pix6.agoda.net/hotelImages/167/167578/167578_15020923560025224264.jpg?s=1024x768',
        favorite: true,
      }
    ],
    highlighted: true,
    available: true,
    coverImages: [
      {
        id: 2,
        url: 'https://pix6.agoda.net/hotelImages/167/167578/167578_15020923560025224264.jpg?s=1024x768',
        favorite: true,
      }
    ]

  }
]
