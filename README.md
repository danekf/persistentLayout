# Persistent Layout

This project attempts to solve a very niche problem I encountered while using a multi-monitor setup.

I often find myself opening the same sites, on the same monitors while doing certain tasks.

## The problem examples 

1. While working, I will often find myself having one monitor used for VScode, the monitor directly to its left be used for reference documents (such as MDN), and my third monitor is a split between testing, a view of my WIP website, or more reference material.

2. While gaming/streaming, I often have a game on my main monitor, guides or reference material on the second and the third monitor will have a split of twitch dashboard and chat.

3. While gaming on the TV, later at night, in the same room as my main PC (hooked up via a long HDMI cable while I game on the couch) I will often want to have the game on the TV and I will alternate between having LIVE eSports matches on one monitor, and a black screen on the final one. This allows me to game in a darker room without as much eyestrain while allowing me to quickly use my PC without having to reach behind to turn monitors off.

## The solution

I decided that I would tackle this problem by attempting to create a website that saves certain embedded sites and allows me to quickly load up layouts of sites based on my current activity. 


## Technical challenges

``These are the basic hurdles that I must learn to overcome in order to build the project.``

* Must controls multiple, separeate, browser windows at the same time. 
* Must resisze and be able to save layouts and take monitor resolutions into account.
* Must be able to embed/load websites within the page itself in a pleasing manner that is non obstuctive.
* Must be able to subdivide a window to allow multiple widgets/embeds on the same monitor (such as chat and twitch stream/dashboard)

``It would be nice if :``

* It is able to fullscreen all open windows at the touch of a button (useful when gaming on the TV)
  * If not, can it resize windows automatically and place them somewhere on the screen?
  * This may not be possible as it could be something used by popups to be extremely intrusive and could be blocked.
* It is able to be remotely controlled via the site being open on another device 
  * Login most likely required, might be a stretch goal once everything works as expected. But might be able to pair with some kind of local code? Could be fun to look into.

