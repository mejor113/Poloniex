import React from 'react';
import {
    observer,
    inject
} from 'mobx-react/native';
import { withNavigationFocus } from 'react-navigation';

import Main from './Main';


@inject('RateStore', 'WorkerStore')
@observer
class Container extends React.Component {

    componentDidMount() {
        this.props.WorkerStore.runWorker();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused && !this.props.WorkerStore.isWorking) return this.props.WorkerStore.runWorker();
        if (prevProps.isFocused && !this.props.isFocused && this.props.WorkerStore.isWorking) return this.props.WorkerStore.stopWorker();
    }

    render() {
        const { isFetching, isFetchRejected } = this.props.WorkerStore;
        const { dataList } = this.props.RateStore;

        return (
            <Main
                dataList={dataList}
                isFetching={isFetching}
                isFetchRejected={isFetchRejected}
            />
        );
    }
}

export default withNavigationFocus(Container);