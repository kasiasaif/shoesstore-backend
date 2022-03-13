import bcrypt from 'bcryptjs';
const data ={
    users: [
        {
          name: 'Kasia',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products:[
        {
        //    _id: '1',
            name: 'Nike Air Zoom Alphafly',
            slug: 'nike-air-run-alfa',
            image:'/images/nike1.webp',
            brand:'Nike',
            category:'Run',
            description:"Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT% Flyknit. Responsive foam is combined with 2 Zoom Air units to push your running game forwards for your next marathon or road race.",
            price: 268,
            countInStock:1,
            rating: 4.5,
            numReviews: 15,
            
        },
        {
        //    _id: '2',
            name: 'Nike ZoomX Vaporfly Next 2',
            slug: 'nike-air-zoom',
            // category:'Run',
            image:'/images/nike2.webp',
            brand:'Nike',
            category:'Run',
            description:"Continue the next evolution of speed with a racing shoe made to help you chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",
            price: 269,
            countInStock:10,
            rating: 5.0,
            numReviews: 5,
        },
        {
        //    _id: '3',
            name: 'Nike Air Force 1',
            slug: 'air-force',
            // category:'Casual',
            image:'/images/nike3.webp',
            brand:'Nike',
            category:'Casual',
            description:"We brought back the '82 hardwood icon with an icy cool colour.Star details on the heel and on a hang tag team up with the standard crisp leather and the stacked heel to make these sneakers your winter go-to.",
            price: 114,
            countInStock:5,
            rating: 3.5,
            numReviews:8
    
},
      
       
        {
        //    _id: '4',
        name: 'Nike Air Force 1 Low By You',
        slug: 'nike-air-you',
        // category:'running',
        image:'/images/nike4.webp',
            brand:'Nike',
            category:'Casual',
            description:"You're no stranger to the iconic AF-1.Crisp overlays, bold accents and Air-Sole cushioning have been celebrating its hoops-inspired heritage for decades.Make the legacy your own by putting premium leather and suede where you want it, selecting the type of rubber traction and finishing it with a one-of-a-kind mark.Now it's personal.",
            price: 110,
            countInStock:2,
            rating: 5.0,
            numReviews: 30
    
},
        {
        //    _id: '5',
        name: 'Nike Air Max 90 Premium',
        slug: 'nike-air-premium',
        // category:'running',
        image:'/images/nike5.webp',
            brand:'Nike',
            category:'Casual',
            description:"Nothing as comfortable.Nothing as proven.The Nike Air Max 90 Premium stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.Detachable chain accents celebrate '90s flair with the perfect amount of flash.",
            price: 140,
            countInStock:50,
            rating: 5.0,
            numReviews: 17
    
},
        {
        //    _id: '6',
            name: 'Nike Metcon 7',
            slug: 'nike-metcon-7',
            // category:'fit',
            image:'/images/nike7.webp',
            brand:'Nike',
            category:'Run',
            description:"The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
            price: 115,
            countInStock:8,
            rating: 3.5,
            numReviews: 13}
          , {
            //    _id: '7',
            name: 'Nike ZoomX Vaporfly',
            slug: 'nike-zoomX',
            // category:'Run',
            image:'/images/nike8.jpeg',
                brand:'Nike',
                category:'Trainers',
                description:"Continue the next evolution of speed with a racing shoe made to help you chase new goals and records.It helps improve comfort and breathability with a redesigned upper.From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",
                price: 190,
                countInStock:10,
                rating: 5.0,
                numReviews: 22
        
    }, {
      //    _id: '8',
      name: 'Nike SuperRep Go 2',
      slug: 'nike-super-rep',
      // category:'running',
      image:'/images/nike9.webp',
          brand:'Nike',
          category:'Trainers',
          description:"The Nike SuperRep Go 2 combines lightweight cushioning underfoot and breathable mesh up top to get you moving comfortably in circuit-based fitness classes or while streaming workouts at home.With the supportive arc on the side and extra flexibility in the sole, you're ready to go for 1 more rep..",
          price: 89,
          countInStock:7,
          rating: 3.0,
          numReviews: 5
  
}, {
  //    _id: '9',
  name: 'Nike Air Max 95 Essential',
  slug: 'nike-essential',
  // category:'casual',
  image:'/images/nike10.webp',
      brand:'Nike',
      category:'Casual',
      description:"Taking inspiration from the human body and running DNA, the Nike Air Max 95 Essential mixes unbelievable comfort with head-turning style.The iconic side panels represent muscles while visible Nike Air in the heel and forefoot cushions your every step.",
      price: 154,
      countInStock:4,
      rating: 5.0,
      numReviews: 10

}, {
  //    _id: '10',
  name: 'Nike ZoomX Vaporfly NEXT% 2 Ekiden',
  slug: 'nike-ekiden',
  // category:'Trainers',
  image:'/images/nike11.webp',
      brand:'Nike',
      category:'Trainers',
      description:"The Nike ZoomX Vaporfly NEXT% 2 Ekiden is the next evolution of speed for reaching new goals and records, from 10Ks to marathons. A revamped upper helps improve comfort and breathability, while the same responsive cushioning and secure support help push you towards your personal best.",
      price: 234,
      countInStock:1,
      rating: 4.5,
      numReviews: 12

},
 {
  //    _id: '11',
  name: 'Nike Air Max Pre-Day SE',
  slug: 'nike-pre-day',
  // category:'Trainers',
  image:'/images/nike12.webp',
      brand:'Nike',
      category:'Trainers',
      description:"Taking the classic look of heritage Nike running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look ready for today's world. The upper keeps the retro track aesthetic you know best in a bold metallic finish. The new Air window energises the look, mixing head-turning style with unbelievably soft cushioning.",
      price: 129,
      countInStock:4,
      rating: 2.5,
      numReviews: 7

},
 {
  //    _id: '12',
  name: 'Nike Crater Remixa',
  slug: 'nike-remixa',
  // category:'Trainers',
  image:'/images/nike13.webp',
      brand:'Nike',
      category:'Trainers',
      description:"Today's world brings choices.There's no reason to second-guess yourself with the Nike Crater Remixa.Made from at least 20% recycled materials by weight, it bridges futuristic details with a fresh design that pieces together reclaimed materials.The super-plush Crater foam midsole feels like you're walking on clouds while the canvas and synthetic leather upper lets you dress for the occasion.",
      price: 72,
      countInStock:6,
      rating: 5.0,
      numReviews: 33

},
 {
  //    _id: '13',
  name: 'Kyrie Infinity',
  slug: 'nike-aura',
  // category:'Trainers',
  image:'/images/nike14.webp',
      brand:'Nike',
      category:'Casual',
      description:"The faster Kyrie slows down, the quicker he can speed up or change direction. His ability to control his movement keeps defenders guessing—and him in control. The Kyrie Infinity provides a tight custom fit, enhanced responsiveness in the forefoot and traction up the sides, allowing players to accelerate and decelerate on demand and take advantage of the separation they create.",
      price: 167,
      countInStock:5,
      rating: 4.5,
      numReviews: 114

},
 {
  //    _id: '14',
  name: 'Air Force 1 07',
  slug: 'nike-07',
  // category:'Trainers',
  image:'/images/nike15.webp',
      brand:'Nike',
      category:'Casual',
      description:"The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.",
      price: 114,
      countInStock:1,
      rating: 5.0,
      numReviews: 12

},
 {
  //    _id: '15',
  name: 'NikeCourt Legacy',
  slug: 'nike-court',
  // category:'Trainers',
  image:'/images/nike16.webp',
      brand:'Nike',
      category:'Casual',
      description:"Honouring a history in tennis culture, the NikeCourt Legacy brings you a classic style in a modern, street-worthy design.Made from crisp leather, with heritage stitching and a retro Swoosh design, it lets you blend sport and fashion.",
      price: 79,
      countInStock:3,
      rating: 2.5,
      numReviews: 22

},
 {
  //    _id: '16',
  name: 'Nike Air Max 2021',
  slug: 'nike-21',
  // category:'Trainers',
  image:'/images/nike17.webp',
      brand:'Nike',
      category:'Trainers',
      description:"We could use a lot of superlatives to describe these shoes. We could tell you that the new Air cushioning system delivers the most revolutionary sensation you've ever felt. Or say the cored-out foam midsole gives you an incredibly soft feel. But what fun is giving away all the surprises? Lace up and feel the next era of Air for yourself.",
      price: 115,
      countInStock:5,
      rating: 5.0,
      numReviews: 142

},
 {
  //    _id: '17',
  name: 'Nike Air Max ZM950',
  slug: 'nike-zm',
  // category:'Trainers',
  image:'/images/nike18.webp',
      brand:'Nike',
      category:'Trainers',
      description:"Celebrating the 25th anniversary of the Air Max 95, the Nike Air Max ZM950 warps the OG's iconic side panels, adds fully visible Nike Air cushioning and boasts colours that express its attitude: untouchable, confident and tough.",
      price: 164,
      countInStock:6,
      rating: 5.0,
      numReviews: 12

},
{
  //    _id: '18',
  name: 'Jordan Point Lane',
  slug: 'nike-lanen',
  // category:'Trainers',
  image:'/images/nike19.webp',
      brand:'Nike',
      category:'Trainers',
      description:"The Jordan Point Lane mixes elements from game shoes MJ wore during 3 of his most memorable seasons.Named after his Chicago address, this mash-up pulls in bits and pieces from the AJ3, AJ6 and AJ11 to create a shoe that's inspired by greatness and uncompromising in its comfort.",
      price: 124,
      countInStock:3,
      rating: 4.5,
      numReviews: 117

},
{
  //    _id: '19',
  name: 'Nike Air Huarache LE',
  slug: 'nike-hurakache',
  // category:'Trainers',
  image:'/images/nike20.webp',
      brand:'Nike',
      category:'Trainers',
      description:"Built to fit your foot and designed for comfort, the Nike Air Huarache LE brings back a street-level favourite. Crisp leather on the upper is mixed with super-breathable, perfectly shined neoprene-like fabric for easy styling. The iconic heel clip and stripped-away branding keep the early-90s look you love",
      price: 109,
      countInStock:2,
      rating: 4.5,
      numReviews: 18

},
 {
  //    _id: '20',
  name: 'Nike Air Max Plus 3 Leather',
  slug: 'nike-plus-3',
  // category:'Trainers',
  image:'/images/nike21.webp',
      brand:'Nike',
      category:'Trainers',
      description:"Featuring the iconic Tuned Air technology of its predecessors, the Nike Air Max Plus 3 updates the look with TPU fused to its velvety leather upper. Paying homage to the OG, it features sharp contrasting colours that give you an edge over the competition.",
      price: 164,
      countInStock:6,
      rating: 3.5,
      numReviews: 25

},]
    
};

export default data;