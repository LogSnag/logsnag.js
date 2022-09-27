import { LogSnag } from "https://deno.land/x/logsnag@0.1.0/src/mod.ts";

const logSnag = new LogSnag({
    token: "c124f5e9d0ce5bdd14bbb48f815d5583",
    project: "capgo",
});

logSnag.publish({
    channel: 'usage',
    event: 'User subscribe',
    icon: '💰',
    tags: {
        'user-id': 'yoyo',
    },
    notify: false,
});