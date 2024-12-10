export default class CardSearchFilter
{
    #excludeIds;
    constructor() {
        this.setExculdeIds([]);

        this.addExcludeId = this.addExcludeId.bind(this);
        this.getIds = this.getIds.bind(this);
    }

    setExculdeIds(excludeIds) {
        this.#excludeIds = excludeIds;
    }

    addExcludeId(id) {
        this.#excludeIds.push(id);
    }

    getIds() {
        return this.#excludeIds;
    }
}