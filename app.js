const quoteButton = document.querySelector('.quote-button');
const quote =  document.querySelector('.quote');
const author =  document.querySelector('.author');

const quotes = [
    {
        quote: '"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."',
        author: '- Mark Twain -'
    },
    {
        quote: '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."',
        author: '- Diane McLaren -'
    },
    {
        quote: '“Success usually comes to those who are too busy looking for it.”',
        author: '- Henry David Thoreau -'
    },
    {
        quote: '“Don’t let yesterday take up too much of today.”',
        author: '- Will Rogers -'
    },
    {
        quote: '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” ',
        author: '- Steve Jobs -'
    },
    {
        quote: '“You are the only problem you will ever have and you are the only solution. Change is inevitable, personal growth is always a personal decision.” ',
        author: '- Bob Proctor -'
    },
    {
        quote: '“The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.” ',
        author: '- Robert Kiyosaki -'
    },
    {
        quote: '“Most people are not going after what they want. Even some of the most serious goal seekers and goal setters, they are going after what they think they can get.” ',
        author: '- Bob Proctor -'
    },
    {
        quote: '“Rich people acquire assets. The poor and middle class acquire liabilities that they think are assets.” ',
        author: '- Robert Kiyosaki -'
    },
    {
        quote: '“If you do not get the chills when you set your goal you are not setting big enough goals.” ',
        author: '- Bob Proctor -'
    },
    {
        quote: '“Sight is what you see with your eyes, vision is what you see with your mind.” ',
        author: '- Robert Kiyosaki -'
    },
    {
        quote: '“The Subconscious mind can not tell the difference between what is real and what is imagined.” ',
        author: '- Bob proctor -'
    },
    {
        quote: '“Skills make you rich, not theories.” ',
        author: '-Robert Kiyosaki -'
    },
    {
        quote: '"Don not let the fear of the time it will take to accomplish something stand in the way of your doing it. The time will pass anyway; we might just as well put that passing time to the best possible use."',
        author: '- Earl Nightingle -'
    },
    {
        quote: '““Success is a poor teacher. We learn the most about ourselves when we fail, so don’t be afraid of failing. Failing is part of the process of success. You cannot have success without failure."',
        author: '- Bob Proctor -'
    },
    {
        quote: '“Do you want to know what you think about most of the time? Take a look at the results you are getting. That will tell you exactly what\s going on inside.” ',
        author: '- Bob Proctor -'
    },

    {
        quote: '“Life is about making an impact, not making an income. ” ',
        author: '- Kevin Kruse -'
    },
    {
        quote: '“Whatever the mind of man can conceive and believe, it can achieve. ” ',
        author: '- Napoleon Hill -'
    },
    {
        quote: '“Strive not to be a success, but rather to be of value. ” ',
        author: '- Albert Einstein -'
    },
    {
        quote: '“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ” ',
        author: '- Robert Frost-'
    },
    {
        quote: '“ I attribute my success to this: I never gave or took any excuse. ” ',
        author: '- Florence Nightingale -'
    },
    {
        quote: '“You miss 100% of the shots you don’t take. ” ',
        author: '- Wayne Gretzky -'
    },
    {
        quote: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed. ” ',
        author: '- Michael Jordan -'
    },
    {
        quote: '“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover ” ',
        author: '- Mark Twain -'
    },
    {
        quote: '“ The mind is everything. What you think you become. ” ',
        author: '- Budha -'
    },
    {
        quote: '“ Your time is limited, so don’t waste it living someone else’s life "',
        author: '- Steve Jobs -'
    },
    {
        quote: '“ I am not a product of my circumstances. I am a product of my decisions "',
        author: '- Stephen Covey -'
    },
    {
        quote: '“  Every child is an artist.  The problem is how to remain an artist once he grows up "',
        author: '- Pablo Picasso -'
    },
    {
        quote: '“   You can never cross the ocean until you have the courage to lose sight of the shore. "',
        author: '- Christopher Columbus -'
    },
    {
        quote: '“   I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
        author: '- Maya Angelou -'
    },
    {
        quote: '“ Either you run the day, or the day runs you. "',
        author: '- Jim Rohn -'
    },
    {
        quote: '“ The two most important days in your life are the day you are born and the day you find out why.. "',
        author: '- Mark Twain -'
    },
    {
        quote: '“ Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. "',
        author: '- Johann Wolfgang von Goethe -'
    },
    {
        quote: '“ There is only one way to avoid criticism: do nothing, say nothing, and be nothing. "',
        author: '- Aristotle -'
    },
    {
        quote: '“ Ask and it will be given to you; search, and you will find; knock and the door will be opened for you "',
        author: '- Jesus -'
    },
    {
        quote: '“  The only person you are destined to become is the person you decide to be. "',
        author: '- Ralph Waldo Emerson -'
    },
    {
        quote: '“  Go confidently in the direction of your dreams.  Live the life you have imagined. "',
        author: '- John Henry Thoreau -'
    },
    {
        quote: '“ Ask and it will be given to you; search, and you will find; knock and the door will be opened for you "',
        author: '- Jesus -'
    },

]

quoteButton.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    author.textContent = quotes[random].author;

    console.log(quotes[random]);
})