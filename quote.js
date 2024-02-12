var quotes=[
   {
     quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams."
},
{
    quote: "Don't walk in front of me.. I may not follow Don't walk behind me.. I may not lead Walk beside me.. just be my friend"
},
    {
        quote: "You miss 100% of the shots you don't take." },

     {
     quote: "The best revenge is massive success."},

     {
     quote:"It's not what happens to you, but how you react to it that matters."},

    {
     quote: "Do not take life too seriously. You will not get out alive."},
     {
       
    quote: "A friend is someone who knows all about you and still loves you."}
];

function generateQuote(){

    var Number = Math.floor(Math.random()* quotes.length)
     
document.getElementById('Quote').innerHTML=  quotes[Number].quote;
}