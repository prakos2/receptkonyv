export default class Recipe
{
    #id
    #title
    #time
    #difficulty

    constructor(id, title, time, difficulty)
    {
        this.setId(id);
        this.setTitle(title);
        this.setTime(time);
        this.setDifficulty(difficulty);

        this.getId = this.getId.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
    }

    getId() {return this.#id}
    getTitle() {return this.#title}
    getTime() {return this.#time}
    getDifficulty() {return this.#difficulty}

    setId(id) {this.#id = id}
    setTitle(title) {this.#title = title}
    setTime(time) {this.#time = time}
    setDifficulty(difficulty) {this.#difficulty = difficulty}
}