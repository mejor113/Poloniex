import {
    observable,
    action
} from 'mobx';

import RateStore from './rateStore';


const fetchData = () => new Promise((resolve, reject) => {
    return fetch('https://poloniex.com/public?command=returnTicker').then(
        response => response.json().then(resolve),
        reject
    );
});

class WorkerStore {

    @observable fetchStatus = ''; // 'pending', 'rejected'
    @observable isSilenceFetchWorking = false;

    get isFetchRejected() {
        return this.fetchStatus === 'rejected';
    }

    get isFetching() {
        return this.fetchStatus === 'pending';
    }

    get isWorking() {
        return this.isSilenceFetchWorking;
    }

    @action.bound
    worker() {
        if (!this.isSilenceFetchWorking) return;

        this.loadData()
        setTimeout(() => this.worker(), 5000);
    }

    @action.bound
    runWorker() {
        this.isSilenceFetchWorking = true;
        this.worker();
    }

    @action.bound
    stopWorker() {
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
        RateStore.updateListData(data);
        this.fetchStatus = 'fulfilled';
    }

    @action.bound
    fetchRejected(error) {
        console.log(error);
        this.fetchStatus = 'rejected';
    }
}

export default new WorkerStore();