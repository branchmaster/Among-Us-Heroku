# Heroku [Among Us Community Edition](https://bit.ly/AUCE_) Buildpack

This is a [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpacks)
for running a Imposter server in a [dyno](https://devcenter.heroku.com/articles/dynos).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

Create a [free ngrok account](https://ngrok.com/) and copy your Auth token. Then create a new Git project with a the Imposter.Server.exe and all the files from [here](https://github.com/TheBotlyNoob/AUCE-Buildpack/releases/latest/download/NewServer.tar.gz)

Then, install the [Heroku toolbelt](https://toolbelt.heroku.com/).
Create a Heroku app, set your ngrok token, and push:

```sh-session
$ heroku create
$ heroku buildpacks:add https://github.com/iScribes/heroku-buildpack-wine
$ heroku buildpacks:add https://github.com/TheBotlyNoob/AUCE-Buildpack
$ heroku config:set NGROK_API_TOKEN="xxxxx"
$ git push heroku master
```

Finally, open the app:

```sh-session
$ heroku open
```

This will display the ngrok logs, which will contain the name of the server
(really it's a proxy, but whatever):

```
Server available at: 0.tcp.ngrok.io:17003
```
## Connecting to the server console

The Imposter server runs inside a `screen` session. You can use [Heroku Exec](https://devcenter.heroku.com/articles/heroku-exec) to connect to your server console.

Once you have Heroku Exec installed, you can connect to the console using 

```
$ heroku ps:exec
Establishing credentials... done
Connecting to web.1 on ⬢ lovely-imposter-2351...
$ screen -r amongus
```

**WARNING** You are now connected to the Imposter server. Use `Ctrl-A Ctrl-D` to exit the screen session. 
(If you hit `Ctrl-C` while in the session, you'll terminate the Imposter server.)

## Customizing

### ngrok

You can customize ngrok by setting the `NGROK_OPTS` config variable. For example:

```
$ heroku config:set NGROK_OPTS="--remote-addr 1.tcp.ngrok.io:25565"
```
## Webserver

You can set a webserver by putting `index.html` in the Web directory
```sh-session
$ echo "<h1>Hi</h1>" > Web/index.html
$ git commit -m "Insperational message here"
$ git push heroku master
```
