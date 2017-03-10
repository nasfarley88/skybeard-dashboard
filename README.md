# skybeard-dashboard
A dashboard for the skybeard-2 telegram bot.

## New to AngularJS?

There are various tutorials online for AngularJS. I first started learning from:

https://www.codeschool.com/courses/shaping-up-with-angular-js

which is a free course provided by [Code School](https://www.codeschool.com). No
previous javascript experience is required (although some programming knowledge
is useful).

## How to use
First, start your [skybeard bot](https://github.com/LanceMaverick/skybeard-2) with the `--start-server` flag:

```bash
$ ./main.py -k 999999999:nOtaReaLkeynOtaReaLkey --start-server
```

then start a simple python3 http server with the helper script:

```bash
$ ./start_web_server.sh
Serving HTTP on 0.0.0.0 port 8001 ...
```

and then visit http://localhost:8001 and you should see the skybeard dashboard.
