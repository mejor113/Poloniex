import {
    observable,
    action
} from 'mobx';


class RateStore {

    @observable list = [];

    get dataList() {
        return this.list;
    }

    @action.bound
    updateListData(data) {
        this.list = Object.keys(data).map(key => ({...data[key], name: key.replace('_', ' ')}));
    }
}

export default new RateStore();