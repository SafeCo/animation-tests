# animation-tests

## Description
This is an animation with rotating runic norse orbs summoning an introductory message.

## How to use

Sit back and enjoy the animation :)

## What I've learnt

Following my previous project of an animated solar system I also realised the limitations of animating with CSS as such I decided to explore animating libraries and settled on GSAP.

As I wanted a more interesting animation I decided to learn how to use Inkscape and proceded to create SVG's.

I made the orbs stationary and wanted them to follow a sequence of animations, through this I learnt how to calculate the size of a users viewport and account for the sidebar in determining specific pixel positions within the DOM.

A big stumbling block was that none of the SVG orbs were centered and this issue was not resolved by a simple transform: translate.

I then learnt that all SVG's have a viewport and viewbox, this misalignment caused the SVG's to be off-centre and I corrected the issue. Additionally I learnt utitlity of the bounding box to get accurate placement of the orbs within the viewport.

Overall this was a very teaching experience that taught me how to mainpulate SVG's and accurate DOM placement.
