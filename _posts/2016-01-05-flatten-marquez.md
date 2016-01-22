---
layout: post
title: .Flatten Marquez and the Illusion of Magic
---


The world was so recent that many things lacked names. In order to understand, it was necessary to point. I arrived with everything I owned; a small burden compared to the weight of the fear of wasted time. A future put on hold for an idea of a thing I barely knew.

Can you flatten dimensions? An eight-key magic trick for the aged, but what is real? How is a thing? This was my first challenge in the world of Ruby. A week ago, I could conceptualize how a computer might do this, but I could only point. The world was so recent then. Let’s flatten, without magic.

    buendia = ["Many years later,",["as he faced", "the firing squad,",["Colonel
    Aureliano Buendía","was to remember", "that distant afternoon"],"when his
    father", "took him to"], "discover ice..."]

Above, we have a multi-dimensional Array that needs to be stored in one dimension and printed as a String. The aged would tell you this is quite easy. Just call .flatten on “buendia” and we’ve got a one-dimensional Array we can easily manipulate. Accepting this advice is akin to only being able to multiply on a calculator — It will work, but you’ll never truly understand any corollary to the concept of putting groups together. Instead, one should use a tool, like a calculator, only when it’s function is that of efficiency and not of understanding.

So, let’s break down how we came to understand the magic. We figured that in order to simplify “buendia” into a one-dimensional Array, we would have to iterate through each element in the Array and see which elements were themselves Arrays. Once we knew this, we could leave elements that were not Arrays alone and focus on transforming elements that were Arrays into non-arrays:

    def flatten_marquez(quote_array)
      index = 0
      while index <= quote_array.length
        quote_piece = quote_array[index]
        if quote_piece.kind_of?(Array)

Here, we defined the method “flatten_marquez” which takes the parameter “quote_array” (which is where we will ultimately put “buendia”). Next, we set the variable “index” equal to zero, which we will use to help us iterate through the different elements of “buendia”. Then, we told the computer, “If we are still in the original array, ask if the element we are currently looking at is itself an Array.” Next, we defined what the computer should do if an element we came across in an Array was itself an Array:

    if quote_piece.empty?
      quote_array.delete_at index
    else
      inner_quote_piece = quote_piece.shift
      quote_array.insert index, inner_quote_piece
    end

Here, the program is saying, “Okay element, I know you are an Array. I just have one more question: Are you an empty Array?”

If the element, that is an Array, is empty, then the program will simply delete that element. If the element/Array is not empty, the program goes on to do the most complicated part of our demystified flatten. First, the program tells the computer that “inner_quote_piece” should equal “quote_piece.shift”. To illustrate this, let’s look a a simple Array: a = [1,2,3]. If we call “shift” on “a”, we get “a.shift = [1]”. It simply returns the first element in an Array. So, by setting “inner_quote_piece” equal to “quote_piece.shift”, we can now return the first element in whatever dimension of the Array we are currently examining. Then, we tell the computer to take that element and insert it into a specific place. In our case, the specific place is our original Array at the index that was previously the index of the first element that was an Array, pushing that element to the next index.

Now, the hard work is done. We simply need to tell our program to keep doing this over and over agin until our original Array is one-dimensional, i.e. none of the elements are themselves Arrays.

    def flatten_marquez(quote_array)
      index = 0
      while index <= quote_array.length
        quote_piece = quote_array[index]
        if quote_piece.kind_of?(Array)
          if quote_piece.empty?
            quote_array.delete_at index
          else
            inner_quote_piece = quote_piece.shift
            quote_array.insert index, inner_quote_piece
          end
        else
          index += 1
        end
      end
      quote_array
    end

    buendia = ["Many years later,",["as he faced", "the firing squad,",["Colonel
    Aureliano Buendía","was to remember", "that distant afternoon"],"when his
    father", "took him to"], "discover ice..."]

    flatten_marquez(buendia)

To the left is our fully organic flatten method.

Now, let’s look at exactly how this will work when we call “flatten_marquez” on our “buendia” Array.

We start at “index = 0”, which is “buendia[0]”, which is “Many years later,”. Then, since 0 < “quote_array.length” (which is 3) the computer asks if “buendia[0]” is an Array. It is not an Array, so the computer ignores the second if/else statement and goes straight to “index += 1”, which changes “index” to equal 1, and starts the process over again. Now, we start start the method at “index = 1”, which is “buendia[1]”, which is:

> [“as he faced”, “the firing squad,” [“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], “when his father”, “took him to”].

This is actually the only part of “buendia” that we need to flatten — It’s a two-dimensional Array inside of the Array “buendia”. So, when we start out the method at “buendia[1]”, the computer asks if this element is an Array, and the answer is yes, so the computer enters the block that the previous element skipped. Inside this block, the second if/else statement, the computer first asks if “buendia[1]” is empty. It is not empty, as we can see above, so the computer goes on to set “inner_qoute_piece” equal to “quote_piece.shift”, which sets “inner_qoute_piece” equal to the first element in the “buendia[1]” Array, which is equal to “as he faced”, while also deleting “as he faced” from the original form of “buendia[1]”.

> [**“as he faced”**, “the firing squad,” [“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], “when his father”, “took him to”].

Finally, the computer tells our original Array, “buendia”, to insert **“as he faced”** into “buendia[1]”, which pushed what is left of the original “buendia[1]” to “buendia[2]”. Here’s what “buendia” looks like so far:

> [“Many years later,”, “**as he faced**”, [“the firing squad,” [“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], “when his father”, “took him to”], “discover ice…”]

Now, we can go through this exactly 4 more times before anything different happens, so let’s just fast forward to where we see something new:

> [“Many years later,”, “as he faced”, “the firing squad,” [[“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], “when his father”, “took him to”], “discover ice…”]

When we the computer gets to this point, we see some pretty confusing multi-dimensional shit happen. When the program iterates over “buendia[1..2]” it doesn’t do anything — those elements are already flattened. When it gets to “buendia[3]”, though, the program has to do something new.

    def flatten_marquez(quote_array)
      index = 0
      while index <= quote_array.length
        quote_piece = quote_array[index]
        if quote_piece.kind_of?(Array)
          if quote_piece.empty?
            quote_array.delete_at index
          else
            inner_quote_piece = quote_piece.shift
            quote_array.insert index, inner_quote_piece
          end
        else
          index += 1
        end
      end
      quote_array
    end


At this point, the program sees that “buendia[3]” is an Array and that it is not empty, prompting the computer to set “inner_quote_piece” equal to “quote_piece.shift”, which is particularly interesting — Previously, when we shifted an element out of an interior Array into our original Array, we were simply moving a String into the original Array. This time around, however, because “buendia[3]” aka “quote_piece” is a multi-dimensional Array, calling shift on it actually returns an Array:

> quote_piece = [[“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], “when his father”, “took him to”]

> inner_quote_piece = quote_piece.shift = [“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”]

So, now when we assign “inner_quote_piece” to “buendia[3]”, we end up with:

> [“Many years later,”, “as he faced”, “the firing squad,” [“Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”], [“when his father”, “took him to”], “discover ice…”]

At this point, we have successfully transformed “buendia” from a three-dimensional Array to a two-dimensional Array. As we continue to iterate through each element in the Array, the same behavior will take place as did in the iteration of the original “buendia[1]” until we end up with our first empty Array. Here is what “buendia” will look like when we get to that point:

> [“Many years later,”, “as he faced”, “the firing squad,” “Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”, [], [“when his father”, “took him to”], “discover ice…”]

Now, when the computer iterates through this version of “buendia” it will have its first opportunity to answer “yes” to the question “quote_piece.empty”.

    if quote_piece.empty?
            quote_array.delete_at index
          else

Since “quote_piece” will in fact be empty, the computer will enter the block and delete the empty Array at “buendia[7]”, only leaving us with three more iterations until we have successfully flattened “buendia”:

> [“Many years later,”, “as he faced”, “the firing squad,” “Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”, [“when his father”, “took him to”], “discover ice…”]

As for the remaining iterations, they exhibit all of the same computer responses we have already seen. The two Strings in the Array at “buendia[7]” will be shifted into the first dimension, the empty Array will be deleted, and, finally, we will be left with a one-dimensional “buendia”:

> [“Many years later,”, “as he faced”, “the firing squad,” “Colonel Aureliano Buendia”, “was to remember”, “that distant afternoon”, “when his father”, “took him to”, “discover ice…”]

Here’s where we see there is always more magic to know, but hopefully realize it’s not quite magic at all.

Call “flatten_marquez(buendia).join(“ “) and enjoy a quote by the father of Magical Realism. No, not Yukihiro Matsumoto…

> “Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice…”
