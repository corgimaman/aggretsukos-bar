const { Length } = require('../models');

const length = [
  {
    length: '3:35',
  },
  {
    length: '4:51',
  },
  {
    length: '4:55',
  },
  {
    length: "3:00",
  },
  {
    length: '3:46',
  },
  {
    length: '3:36',
  },
  {
    length: '3:26',
  },
  {
    length: '3:42',
  },
  {
    length: '3:55',
  },
  {
    length: '4:08',
  },
  {
    length: '3:33',
  },
  {
    length: '4:53',
  },
  {
    length: '3:17',
  },
  {
    length: '4:36',
  },
  {
    length: "3:25",
  },
  {
    length: '3:20',
  },
  {
    length: "4:18",
  },
  {
    length: '4:45',
  },
  {
    length: '3:45',
  },
  {
    length: '3:34',
  },
  {
    length: '3:06',
  },
  {
    length: '3:42',
  },
  {
    length: '3:46',
  },
  {
    length: '2:53',
  },
  {
    length: '4:29',
  },
  {
    length: '3:13',
  },
  {
    length: '3:31',
  },
  {
    length: '4:05',
  },
  {
    length: '2:22',
  },
  {
    length: '2:05',
  },
  {
    length: '4:08',
  },
  {
    length: '4:09',
  },
  {
    length: "3:31",
  }
];

const seedlength = () => Length.bulkCreate(lengthData);

module.exports = seedlength;