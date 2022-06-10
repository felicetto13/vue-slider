const slides = [
    {
        idImage: 1,
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        idImage: 2,
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        idImage: 3,
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        idImage: 4,
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        idImage: 5,
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue(
    {
        el: '#app',
        data:
        {
            slidesData: slides,
            slideActive: slides[4],
        },
        methods:
        {
            prevActiveImage() {
                const index = this.slideActive.idImage - 1;
                if (index === 0) {
                    return;
                } else {
                    this.slideActive = slides[index-1]
                }
            },
            nextActiveImage() {
                const index = this.slideActive.idImage - 1;
                if (index === slides.length-1) {
                    return;
                } else {
                    this.slideActive = slides[index+1]
                }
            }
        }
    }
)