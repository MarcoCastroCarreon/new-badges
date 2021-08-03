export default ({
    before: async (handler) => {
        handler.event.body = JSON.parse(handler.event.body);
    }
})