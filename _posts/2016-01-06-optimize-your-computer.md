---
layout: post
title: 4 Steps to Optimize your Computer for the Aspiring Programmer
---

Starting out in the world of programming is daunting. This challenge is exacerbated by GUIs (graphical user interfaces) like Codecademy that allow dev noobs (like me and you!) to learn basic programming without having to tangle with critical dev tools like [text editors](https://en.wikipedia.org/wiki/Text_editor) and the [Command Line](https://en.wikipedia.org/wiki/Command-line_interface). The following tips allow you to springboard your dev learning by setting up your (Apple) computer with all the tools and hacks you need to become the next Wozniak.

#### 1\. So Many Editors!

I remember when I was starting out, the search for the right editor was exhausting — Especially when you’re not sure yet how to use that editor to interact with the Command Line (more on this), or the web!

I’m going to make it simple for all you budding hackers: Use [Atom](https://atom.io/). It’s free, it’s easy, and more and more seasoned vets are making the switch. As a beginner, it works great due to it’s simple package manager and effortless customization tools. Also, when you’re a pro, you’ll be glad [Atom](https://atom.io/) is your editor as it’s fully open-source and can be profoundly customized to your every need. Download [Atom](https://atom.io/) and put it on your dock, right next to [Terminal](https://en.wikipedia.org/wiki/Terminal_%28OS_X%29).

<figure name="d23a" id="d23a" class="graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 212px; max-height: 116px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*0_k804yVsg6Afrgc6wuVoQ.jpeg" data-width="212" data-height="116">![](https://cdn-images-1.medium.com/freeze/max/60/1*0_k804yVsg6Afrgc6wuVoQ.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*0_k804yVsg6Afrgc6wuVoQ.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Best friends Terminal (left) and Atom.</figcaption>

</figure>

Once you have [Atom](https://atom.io/) up-and-running, here are a few tips for getting the most from your editor from the beginning:

> Snippets:

*   Set a pry snippet for your Ruby prying needs and learn more about how snippets can make your life easier. To do this, open your [Atom](https://atom.io/) settings with “COMMAND ,” (or the boring way through Preferences…) and click on the “Open Config Folder” button:

<figure name="0c31" id="0c31" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 793px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*MhYRzGz4M_4YU80wBzkXmQ.jpeg" data-width="1364" data-height="1546" data-action="zoom" data-action-value="1*MhYRzGz4M_4YU80wBzkXmQ.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*MhYRzGz4M_4YU80wBzkXmQ.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*MhYRzGz4M_4YU80wBzkXmQ.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Atom settings (COMMAND ,)</figcaption>

</figure>

*   Next, select your “snippets.cson” file, which is a Coffeescript file (which is kind of like a cool kid Javascript file…), and paste in the following bit of code:

> ‘.source.ruby’:  
>  ‘pry’:  
>  ‘prefix’: ‘pry’  
>  ‘body’: ‘require “pry”; binding.pry’

<figure name="0b33" id="0b33" class="graf--figure graf-after--blockquote">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 793px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*1C6B-WDKmkJF0SJcUmiGuA.jpeg" data-width="1364" data-height="1546" data-action="zoom" data-action-value="1*1C6B-WDKmkJF0SJcUmiGuA.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*1C6B-WDKmkJF0SJcUmiGuA.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*1C6B-WDKmkJF0SJcUmiGuA.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Atom Config Folder snippets.cson</figcaption>

</figure>

*   We did this for two reasons: First, this bit of code is saying, “When [Atom](https://atom.io/) is working on a Ruby file (.rb), and ‘pry’ is typed into the file, it will be replaced with ‘require “pry”; binding.pry’. This will become very helpful when you start actually building programs and TESTING those programs — Essentially, it prevents you from having to rewrite a bunch of code over and over again, something that should always be avoided. Second, and more importantly, this exercise has introduced you to the ‘snippets.cson’ file in the Atom Config Folder, which will be super helpful anytime you find yourself rewriting the same trivial code — Make a snippet for it!

> Packages:

[Atom](https://atom.io/) packages are super fun to look for and even more useful when you find good ones. First, I’ll cover how to install new packages (it’s really easy), then suggest some packages to start out with.

*   To search for and install new packages, simply go to your [Atom](https://atom.io/) settings page (COMMAND ,), navigate to the ‘Install’ tab, and go crazy searching for awesome packages.

<figure name="d8fe" id="d8fe" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 793px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*GsJh4dM6TvbZTJ8wX5fG_Q.jpeg" data-width="1364" data-height="1546" data-action="zoom" data-action-value="1*GsJh4dM6TvbZTJ8wX5fG_Q.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*GsJh4dM6TvbZTJ8wX5fG_Q.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*GsJh4dM6TvbZTJ8wX5fG_Q.jpeg)</noscript>

</div>

</div>

</figure>

> Packages I recommend starting with:

*   [File-Icons](https://atom.io/packages/file-icons): The purpose of this package is purely aesthetic, as it simply provides themed icons to differentiate between file types, but it’s cool.
*   [Linter](https://atom.io/packages/linter): This package is especially great for the novice programmer. It provides feedback on syntax errors in your program and helps to identify solutions. You’ll need to download language specific packages to accompany the main Linter package, i.e. [Linter-Ruby](https://atom.io/packages/linter-ruby).
*   [Open-Recent](https://atom.io/packages/open-recent): Simple package — Puts an ‘open recent’ option in the File menu. Sometimes helpful.
*   [Ruby-Block](https://atom.io/packages/ruby-block): This package is Ruby-specific, but I recommend finding similar packages for whichever language you’re learning. [Ruby-Block](https://atom.io/packages/ruby-block) highlights the start and end of whichever block you are currently editing, which becomes helpful when trying to figure out where you’re missing an ‘end’!
*   [Zentabs](https://atom.io/packages/zentabs): [Zentabs](https://atom.io/packages/zentabs) helps you to stay organized by limiting the amount of tabs that can stay open.

> General Atom Settings and Shortcuts:

*   As you wrap up your [Atom](https://atom.io/) setup, I recommend reviewing the general settings page frequently (again, COMMAND ,) and messing around with the configurations until you have it just right. Some quick suggestions include finding and using a favorite programming **font**, showing **invisibles** so you can practice perfect syntax, and selecting **‘Soft Wrap’** so you can read your lines while the editor is in a half screen window.

<figure name="be7e" id="be7e" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 446px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*vHJR4meuQN8gKXODRBiHvg.jpeg" data-width="1436" data-height="914" data-action="zoom" data-action-value="1*vHJR4meuQN8gKXODRBiHvg.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*vHJR4meuQN8gKXODRBiHvg.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*vHJR4meuQN8gKXODRBiHvg.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Select ‘Soft Wrap’ so you can read your lines while using a half screen window</figcaption>

</figure>

*   Last bit about [Atom](https://atom.io/), some important shortcuts: I recommend reviewing all the shortcuts for all of your frequently used applications and memorizing the most useful ones. As far as [Atom](https://atom.io/), there are two that I find myself using most often: COMMAND-d and COMMAND-\. COMMAND-d is a nice shortcut that allows you to select a word and then repeatedly press COMMAND-d to select all the words in the file that are the same. This becomes useful when you find yourself changing a variable or method name. COMMAND-\ simply minimizes the tab column of the left side of the editor, providing more space for your code.

#### 2\. Bash What? and the Command Line

Learn to love the Command Line. On your Apple, this is the app called ‘[Terminal](https://en.wikipedia.org/wiki/Terminal_%28OS_X%29)’, which has many alternatives, which you can research and download should you get to that point. Basically, [Terminal](https://en.wikipedia.org/wiki/Terminal_%28OS_X%29) allows for text-based interaction with the operating system by using a [Unix](https://en.wikipedia.org/wiki/Unix) shell that accepts commands. The most commonly used [Unix](https://en.wikipedia.org/wiki/Unix) shell is call the bash shell, and your bash profile is a collection of script that tells your bash shell how to look and act. The quickest way to fall in love with the Command Line (i.e. [Terminal](https://en.wikipedia.org/wiki/Terminal_%28OS_X%29)), is to love your bash profile.

Here’s some tips on making your bash profile bad bash (Command line jokes are funny.. I promise.).

First, open your terminal and type the follow command: ‘atom .bash_profile’

<figure name="27bc" id="27bc" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 380px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*e-3AZ_R7oltRGWkv1_ogAQ.jpeg" data-width="1140" data-height="826" data-action="zoom" data-action-value="1*e-3AZ_R7oltRGWkv1_ogAQ.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*e-3AZ_R7oltRGWkv1_ogAQ.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*e-3AZ_R7oltRGWkv1_ogAQ.jpeg)</noscript>

</div>

</div>

</figure>

You’ll use the ‘atom’ command a ton in order to open files with your editor (if you’re using [Atom](https://atom.io/)). The above command will open [Atom](https://atom.io/) directly to your Bash Profile, which will most likely be empty if this is your first foray into command line customization. Below is a screenshot of my current Bash Profile. We’ll use this as an example to get your customization started.

<figure name="bf59" id="bf59" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 634px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*XSlfeDSWvMggGDPX0IpNqw.jpeg" data-width="1280" data-height="1546" data-action="zoom" data-action-value="1*XSlfeDSWvMggGDPX0IpNqw.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*XSlfeDSWvMggGDPX0IpNqw.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*XSlfeDSWvMggGDPX0IpNqw.jpeg)</noscript>

</div>

</div>

</figure>

*   The first line is simply a welcome message that appears every time I open a new Terminal tab. ‘Echo’ is a [Unix](https://en.wikipedia.org/wiki/Unix) command that displays a line of text.
*   The next line:

> export PS1=”\e[0;30m\W \e[m\e[0;33m✈︎ \e[m”

formats my command prompt — the part of my command line that appears every time I return to a new line. As you progress in your dev learning, you’ll start to see more and more creative command prompts and overall Bash Profiles, often known as dotfiles.

*   The next two lines format the coloring for the Command Line:

> export CLICOLOR=1 **and** export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx

<figure name="99d6" id="99d6" class="graf--figure graf--layoutOutsetLeft graf-after--blockquote">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 380px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*xUqU9ZmJW4thgWUQY2tY4w.jpeg" data-width="1140" data-height="826" data-action="zoom" data-action-value="1*xUqU9ZmJW4thgWUQY2tY4w.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*xUqU9ZmJW4thgWUQY2tY4w.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*xUqU9ZmJW4thgWUQY2tY4w.jpeg)</noscript>

</div>

</div>

</figure>

‘CLICOLOR = 1’ simply defines a command line interface color theme that’s already builtin. ‘LSCOLORS’ formats the coloring for output of the ‘LS’ command, which lists all the files and directories located inside your working directory (you can identify your working directory with the command ‘PWD’, which stands for ‘print working directory’).

*   The next 13 or so lines of my profile are the most commonly added kind of line — Aliases. An alias is similar to the snippets we discussed above. They are simply shortcuts you can define to quickly get to common destinations or perform common actions from the Command Line. The first few aliases I’ve defined are just quick commands for navigating through my file system. The next group of aliases are used to quickly perform [Git](https://git-scm.com/) commands. My only suggestion for defining aliases is simply to pay attention to commands you find yourself keying frequently and define aliases for them — Don’t go overboard.
*   The last line in my profile is a bit of code that will eventually be helpful when working with Rails (as in Ruby on Rails or RoR). It might be a good idea to learn about this the hard way :).

#### 3\. Finish Setup with Homebrew, Git, and RVM

[Homebrew](http://brew.sh/) is what’s known as a package manager, which is a program used from the Command Line to install many of the tools you will use as a developer. Installing [Homebrew](http://brew.sh/) on your computer is a straightforward process, starting with the installation of Apple’s [Xcode](https://developer.apple.com/xcode/):

<figure name="c695" id="c695" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 344px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*VXm29WQe-JfXO8Ngbw9cJw.jpeg" data-width="2000" data-height="1310" data-action="zoom" data-action-value="1*VXm29WQe-JfXO8Ngbw9cJw.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*VXm29WQe-JfXO8Ngbw9cJw.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*VXm29WQe-JfXO8Ngbw9cJw.jpeg)</noscript>

</div>

</div>

</figure>

*   To install Xcode, simply go the the App Store, search for Xcode and download. This can take a while, so be prepared to wait — A good time to customize [Atom](https://atom.io/)!
*   Once Xcode is loaded on your machine, use the Command Line to download [Homebrew](http://brew.sh/). To do this, open a Terminal sessions and copy and paste the following command:

> ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

This command simply tells your computer to install the [Homebrew](http://brew.sh/) application. You many need to press enter through a few prompts in order to complete the installation.

<figure name="b73c" id="b73c" class="graf--figure graf--layoutOutsetLeft graf-after--p">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 525px; max-height: 312px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*OD7t4bRc_DYOs5rycmxcWA.jpeg" data-width="706" data-height="420" data-action="zoom" data-action-value="1*OD7t4bRc_DYOs5rycmxcWA.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*OD7t4bRc_DYOs5rycmxcWA.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1200/1*OD7t4bRc_DYOs5rycmxcWA.jpeg)</noscript>

</div>

</div>

</figure>

Once the installation is complete, type the command: “brew doctor”. This is a [Homebrew](http://brew.sh/) command that checks to make sure [Homebrew](http://brew.sh/) is running smoothly. If everything is ready to go with [Homebrew](http://brew.sh/), you will get the response, “Your system is ready to brew.” If you do not get this message, troubleshoot the issues using the error message and every developers favorite troubleshooting resource — Google.

*   Once [Homebrew](http://brew.sh/) is up and running, it’s time to install [Git](https://git-scm.com/) ([Git](https://git-scm.com/) is probably already installed on your computer, but you’ll want to instal the most recent version). [Git](https://git-scm.com/) is kind of an enigma for many new programmers, but it is an incredible resource that is learned very quickly. Basically, [Git](https://git-scm.com/) is a version control application that helps manage changes to files. [GitHub](https://github.com/) is simply an online repository for you to store your software versions, known as ‘commits’. There is a ton to learn on this topic — I recommend starting [here](https://www.codecademy.com/learn/learn-git). To install [Git](https://git-scm.com/) using [Homebrew](http://brew.sh/) type the following command in the Command Line: ‘brew install git’. The screenshot below also includes the command ‘brew update’ — You should run this command as often as you remember to update your version of [Homebrew](http://brew.sh/).

<figure name="874b" id="874b" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 85px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*BFNh_snhz3sIG_zP0Szl8w.jpeg" data-width="890" data-height="108" data-action="zoom" data-action-value="1*BFNh_snhz3sIG_zP0Szl8w.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*BFNh_snhz3sIG_zP0Szl8w.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*BFNh_snhz3sIG_zP0Szl8w.jpeg)</noscript>

</div>

</div>

</figure>

The next step is to setup your [GitHub](https://github.com/) account. When you write your first program and want to push it to a [GitHub](https://github.com/) repo, you’ll connect your GitHub account to your [Git](https://git-scm.com/) with the command ‘git push’.

*   Next step is to install [RVM](https://rvm.io/), which is an application that allows you to install and manage multiple versions of Ruby and Rails on your machine (RVM stands for Ruby Version Manager). If you are learning RoR, this a a great tool. Download [RVM](https://rvm.io/) with the following command:

> ‘curl -L [https://get.rvm.io](https://get.rvm.io) | bash -s stable — auto-dotfiles — autolibs=enable — rails’

*   Next, rerun ‘brew doctor’ to make sure everything is still working properly. Now that you have installed [Homebrew](http://brew.sh/), [Git](https://git-scm.com/), and [RVM](https://rvm.io/), you will come across other packages you will need to install with [Homebrew](http://brew.sh/) as you get more experienced. When you need to install a new package, make sure to run ‘brew update’ and ‘brew doctor’ before running ‘brew install package_name’.

#### 4\. Final Tips

Your computer should now have an excellent foundation to help you become an awesome programmer. These last few tips are just some small tools and tweaks to make your coding workflow as efficient as possible.

*   First, find a window management system that works for you — Some application (one is now built into OS X El Capitan) that helps you organize your active windows. I use [Moom](https://itunes.apple.com/us/app/moom/id419330170?mt=12), but [Divvy](http://mizage.com/divvy/) is also very popular.

<figure name="0d65" id="0d65" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 438px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*NHrjl50uwYli-CsT2mnT4A.jpeg" data-width="2560" data-height="1600" data-action="zoom" data-action-value="1*NHrjl50uwYli-CsT2mnT4A.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*NHrjl50uwYli-CsT2mnT4A.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*NHrjl50uwYli-CsT2mnT4A.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Quickly split your screen into to side-by-side windows with Moom. This is my standard screen — Atom next to Terminal.</figcaption>

</figure>

*   Second, speed up your keyboard and learn to type! The default speed for Apple keyboards is pretty slow — In System Preferences, make your keyboard move as fast as it goes (see below). Then, use [typing.io](https://typing.io/lessons) to practice typing.

<figure name="3024" id="3024" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 609px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*ttbvY0MiPTKr95W77YxMsg.jpeg" data-width="1336" data-height="1162" data-action="zoom" data-action-value="1*ttbvY0MiPTKr95W77YxMsg.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*ttbvY0MiPTKr95W77YxMsg.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*ttbvY0MiPTKr95W77YxMsg.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Speed up your keyboard!</figcaption>

</figure>

*   Third, bind ‘caps lock’ to ‘control’ — ‘Caps lock’ is rarely useful and mostly always annoying… Navigate to the same screen seen above and select ‘Modifier Keys…’ Once here, simply change the ‘caps lock’ menu to ‘^ control’.

<figure name="c556" id="c556" class="graf--figure graf-after--li">

<div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 428px;">

<div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*yITbg68vaRlXt8f4igM5KQ.jpeg" data-width="834" data-height="510" data-action="zoom" data-action-value="1*yITbg68vaRlXt8f4igM5KQ.jpeg">![](https://cdn-images-1.medium.com/freeze/max/60/1*yITbg68vaRlXt8f4igM5KQ.jpeg?q=20)

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1600/1*yITbg68vaRlXt8f4igM5KQ.jpeg)</noscript>

</div>

</div>

<figcaption class="imageCaption">Death of caps lock</figcaption>

</figure>

That’s it. Comment additional tips!

Happy coding.

N
