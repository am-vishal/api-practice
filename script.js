// Example:1
// ************************************************************************//
// fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     .then(Response => Response.json())
//     .then(data => console.log(data))
// ************************************************************************//

// Example:2
// ************************************************************************//
// (async function () {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json();
//     console.log(data)
// })()
// ************************************************************************//

// Example:3
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json()
//     console.log(data)
// }
// getQuote()
// ************************************************************************//

// Example:4
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

// Example:5
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
//     const data = await resp.json();

//     data.filter(function (item, index) {
//         let filterkeys = Object.keys(item.content.rendered)
//         console.log(filterkeys)
//     })
// }
// getQuote()
// ************************************************************************//

// Example:6
// ************************************************************************//
// async function getData() {
//     const resp = await fetch("data.json");
//     const data = await resp.json();
//     let user0 = data.users[0]
//     let user1 = data.users[1].firstName
//     console.log(user0.firstName, user1)
// } getData()
// ************************************************************************//


// Example:7
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

// Example:8
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     const data = await resp.json();
//     // console.log(data[0].content.rendered)
//     // const singleData = data[0].content.rendered;
//     // console.log(singleData)

//     for (let i = 0; i <= 9; i++) {
//         // console.log(data[i].content.rendered)
//     }

//     data.filter((key, i) => {
//         // console.log(key.content.rendered, i)
//         // console.log(data[i].content.rendered, i)
//     })

//     data.map((key, i) => {
//         // console.log(key.content.rendered, i)
//         // console.log(data[i].content.rendered, i)
//     })

//     data.forEach((key, i) => {
//         // console.log(key.content.rendered, i)
//         // console.log(data[i].content.rendered, i)
//     })
// }
// getQuote()
// ************************************************************************//

// Example:9
// ************************************************************************//
// async function getData() {
//     const resp = await fetch("data.json")
//     const data = await resp.json();

//     console.log(data.users.length)
//     const length = data.users.length;
//     for (let i = 0; i <= length - 1; i++) {
//         console.log(data.users[i].firstName)
//     }
// }
// getData()
// ************************************************************************//

// Example:10
// ************************************************************************//
// async function getQuote() {
//     const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
//     const data = await resp.json();
//     for (let i = 0; i <= 9; i++) {
//         console.log(data[i].content.rendered)
//     }
// }
// getQuote()
// ************************************************************************//

// Example:11
// ************************************************************************//
async function getQuote() {
    const resp = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
    const data = await resp.json();
    // let cleanQuote = key.content.replace(/<\/?p[^>]*>/g, '');
    let cleanQuote = key.content.rendered.replace(/<\/?p[^>]*>/g, '\n');
    window.onload = function () {
        document.getElementById("id").onclick += function getDisplay() {
            document.getElementById("id").innerHTML = cleanQuote
        };
    }
}
const newQuote = document.getElementById('id')
newQuote.addEventListener('click', getDisplay); // new quote on button click
window.onload = getDisplay; // new quote on page load

getQuote()
// ************************************************************************//