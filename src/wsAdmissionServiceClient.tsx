
const cfg = {
    URL: "ws://localhost:9094/websocket/tracker/websocket"
}

const wsAdmissionServiceSingletonClient = (function () {
    let instance: any;

    function createInstance() {
        // TODO: add +  PORT if you want to run it locally
        const socket = new WebSocket(cfg.URL);
        return socket
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default wsAdmissionServiceSingletonClient;