---
layout: post
title: The 2 Important Differences Between Proc.new and Lambda (Ruby)
---
First of all, hold on. They’re both Procs?? Well, yea.

When you create a lambda and a proc, both objects are part of Ruby’s Proc class and both objects have the same objective — To hold a bit of code we want to run. Not sure about this? We can prove it:

![alt text]("./images/proc_img_one.jpg")

In these examples, we can see we created a lambda and a proc, called them both, and that they do exactly the same thing. The only difference, so far, is when we called the lambda we saw “(lambda)” included in its description. In the below example, we can clearly see lambdas and procs are both Ruby Proc objects:

<figure name="4873" id="4873" class="graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 145px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*5dX0-yMDs9yaL3GkFesuOg.png" data-width="1414" data-height="292" data-action="zoom" data-action-value="1*5dX0-yMDs9yaL3GkFesuOg.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*5dX0-yMDs9yaL3GkFesuOg.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*5dX0-yMDs9yaL3GkFesuOg.png)</noscript>

</div>

</div>

<figcaption class="imageCaption">Calling .class on cool_lambda and neat_proc returns each object’s class: Proc.</figcaption>

</figure>

Now, to the point. There are two important differences between lambdas and procs:

1.  **Procs don’t check for the number of arguments. Lambdas do.**

We can demonstrate this difference by creating a lambda and a proc and exploring how they behave. We’ll start with the lambda:

<figure name="0a7d" id="0a7d" class="graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 168px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*Wnpii5VGZhFrA5UP7IjFfw.png" data-width="914" data-height="220" data-action="zoom" data-action-value="1*Wnpii5VGZhFrA5UP7IjFfw.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*Wnpii5VGZhFrA5UP7IjFfw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*Wnpii5VGZhFrA5UP7IjFfw.png)</noscript>

</div>

</div>

</figure>

<figure name="0645" id="0645" class="graf--figure graf-after--figure">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 178px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*uqfHAPzOI3CwGk-oq0HOeg.png" data-width="858" data-height="218" data-action="zoom" data-action-value="1*uqfHAPzOI3CwGk-oq0HOeg.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*uqfHAPzOI3CwGk-oq0HOeg.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*uqfHAPzOI3CwGk-oq0HOeg.png)</noscript>

</div>

</div>

</figure>

In the above examples, we created a lambda and a Proc.new and stored them it in the “cool_lambda” and “neat_proc” variables, respectively. When we called “cool_lambda”, we got what we would expect:

> =>Blue whales are really @!#*ing big.

What about “neat_proc”?? Well, same thing:

> =>Blue whales are really @!#*ing big.

Okay, that was boring. Let’s try and make them act differently:

</div>

<div class="section-inner sectionLayout--outsetColumn">

<figure name="f6c1" id="f6c1" class="graf--figure graf--layoutOutsetCenter graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 1020px; max-height: 116px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*PvpUa9BWLYIRafku3ChQuw.png" data-width="1898" data-height="216" data-action="zoom" data-action-value="1*PvpUa9BWLYIRafku3ChQuw.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*PvpUa9BWLYIRafku3ChQuw.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/2000/1*PvpUa9BWLYIRafku3ChQuw.png)</noscript>

</div>

</div>

</figure>

</div>

<div class="section-inner layoutSingleColumn">

On the left, when we input “cool_lambda.call(“Blue whales)”, we got the error message “ArgumentError: wrong number of arguments (1 for 2)”. This message told us that we called a lambda with the incorrect number of arguments, expecting arguments for both the parameters referenced in the lambda block.

On the right, we do the same thing with “neat_prom”, but (finally) we get something different. Entering “neat_proc(“Blue whales)” resulted in the error message “TypeError: no implicit conversion of nil into String form”.

What this means is that Ruby read “neat_proc.call(“Blue whales”)” as “Blue whales” + nil” and alerted us of an error because it did not know how to add a String to nil, **not** because there was an incorrect number of arguments. Procs created with Proc.new do not care if there are an incorrect number of arguments. Procs created with lambdas do.

**2\. Lambdas and procs disagree on the how to ‘return’**

We can demonstrate this difference by writing two methods that use ‘return’ — One with a lambda and one with a proc.

<figure name="8872" id="8872" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 654px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*aZ17rGI6XpmtqLTMhqg7CQ.png" data-width="740" data-height="922" data-action="zoom" data-action-value="1*aZ17rGI6XpmtqLTMhqg7CQ.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*aZ17rGI6XpmtqLTMhqg7CQ.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*aZ17rGI6XpmtqLTMhqg7CQ.png)</noscript>

</div>

</div>

</figure>

Here, we have our method “lambdatime”, which consists of the lambda “cool_lambda” and a few strings we want to see when we call the method. When we input “lambdatime”, after defining the method, we got three outputs:

> => before the Proc is best.  
> => procs are the best.  
> => lambdas are the best.

Let’s explore what happened when we called “lambdatime”: Ruby started by printing “before the Proc is best.” to the console. Next, we entered the block created by “cool_lambda”, and Ruby printed “procs are the best.” to the console. Last, the ‘return’ inside the lambda proc told Ruby to run the code directly outside of the lambda bloc before breaking out of the method, which allowed the the method to print “lambdas are the best.” to the console.

Now, let’s look at “proctime”:

<figure name="a457" id="a457" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 636px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*J9wUrvHieMO5h_vKOYPz6w.png" data-width="720" data-height="872" data-action="zoom" data-action-value="1*J9wUrvHieMO5h_vKOYPz6w.png">![](https://cdn-images-1.medium.com/freeze/max/60/1*J9wUrvHieMO5h_vKOYPz6w.png?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*J9wUrvHieMO5h_vKOYPz6w.png)</noscript>

</div>

</div>

</figure>

Here’s our “proctime” method, which is exactly the same as our “lambdatime” method, except we created a clock with Proc.new instead of lambda. When we input “proctime”, we only get two outputs:

> => before the Proc is best.  
> => procs are the best.

Here’s what happened when we called “proctime”: Ruby started the same way as it did when running “lambdatime” and printed “before the Proc is best.” to the console. Next, we entered the block created by “neat_proc”, and Ruby printed “procs are the best.” to the console — Exactly the same as “lambdatime”. Last, the ‘return’ inside the Proc.new proc told Ruby to break out of the “proctime” method before reading the final puts statement. “Proctime” and “lambatime” only diverged in this scenario when their procs (one lambda and one Proc.new) told Ruby to ‘return’.

That’s it. The two important differences between Proc.new and lambda:

1.  Procs don’t check for the number of arguments, while lambdas do.
2.  Lambdas and procs disagree on the meaning of the word ‘return’.

Until next time,

N
