console.log('inject load');

const pages = 10;
let urls = [];

async function main() {
  console.log('inject main');

  //setInterval(work, 2000);
  let i = 0;
  function loop() {
    if (i++ === pages) {
      console.log(urls);
      return;
    }
    console.log('==============', i);
    setTimeout(work, 2000);
    setTimeout(loop, 5000);
  }
  loop();
}

function work() {
  u = getUrls();
  urls = urls.concat(u);
  clickNext();
  //console.log(urls);
}

function clickNext() {
  document.getElementsByClassName('next')[0].children[0].click();
}

function getUrls() {
  const joblist = document.getElementsByClassName('j_joblist')[0].children;
  const urlList = [];

  for (let i = 0; i < joblist.length; i++) {
    url = joblist[i].getElementsByClassName('el')[0].href;
    //console.log(url);
    urlList.push(url);
  }
  return urlList;
}

setTimeout(main, 2000);
//main();
