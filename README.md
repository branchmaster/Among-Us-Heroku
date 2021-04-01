# Heroku [Among Us](https://innersloth.com/gameAmongUs.php) Buildpack

This is a [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpacks)
for running a [Imposter server](https://github.com/Impostor/Impostor/releases/latest) in a [dyno](https://devcenter.heroku.com/articles/dynos).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

Install the [Heroku toolbelt](https://toolbelt.heroku.com/).
Create a Heroku app

```sh-session
$ heroku create --buildpack https://github.com/TheBotlyNoob/Among-Us-Heroku.git
```

Finally, open the app:

```sh-session
$ heroku open
```

This will take a few minutes so be patient, will display the [PlayIt](https://playit.gg) claim URL:

```
Your URL Is: (The PlayIt URL)
```

Click on the url and it should redirect you to playit.gg/manage where you have to authenticate with [Discord](https://discord.com):

![PlaIt.gg authenticate](https://i.imgur.com/9ogBJYH.png)

After you click Authenticate with Discord, it will redirect you to this page. If you are signed in. If you are not signed in, then it will redirect you to the login page where you have to login. Once you are on this page then click Authorize:

![Discord authenticate](https://i.imgur.com/hOFIymj.png)

After You Authenticate with Discord scroll all the way down until you see Custom UDP, and click on add tunnel:

![Custom UDP](https://i.imgur.com/NRF5Fac.png)

Then you edit the number after the colon to 22023 and click add:

![Custom UDP Port](https://i.imgur.com/ApLJVQ5.png)

After you click add scroll all the way down until you see Custom UDP again. Then copy the url.

![Custom UDP Connected](https://i.imgur.com/ST3mPlS.png)

After you copy the url, go to https://Impostor.github.io/Impostor paste the url without the colon or the numbers after the colon in the Server Address input, and paste the numbers after the colon in the Port input



(NOTE: As of right now we arent able to edit the port but other than that everything should be good)

![Impostor Website](https://i.imgur.com/HfLziIR.png)