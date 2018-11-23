import React from 'react';
import { observer, inject } from 'mobx-react/native';
import { withNavigationFocus } from 'react-navigation';

import Main from './Main';

@inject('MainStore')
@observer
class Container extends React.Component{
    componentDidMount() {
        this.props.MainStore.runWorker();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused && !this.props.MainStore.isWorking) return this.props.MainStore.runWorker();
        if (prevProps.isFocused && !this.props.isFocused && this.props.MainStore.isWorking) return this.props.MainStore.stopWorker();
    }

    render() {
        const { dataList, isFetching, isFetchRejected } = this.props.MainStore;

        return (
            <Main
                dataList={dataList}
                isFetching={isFetching}
                isFetchRejected={isFetchRejected}
            />
        )
    }
}

export default withNavigationFocus(Container);