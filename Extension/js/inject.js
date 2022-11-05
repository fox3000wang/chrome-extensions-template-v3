console.log('inject load');

async function main() {
  url =
    'https://search.51job.com/list/020000,000000,0000,00,9,99,%25E6%2595%25B0%25E6%258D%25AE%25E5%2588%2586%25E6%259E%2590%25E5%25B8%2588,2,38.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare=&type__1458=n4IxnD0DyDgA9x0534%2Bx7ua1xRWoHsh4D';

  let temp = await superagent.get(url);
  console.log('data', JSON.stringify(temp));
}

setTimeout(main, 1000);
//main();
