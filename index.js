const request = require('request');
const Metascraper = require('metascraper');
const TelegramBot = require('node-telegram-bot-api');
const log = console.log;

const MY_FILMS_BOT_TOKEN = '441803877:AAENVzEX0We-b3FLZV9pMsuv83QNr1oxqzo';
const filmsBot = new TelegramBot(MY_FILMS_BOT_TOKEN, {polling: true});

const isUrl = function(msg){
    return (msg.entities && Array.isArray(msg.entities) && msg.entities.length > 0 && msg.entities[0].type === 'url')
}

const scrapeRULES = {
    ...Metascraper.RULES,
    descriprion: [
        ...Metascraper.RULES.description,
        $ => $('.pi_text').first().text()
    ]
}

filmsBot.on('message', (msg) => {
    log(msg);
    // if(isUrl(msg)){
    //     Metascraper.scrapeUrl(msg.text, scrapeRULES).then( data => log(data) );
    // }
});
filmsBot.on('channel_post', (msg) => {
    log(msg);
});