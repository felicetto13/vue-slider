const slides = [
    {
        isActive: false,
        idImage: 1,
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        isActive: false,
        idImage: 2,
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        isActive: false,
        idImage: 3,
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        isActive: false,
        idImage: 4,
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        isActive: false,
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
            slideActive: slides[Math.floor(Math.random() * slides.length)],
            mouseHover: false,
        },

        mounted() {

            setInterval(this.next, 3000);

        },


        methods:
        {
            //Function first point Bonus request
            activeImage(slide) {
                this.slideActive = slide;
            },
            prevActiveImage() {
                const index = this.slideActive.idImage - 1;
                if (index === 0) {
                    return;
                } else {
                    slides[index].isActive = false;
                    slides[index - 1].isActive = true;
                    this.slideActive = slides[index - 1];
                }
            },
            nextActiveImage() {
                const index = this.slideActive.idImage - 1;
                if (index === slides.length - 1) {
                    return;
                } else {
                    slides[index].isActive = false;
                    slides[index + 1].isActive = true;
                    this.slideActive = slides[index + 1]
                }
            },
            next() {
                if (!this.mouseHover) {


                    let index = this.slideActive.idImage - 1;
                    if (index === slides.length - 1) {
                        index = 0;
                        this.slideActive = slides[index]
                        slides[slides.length - 1].isActive = false;
                        slides[index].isActive = true;
                    } else {
                        slides[index].isActive = false;
                        slides[index + 1].isActive = true;
                        this.slideActive = slides[index + 1]
                    }
                    return this.slideActive;
                }
            }
        },

    }
)