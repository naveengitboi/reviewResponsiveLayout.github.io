const reviews = [
    {
        id:1,
        name : 'Purnima',
        job: 'AI/ML Dev',
        img:'/toa-heftiba-O3ymvT7Wf9U-unsplash (1).jpg',

        Text:'Responding to positive reviews is an excellent way of showing gratitude and responsiveness towards your customers. After receiving a 5-star review, it’s important that you take time to respond and let your customers know that the review’s impact is real.'
    },

    {
        
        id:2,
        name : 'J Naveen',
        job: 'WebDeveloper',
        img:'/petr-sevcovic-auCjz0gucr0-unsplash (1).jpg',
        Text:'Getting good customer reviews shows not only you but also to your potential customers the great customer experience you offer. New customers will feel more comfortable trusting your brand and making a purchase after seeing '
    },
    {
        id:3,
        name : 'Sai',
        job: 'JS Dev',
        img:'/prince-akachi-4Yv84VgQkRM-unsplash (2).jpg',
        Text:'The best reviews are exposing details of the real-life enjoyable experience your customers had with your business. The best reviews show that the experience was so good that decided to write a little more about it online or on social media.'
    },
    {
        id:4,
        name : 'Meghanath',
        job: 'Full Stack',
        img:'/ian-dooley-d1UPkiFd04A-unsplash (1).jpg',
        Text:'You already know that feedback from happy and unhappy customers helps in business improvement. But it’s a good thing when customers share their positive experiences offline and online. And responding to them'
    },
    {
        id:5,
        name : 'Nandini',
        job: 'Backend Dev',
        img:'/michael-dam-mEZ3PoFGs_k-unsplash (1).jpg',
        Text:'Responding to positive reviews is an excellent way of showing gratitude and responsiveness towards your customers. After receiving a 5-star review, it’s important that you take time to respond and let your customers know that the review’s impact is real.'
    },
    {
        id:6,
        name : 'Sindhuja',
        job: 'Python Dev',
        img:'/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash (1).jpg',
        Text:'Yes, you should keep each response personal and dedicated to the specific customer experience. But it’s always a good help to have few templates of the most common reviews you can use over and over again with a little bit of customization and personalization.'
    }


]

const personReview = document.querySelector('.personReview')

const personName = document.querySelector('.personName')
const personProffesion = document.querySelector('.personProffesion')
const personImg = document.querySelector('.personImg')
const nextBtn = document.querySelector('#right')
const prevBtn = document.querySelector('#left')

let count = 0


nextBtn.addEventListener('click', () => {
    count++

        if(count>= reviews.length){
            count = 0
        }

        doSomething(count)


})

prevBtn.addEventListener('click', () => {
    count--

       if(count<0)
       {
        count = reviews.length -1
       }
     doSomething(count)


})


function doSomething(person){
    let item = reviews[person]
    personImg.src = item.img

    personName.innerHTML = item.name
    personProffesion.innerHTML = item.job
    personReview.innerHTML = item.Text
}