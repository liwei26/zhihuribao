const Mock = require('mockjs');

function getRImg1 () {
  return Mock.Random.image('100x80', Mock.Random.hex())
}
Mock.mock(/getNewsList/, {
  'list|7': [{
    'src': getRImg1 (),
    'title': '@ctitle(8, 20)'
  }]
});

function getRImg () {
  return Mock.Random.image('800x400', Mock.Random.hex())
}
function getRImg2 () {
  return Mock.Random.image('50x50', Mock.Random.hex())
}
Mock.mock(/getSlides/, [
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 1,
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 2,
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 3,
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 4,
  }
]);

Mock.mock(/getdetailList/, [
  {
    'src': getRImg (),
    'desc': '@ctitle(8,25)',
    'title': '@ctitle(8, 20)',
    'img': getRImg2 (),
    'name': '@name',
    'sign': '@csentence(3,20)',
    'text': '@cparagraph( 1, 10 )'
  }
]);
