---
layout: post
title: The 2 Important Differences Between Proc.new and Lambda (Ruby)
---
First of all, hold on. They’re both Procs?? Well, yea.

When you create a lambda and a proc, both objects are part of Ruby’s Proc class and both objects have the same objective — To hold a bit of code we want to run. Not sure about this? We can prove it:

    cool_lambda = lambda do
      "This is a lambda. Or is it a proc?"
    end

    cool_lambda.call
    # => "This is a lambda. Or is it a proc?"
    puts cool_lambda
    #  => #<Proc:0x007fb931259620@(pry):110 (lambda)>

    neat_proc = Proc.new do
    "This is a proc."
    end

    neat_proc.call
    # => "This is a proc."
    puts neat_proc
    #  => #<Proc:0x007fb93085ca00@(pry):120>

In these examples, we can see we created a lambda and a proc, called them both, and that they do exactly the same thing. The only difference, so far, is when we called the lambda we saw “(lambda)” included in its description. In the below example, we can clearly see lambdas and procs are both Ruby Proc objects:

    cool_lambda.class #=> Proc
    neat_proc.class #=> Proc

Now, to the point. There are two important differences between lambdas and procs:

1.  **Procs don’t check for the number of arguments. Lambdas do.**

We can demonstrate this difference by creating a lambda and a proc and exploring how they behave. We’ll start with the lambda:

    cool_lambda = lambda do |subject, predicate|
      puts subject + predicate
    end
    cool_lambda.call("Blue whales", "are really @!#^ing big.")
    #=> "Blue whales are really @!#^ing big."

    neat_proc = proc do |subject, predicate|
      puts subject + predicate
    end
    neat_proc.call("Blue whales", "are really @!#^ing big.")
    #=> "Blue whales are really @!#^ing big."

In the above examples, we created a lambda and a Proc.new and stored them it in the “cool_lambda” and “neat_proc” variables, respectively. When we called “cool_lambda”, we got what we would expect:

> =>Blue whales are really @!#^ing big.

What about “neat_proc”?? Well, same thing:

> =>Blue whales are really @!#^ing big.

Okay, that was boring. Let’s try and make them act differently:

    cool_lambda = lambda do |subject, predicate|
      puts subject + predicate
    end
    cool_lambda.call("Blue whales")
    #=> "ArgumentError: wrong number of arguments (1 for 2)"

    neat_proc = proc do |subject, predicate|
      puts subject + predicate
    end
    neat_proc.call("Blue whales")
    #=> "TypeError: no implicit conversion of nil into String from"

On the left, when we input “cool_lambda.call(“Blue whales)”, we got the error message “ArgumentError: wrong number of arguments (1 for 2)”. This message told us that we called a lambda with the incorrect number of arguments, expecting arguments for both the parameters referenced in the lambda block.

On the right, we do the same thing with “neat_prom”, but (finally) we get something different. Entering “neat_proc(“Blue whales)” resulted in the error message “TypeError: no implicit conversion of nil into String form”.

What this means is that Ruby read “neat_proc.call(“Blue whales”)” as “Blue whales” + nil” and alerted us of an error because it did not know how to add a String to nil, **not** because there was an incorrect number of arguments. Procs created with Proc.new do not care if there are an incorrect number of arguments. Procs created with lambdas do.

**2\. Lambdas and procs disagree on how to ‘return’**

We can demonstrate this difference by writing two methods that use ‘return’ — One with a lambda and one with a proc.

    def lambdatime
      puts "before the Proc is best."
      cool_lambda = lambda do
        puts "procs are the best."
        return
      end
      cool_lambda.call
      puts "lambdas are the best."
    end

Here, we have our method “lambdatime”, which consists of the lambda “cool_lambda” and a few strings we want to see when we call the method. When we call “lambdatime”, after defining the method, we get three outputs:

     => before the Proc is best.  
     => procs are the best.  
     => lambdas are the best.

Let’s explore what happens when we call “lambdatime”: Ruby starts by printing “before the Proc is best.” to the console. Next, we enter the block created by “cool_lambda”, and Ruby prints “procs are the best.” to the console. Last, the ‘return’ inside the lambda proc tells Ruby to run the code directly outside of the lambda bloc before breaking out of the method, which allows the the method to print “lambdas are the best.” to the console.

Now, let’s look at “proctime”:

def proctime
  puts "before the Proc is best."
  neat_proc = Proc.new do
    puts "procs are the best."
    return
  end
  neat_proc.call
  puts "lambdas are the best."
end

Here’s our “proctime” method, which is exactly the same as our “lambdatime” method, except we create a block with Proc.new instead of lambda. When we input “proctime”, we only get two outputs:

    => before the Proc is best.  
    => procs are the best.  

Here’s what happens when we called “proctime”: Ruby starts the same way as it does when running “lambdatime” and prints “before the Proc is best.” to the console. Next, we enter the block created by “neat_proc”, and Ruby prints “procs are the best.” to the console — Exactly the same as “lambdatime”. Last, the ‘return’ inside the Proc.new proc tells Ruby to break out of the “proctime” method before reading the final puts statement. “Proctime” and “lambatime” only diverge in this scenario when their procs (one lambda and one Proc.new) tell Ruby to ‘return’.

That’s it. The two important differences between Proc.new and lambda:

1.  Procs don’t check for the number of arguments, while lambdas do.
2.  Lambdas and procs disagree on the meaning of the word ‘return’.
