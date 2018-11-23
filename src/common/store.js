import { observable, action } from 'mobx';

//https://poloniex.com/public?command=returnTicker
//https://api.example1.com/search
const fetchData = () => new Promise((resolve, reject) => {
    return fetch('https://poloniex.com/public?command=returnTicker').then(
        response => response.json().then(resolve),
        reject
    );
});

class MainStore {
    @observable list = [];
    @observable fetchStatus = ''; // 'pending', 'rejected'
    @observable isSilenceFetchWorking = false;

    get dataList() {
        return this.list;
    }

    get isFetchRejected() {
        return this.fetchStatus === 'rejected';
    }

    get isFetching() {
        return this.fetchStatus === 'pending';
    }

    get isWorking() {
        return this.isSilenceFetchWorking;
    }

    @action.bound worker() {
        if (!this.isSilenceFetchWorking) return;

        this.loadData()
        setTimeout(() => this.worker(), 5000);
    }

    @action.bound runWorker() {
        this.isSilenceFetchWorking = true;
        this.worker();
    }

    @action.bound stopWorker() {
        this.isSilenceFetchWorking = false;
    }

    @action
    loadData() {
        if (this.isFetching) return;

        this.fetchStatus = 'pending';
        fetchData().then(this.fetchFulfilled, this.fetchRejected);
    }

    @action.bound
    fetchFulfilled(data) {
        console.log(data);
        this.list = Object.keys(data).map(key => ({...data[key], name: key.replace('_', ' ')}));
        this.fetchStatus = 'fulfilled';
    }

    @action.bound
    fetchRejected(error) {
        console.log(error);
        this.fetchStatus = 'rejected';
    }
}

export default new MainStore();