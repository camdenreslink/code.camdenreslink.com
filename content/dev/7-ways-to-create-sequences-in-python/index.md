+++
title = "7 Ways to Create Sequences in Python"
subtitle = "For, Iters, Recursion, Maps, Etc."
bannerFigCaption = ""
date = "2018-05-12"
summary = "A sequence in mathematics, is a collection (like a set) of mathematical objects where the order of the objects is significant, and duplicate members of the collection are allowed. In computer science, we represent sequences as arrays, lists, streams, and a variety of other data structures. Creating sequences and operations on already existing sequences is at the core of many software applications."
+++

Background
==========

A *sequence* in mathematics, is a collection (like a set) of mathematical objects where the order of the objects is significant, and duplicate members of the collection are allowed. In computer science, we represent sequences as arrays, lists, streams, and a variety of other data structures. Creating sequences and operations on already existing sequences is at the core of many software applications. In this post, we'll look at some techniques for creating sequences using Python 3. The methods will vary based on the sequence we want to produce. Some sequences are infinite, some depend on their index, some depend on previous values in the sequence.

For-Loop
========

Sometimes when we know the length of a finite sequence, it is easy to write a simple for-loop to populate the sequence. Consider the sequence consisting of the first `n` values of the [Fibonacci Sequence](http://mathworld.wolfram.com/FibonacciNumber.html). The nth value in the Fibonacci sequence is given by the sum of the two previous values in the sequence, i.e. `F[n] = F[n - 1] + F[n - 2]`.

{{< highlight-custom language="python" header-text="python" >}}
def fibonacci_first_n(n):
    sequence = [1, 1]

    if n == 1:
        return [1]
    elif n == 2:
        return [1, 1]

    for index in range(n):
        sequence.append(sequence[-1] + sequence[-2])

    return sequence
{{< /highlight-custom >}}

This gives our desired output: 1, 1, 2, 3, 5, 8, 13, 21, ...

List Comprehension
==================

If each value in your sequence can be calculated using a simple expression (where every value follows some rule), [list comprehensions](https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions) provide a terse and expressive method for creating your sequence.

List comprehensions follow the format: `[{expression with variable} for {variable} in {iterator} if {condition with variable}]`

Let's consider the simple example of generating the first n-even numbers:

{{< highlight-custom language="python" header-text="python" >}}
def first_n_evens(n):
    return [2 * n for n in range(1, n + 1)]
{{< /highlight-custom >}}

or alternatively expressed using a conditional check,

{{< highlight-custom language="python" header-text="python" >}}
def first_n_evens(n):
    return [n for n in range(1, 2 * (n + 1)) if n % 2 == 0]
{{< /highlight-custom >}}

This gives our desired output: 2, 4, 6, 8, 10, 12, ...

Recursion
=========

A function is recursive if it calls itself with new arguments, eventually leading to some terminating condition resulting in a value being returned from the intial function call. For example, our fibonacci sequence can also be defined recursively. Notice how the inner function `recurse` calls itself:

{{< highlight-custom language="python" header-text="python" >}}
def fibonacci_recursive_first_n(n):
    if n == 1:
        return [1]
    elif n == 2:
        return [1, 1]

    def recurse(index, resultsSoFar):
        if index == n:
            return resultsSoFar
        intermediateResult = resultsSoFar + [resultsSoFar[-1] + resultsSoFar[-2]]
        return recurse(index + 1, intermediateResult)

    return recurse(2, [1, 1])
{{< /highlight-custom >}}

This gives our desired output: 1, 1, 2, 3, 5, 8, 13, 21, ...

Create a Map Function
=====================

In functional programming, a map function takes a n input structure parameterized by type T1, and a mapping function from type T1 to type T2. Calling this map function will call the passed in mapping function on each value of the input structure and return an output structure parameterized by type T2. That sounds complicated, but in practice it's pretty easy! For example, if we have a list of Rectangles with width and heights, and we call map passing in an area function that returns width * height, we end up with a list of areas.

{{< highlight-custom language="python" header-text="python" >}}
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

rectangles = [
    Rectangle(1, 2),
    Rectangle(4, 8),
    Rectangle(3, 2)
]

areas = map(lambda rect: rect.width * rect.height, rectangles)

print(list(areas))
{{< /highlight-custom >}}

Generator
=========

A generator function is a special function in Python, that can `yield` multiple values, instead of just a single return. Calling the generator creates an iterator, which can be iterated through with a for-loop.

Generators are computed lazily. That means the next value isn't calculated until you ask for it. This also means generators can represent infinite sequences. For example, the following generator represents all square numbers:

{{< highlight-custom language="python" header-text="python" >}}
import itertools

def squares():
    n = 1
    while(True):
        yield n*n
        n += 1


{{< /highlight-custom >}}

You can use the `itertools.islice` library to take the first n-values:

{{< highlight-custom language="python" header-text="python" >}}
first10 = itertools.islice(squares(), 10)
{{< /highlight-custom >}}

Generator Expression
====================

List comprehensions are to lists as generator expressions are to generators. We can create our squares example with a one-liner:

{{< highlight-custom language="python" header-text="python" >}}
square_gen_expression = (n * n for n in itertools.count(1))
{{< /highlight-custom >}}

Implement a Class With \_\_iter\_\_ and \_\_getitem\_\_
===============================================

You can create a container class that wraps some iterator type by implementing the `__iter__` and `__getitem__` methods.

{{< highlight-custom language="python" header-text="python" >}}
class EveryThird:
    def __init__(self):
        super().__init__()
    def __iter__(self):
        return (3 * n for n in itertools.count(1))
    def __getitem__(self, i):
        return (i + 1) * 3
{{< /highlight-custom >}}

You can test it out with the following code:

{{< highlight-custom language="python" header-text="python" >}}
every_third = EveryThird()

'''test the indexing behavior'''
print(every_third[5])

for i in every_third:
    '''need this clause, because it's an infinite sequence'''
    if i == 18:
        break
    else:
        print(i)
{{< /highlight-custom >}}

Conclusion
==========

Python offers a variety of methods to create sequences of values. Which you choose depends on the behavior you application needs, and the properties of the sequence you are representing.