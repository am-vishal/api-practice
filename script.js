// Step:1
// ************************************************************************//
// fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     .then(Response => Response.json())
//     .then(data => console.log(data))
// ************************************************************************//

// Step:2
// ************************************************************************//
// (async function () {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json();
//     console.log(data)
// })()
// ************************************************************************//

// Step:3
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json()
//     console.log(data)
// }
// getQuote()
// ************************************************************************//

// Step:4
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json();

//     data.filter((key, num) => {
//         function newQuote() {
//             let content = key.content.rendered;
//             console.log(content)
//         }
//         newQuote()
//     })
// }
// getQuote()
// ************************************************************************//

// Step:5
// ************************************************************************//
async function getQuote() {
    const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
    const data = await resp.json();

    data.filter(function (item) {
        console.log(item.content.rendered[1])
        return item.content.rendered = [0]
    })
}
getQuote()
// ************************************************************************//


// Step:2
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     const data = await resp.json();
//     data.filter((key, num) => {
//         document.getElementById('newQuote').addEventListener('click', newQuote);
//         function newQuote() {
//             let content = key.content.rendered;
//             document.getElementById("id").innerHTML = content
//         }
//     })
// }
// getQuote()
// ************************************************************************//

// Step:2





// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     const data = await resp.json();
//     console.log(data)
// }
// getQuote()
//Filter Begin Here

// var myArray = [];
// data.split('\n').map(function (data) {
//     myArray.push(JSON.parse(data));
// });
// console.log(myArray);
// document.getElementById('newQuote').addEventListener('click', newQuote);

// function newQuote() {
//     console.log(content)
// }

// data.filter((key, num) => {

//     document.getElementById('newQuote').addEventListener('click', newQuote);
//     function newQuote() {
//         let content = key.content.rendered;
//         document.getElementById("id").innerHTML = content
//     }

// let author = key.author;
// console.log("author", author)
// console.log("content", content);
// document.getElementById("id").innerHTML = JSON.stringify(content);
// }) ////Filter End Here

// .filter((s) => s.distance >= distance && s.vybe >= vybe[0] && s.vybe <= vybe[1] && filterOut(s))
// .slice(currentPage * 8 - 8, currentPage * 8)
// .map((s) => {
//   return <DoubleCard key={s._id} cardData={s} />;
// })


// data.map((ele, num) => {

    // let content = ele.content.rendered;
    // let author = document.querySelector("#id").innerHTML = JSON.stringify({ content }, null, " ");
    // document.getElementById('newQuote').addEventListener('click', newQuote);

    // function newQuote() {
    //     console.log(content)
    // }

    // let author2 = document.querySelector("#id").innerHTML = content+num;
    // author.innerHTML = content

    // console.log("content", content);
    // document.getElementById("id").innerHTML = JSON.stringify(content);
    // document.getElementById("ide").innerHTML = JSON.stringify(content);
    // let content = ele.content.rendered;
    // console.log("content", content, num);
    // let cleanQuote = content.split(" ");
    // let wrapped = "[" + cleanQuote.join(",") + "]"
    // let obj = JSON.parse(wrapped)
    // console.log(obj)
// })
// }
// getQuote()







        // let cleanQuote = key.content.replace(/<\/?p[^>]*>/g, '');
        // let share = 'https://twitter.com/home?status=' + cleanQuote + ' Author: ' + key.title;
        // quote.innerHTML = key.content;
        // author.innerHTML = key.title;
        // console.log(quote, author, cleanQuote, share)




            // data.filter(key => {
            //     let quote = document.querySelector(".quote");
            //     let author = document.querySelector(".author");
            //     let cleanQuote = key.content.replace(/<\/?p[^>]*>/g, ''); // This way we remove <p> tag from quote (api has quotes with p tags)

            //     // let share = 'https://twitter.com/home?status=' + cleanQuote + ' Author: ' + key.title;
            //     // quote.innerHTML = key.content;
            //     // author.innerHTML = key.title;
            // });



        // const newQuote = document.getElementById('newQuote')
        // newQuote.addEventListener('click', getQuote); // new quote on button click
        // window.onload = getQuote; // new quote on page load
