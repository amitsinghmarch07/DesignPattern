class State {
    open() {}
    sendMessage(message) {}
    closed() {}
    error() {}
}

class OpenState extends State {
    open() {
        console.log("connection is already opened");
        return this;
    }

    sendMessage(message) {
        console.log(`the message sent is ${message}`);
    }

    closed() {
        return new ClosedState();
    }

    error() {
        return new  ErrorState();
    }
}

class ClosedState extends State {
    open() {
        return new OpenState();
    }

    closed() {
        console.log("state is already closed");
        return this;
    }

    error() {
        return new ErrorState();
    }
}

class ErrorState extends State {
    open() {
        console.log("connection is in error state");
        return this;
    }

    closed() {
        return new ClosedState();
    }

    sendMessage(message) {
        co
    }

    error() {
        console.log("connection is already in error state");
        return this;
    }
}

class Connection {
    state = new ClosedState();

    connect() {
        this.state = this.state.open();
    }

    sendMessage(message) {
        this.state.sendMessage(message);
    }
    close() {
        this.state.closed();
    }
}

const connection = new Connection();

connection.sendMessage("hello") 
connection.connect();
connection.sendMessage("hello now");
connection.connect();
connection.sendMessage(null);
connection.close();