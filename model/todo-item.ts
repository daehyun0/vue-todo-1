class TodoItem {
    id: string;
	finishFlag: boolean;
    title: string;
    desc: string;

    constructor (id: string, finishFlag: boolean, title: string, desc: string) {
        this.id = id;
        this.finishFlag = finishFlag;
        this.title = title;
        this.desc = desc;
	}

    switchFinishFlag () {
        this.finishFlag = !this.finishFlag;
    }
}

export default TodoItem;