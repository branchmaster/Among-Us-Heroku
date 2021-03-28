# ***THIS PROJECT MAY NOT WORK, READ [#1](https://github.com/TheBotlyNoob/Among-Us-Heroku/issues/1) FOR DETAILS***

# Heroku [Among Us](https://innersloth.com/gameAmongUs.php) Buildpack

This is a [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpacks)
for running a [Imposter server](https://github.com/Impostor/Impostor/releases/latest) in a [dyno](https://devcenter.heroku.com/articles/dynos).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

Install the [Heroku toolbelt](https://toolbelt.heroku.com/).
Create a [free ngrok account](https://ngrok.com/) and copy your Auth token.
Create a Heroku app, set your ngrok token, and push:

```sh-session
$ heroku create
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
Your URL Is: 0.tcp.ngrok.io:17003
```

## Customizing

### ngrok

You can customize ngrok by setting the `NGROK_OPTS` config variable. For example:

```
$ heroku config:set NGROK_OPTS="--remote-addr 1.tcp.ngrok.io:25565"
```