export default () => ({
    path: 'changelog',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Changelog').default);
        }, 'changelog');
    }
});