export default class Recipe
{
    #id
    #title
    #time
    #difficulty
    #img

    constructor(id, title, time, difficulty, img)
    {
        this.setId(id);
        this.setTitle(title);
        this.setTime(time);
        this.setDifficulty(difficulty);
        this.setImg(img)

        this.getId = this.getId.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImg = this.getImg.bind(this);
        this.getImgURL = this.getImgURL.bind(this);
    }

    getId() {return this.#id}
    getTitle() {return this.#title}
    getTime() {return this.#time}
    getDifficulty() {return this.#difficulty}
    getImg() {return this.#img}
    getImgURL() {
        return new URL(this.getImg(), import.meta.url).href
    }

    setId(id) {
        if (typeof id === 'number') {
            this.#id = id;
        } else {
            throw new Error('id must be a number');
        }
    }
    setTitle(title) {
        if (typeof title === 'string') {
            this.#title = title;
        } else {
            throw new Error('title must be a string');
        }
    }
    setTime(time) {
        if (typeof time === 'number') {
            this.#time = time;
        } else {
            throw new Error('time must be a number');
        }
    }
    setDifficulty(difficulty) {
        if (typeof difficulty === 'string') {
            this.#difficulty = difficulty;
        } else {
            throw new Error('difficulty must be a string');
        }
    }
    setImg(img) {
        if (typeof img === 'string') {
            this.#img = img;
        } else {
            throw new Error('img must be a string');
        }
    }
}