attoX.onReady(function() {
    attoX.registerCommand("hello", function(data) {
        if (data) {
            attoX.print("You said: " + data + "\n");
        } else {
            attoX.print("Hi there!\n");
        }
    });

    attoX.registerCommand("askquestion", function(defaultName) {
        return attoX.input("What's your name? ").then(function(name) {
            name = name || defaultName || "something";

            attoX.print("Your name is " + name + "!\n");

            attoX.setArgValue(1, name);
        });
    });

    attoX.registerCommand("pause", function() {
        return new Promise(function(resolve, reject) {
            var hasReleased = false;

            var interval = setInterval(function() {
                attoX.getKey().then(function(key) {
                    if (key != "") {
                        if (!hasReleased) {
                            return;
                        }

                        clearInterval(interval);

                        resolve();

                        return;
                    }

                    hasReleased = true;
                });
            });

            attoX.print("Press any key to continue...\n");
        });
    });

    attoX.registerCommand("error", function() {
        return Promise.reject("Some error");
    });

    attoX.print("Test extension loaded!\n");

    attoX.ready();
});