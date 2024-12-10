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

    setId(id) {this.#id = id}
    setTitle(title) {this.#title = title}
    setTime(time) {this.#time = time}
    setDifficulty(difficulty) {this.#difficulty = difficulty}
    setImg(img) {this.#img = img}
}