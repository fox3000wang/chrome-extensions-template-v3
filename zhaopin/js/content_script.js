console.log('inject load');

async function main() {
  console.log('inject main');

  const txt = document.getElementsByClassName('cn')[0].children[0].innerText;
  console.log(txt);

  window.close();
}

setTimeout(main, 2000);
//main();
