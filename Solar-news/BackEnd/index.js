const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const axios = require('axios')
const Praser = require('rss-parser')



const parser = new Praser()
app.use(cors())




async function nw(req,res) {
  
const options = {
  method: 'POST',
  url: 'https://newsnow.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'eb2023cc13msh39e63fbee6f428cp117140jsn1b5e2af19c41',
    'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
  },
  data: {
    text: 'Europe',
    region: 'wt-wt',
    max_results: 25
  }
};

try {
	const response =  axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

}

app.get('/ws',nw)


// async function fetchNews(req,res) {
//  const {search,from,Page} = req.query
//   try {
//     const {data} = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=${from}&sortBy=publishedAt&page=${Page}&language=en&pageSize=10&apiKey=b8099662d85f4fbea3b114e739356814`)
//        res.send(data)

//   } catch (error) {
//     res.status(500).send({error})
//     console.error('Error fetching news:', error);
//   }

// }









async function Rss(req,res) {
  let News = []
  try {

    let feed = await parser.parseURL('https://www.canarymedia.com/rss.rss');
  //  console.log(feed);

    feed.items.forEach(item => {

      News.push({ creator: item.creator, title: item.title, link: item.link, pubDate: item.pubDate, author: item.author, content: item.content })
      // console.log(item.title + ':' + item.link)
    });
   
    res.send({News})
  } catch (err) {

   res.status(500).send({error:'internal error'})
    console.log(err)
  }
}

app.get('/News',Rss)



app.listen(900, () => {
  console.log("server is running")
})