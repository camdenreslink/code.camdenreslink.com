+++
title = "The Expression Problem in .NET"
subtitle = "The Duality of Object Oriented and Functional Programming"
bannerFigCaption = ""
date = "2018-05-18"
summary = ""
+++

Background
==========

The [expression problem](https://en.wikipedia.org/wiki/Expression_problem) is an ideal to strive towards in the design of programming languages. It is relevant when the data in your program can be represented as cases, with operations that operate on those cases. For example, say your data represents shapes. The cases would be circle, rectangle, triangle, etc. Some possible operations would be area(), perimeter(), centroid(), etc.

The expression problem is solved in a language when you can add a new case or a new operation without needing to recompile any of the other cases/operations. The problem is stated by [Philip Wadler](http://homepages.inf.ed.ac.uk/wadler/papers/expression/expression.txt) (who coined the term) as follows:

> The Expression Problem is a new name for an old problem.  The goal is
to define a datatype by cases, where one can add new cases to the
datatype and new functions over the datatype, without recompiling
existing code, and while retaining static type safety (e.g., no
casts).

The problem is best understood via code, so we will examine the shapes example outlined above in both C# and F#. Object oriented and functional programming languages have different characteristics when examined within the context of the expression problem.

Object Oriented - C#
====================

The way that we would typically represent *cases* that support common *operations* in object oriented programming is to create an abstract superclass that defines virtual methods, and for each case create a subclass that overrides those methods. For example, here is our abstract superclass. It defines the operations that our cases will support:

{{< highlight-custom language="csharp" header-text="Shape.cs" >}}
public abstract class Shape
{
	abstract public double Area();
	abstract public double Perimeter();
}
{{< /highlight-custom >}}

Here is each case, defined in their own subclass:

{{< highlight-custom language="csharp" header-text="Rectangle.cs" >}}
pubic class Rectangle : Shape
{
	private readonly double width;
	private readonly double height;
	
	public Rectangle(double width, double height)
	{
		this.width = width;
		this.height = height;
	}
	
	public override double Area()
	{
		return this.width * this.height;
	}
	
	public override double Perimeter()
	{
		return 2 * (this.width + this.height);
	}
}
{{< /highlight-custom >}}

{{< highlight-custom language="csharp" header-text="Circle.cs" >}}
public class Circle : Shape
{
	private readonly double radius;
	
	public Circle(double radius)
	{
		this.radius = radius;
	}
	
	public override double Area()
	{
		return Math.PI * this.radius * this.radius;
	}
	
	public override double Perimeter()
	{
		return 2 * Math.PI + this.radius;
	}
}
{{< /highlight-custom >}}

What if we wanted to create another case? It's as simple as adding another subclass of Shape. For example, let's add the case of a RightTriangle shape:

{{< highlight-custom language="csharp" header-text="Triangle.cs" >}}
public class RightTriangle : Shape
{
	private readonly double baseLength;
	private readonly double height;

	public RightTriangle(double baseLength, double height)
	{
		this.baseLength = baseLength;
		this.height = height;
	}
	
	public override double Area()
	{
		return 0.5 * this.baseLength * this.height;
	}
	
	public override double Perimeter()
	{
		return this.baseLength + this.height 
			+ Math.Sqrt(this.baseLength * this.baseLength 
					  + this.height * this.height);
	}
}
{{< /highlight-custom >}}

The case-adding clause of the expression problem was satisfied, because we didn't need to modify the base class or any of the other subclasses to add a new case! What about adding a new operation over these cases? Let's add centroid (the center of the shape). We'll have to add it to our base class first:

{{< highlight-custom language="csharp" header-text="Shape.cs" >}}
public abstract class Shape
{
	abstract public double Area();
	abstract public double Perimeter();
    abstract public Tuple<double, double> Centroid();
}
{{< /highlight-custom >}}

Oh no! We're going to have to add it to every single one of our subclasses, modifying each subclass!

{{< highlight-custom language="csharp" header-text="C#" >}}
public class Rectangle : Shape
{
	private readonly double width;
	private readonly double height;
	
	public Rectangle(double width, double height)
	{
		this.width = width;
		this.height = height;
	}
	
	public override double Area()
	{
		return this.width * this.height;
	}
	
	public override double Perimeter()
	{
		return 2 * (this.width + this.height);
	}
	
	
	public override Tuple<double, double> Centroid()
	{
		return Tuple.Create(this.width / 2, this.height / 2);	
	}
}

public class Circle : Shape
{
	private readonly double radius;
	
	public Circle(double radius)
	{
		this.radius = radius;
	}
	
	public override double Area()
	{
		return Math.PI * this.radius * this.radius;
	}
	
	public override double Perimeter()
	{
		return 2 * Math.PI + this.radius;
	}
	
	public override Tuple<double, double> Centroid()
	{
		return Tuple.Create(this.radius, this.radius);	
	}
}

public class RightTriangle : Shape
{
	private readonly double baseLength;
	private readonly double height;

	public RightTriangle(double baseLength, double height)
	{
		this.baseLength = baseLength;
		this.height = height;
	}
	
	public override double Area()
	{
		return 0.5 * this.baseLength * this.height;
	}
	
	public override double Perimeter()
	{
		return this.baseLength + this.height 
			+ Math.Sqrt(this.baseLength * this.baseLength 
					  + this.height * this.height);
	}
	
	public override Tuple<double, double> Centroid()
	{
		return Tuple.Create(2 * this.baseLength / 3, this.height / 3);	
	}
}
{{< /highlight-custom >}}

This fails the expression problem, because adding new operations will force us to recompile the code of already existing cases.

So we can see that in an object oriented programming style when using inheritance to represent our cases, it is easy to add new cases (`RightTriangle`) but difficult to add new operations (`Centroid`). Let's examine the functional style of programming via F#, to see what characteristics it has when posed with this problem.

Functional - F#
====================

In functional programming with [Algebraic Data Types](https://en.wikipedia.org/wiki/Algebraic_data_type), cases are conveniently represented using sum types. In F# these are implemented as [discriminated unions](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions). To operate on these cases, you must have a [match expression](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/match-expressions) which specifies the desired output for each case. One very nice feature of discriminated unions and match expressions, is that they support [exhaustive matching](https://fsharpforfunandprofit.com/posts/correctness-exhaustive-pattern-matching/). This means that if you don't handle all of the cases, you will get a compiler error. This leads to more correct code, as all combinations of cases must be explicitly accounted for. Here is a type definition for our shapes, along with some functions that provide operations on that data:

{{< highlight-custom language="fsharp" header-text="Shape.fs" >}}
open System

type Shape = 
    | Rectangle of width: double * height: double
    | Circle of radius: double

let area shape =
    match shape with
    | Rectangle (width, height) -> 
        width * height
    | Circle radius -> 
        Math.PI * radius * radius

let perimeter shape =
    match shape with
    | Rectangle (width, height) -> 
        2.0 * (width + height)
    | Circle radius -> 
        2.0 * Math.PI * radius

(* Test out some code *)
let circle = Circle 2.42
area circle |> Console.WriteLine
{{< /highlight-custom >}}

If you've never used F# before, you'll notice how much more succinct it is than the equivalent C#. The match expressions look like super-charged case statements. Each case is represented by a case in our discriminated union, and each operation is represented by a function. Let's try what was so difficult in C#; let's try to add a new operation, centroid.

{{< highlight-custom language="fsharp" header-text="F#" >}}
let centroid shape =
    match shape with
    | Rectangle (width, height) -> 
        0.5 * width, 0.5 * height
    | Circle radius -> 
        radius, radius

(* Test out some code *)
let rectangle = Rectangle (42.42, 67.67)
centroid rectangle |> printfn "%A"
{{< /highlight-custom >}}

We didn't have to alter any of the other functions, or the initial definition of the cases! Neat! So, the expression problem is satisfied for creating new operations in the functional style of programming. This was something we couldn't achieve a second ago with idiomatic object oriented code. What if we try to add a new case to our functional code:

{{< highlight-custom language="fsharp" header-text="F#" >}}
type Shape = 
    | Rectangle of width: double * height: double
    | Circle of radius: double
    | RightTriangle of base': double * height: double
{{< /highlight-custom >}}

If we were to recompile, we'd see that all of our match expressions now fail to build. This is because of the exhaustive pattern matching mentioned before. We are now missing the RightTriangle case. So, we must edit all of the functions to account for the new case:

{{< highlight-custom language="fsharp" header-text="Shape.fs" >}}
open System

type Shape = 
    | Rectangle of width: double * height: double
    | Circle of radius: double
    | RightTriangle of base': double * height: double

let area shape =
    match shape with
    | Rectangle (width, height) -> 
        width * height
    | Circle radius -> 
        Math.PI * radius * radius
    | RightTriangle (base', height) ->
        0.5 * base' * height

let perimeter shape =
    match shape with
    | Rectangle (width, height) -> 
        2.0 * (width + height)
    | Circle radius -> 
        2.0 * Math.PI * radius
    | RightTriangle (base', height) ->
        base' + height + Math.Sqrt(base' * base' 
					             + height * height)   

let centroid shape =
    match shape with
    | Rectangle (width, height) -> 
        0.5 * width, 0.5 * height
    | Circle radius -> 
        radius, radius
    | RightTriangle (base', height) ->
        2.0 * base' / 3.0, height / 3.0

let triangle = RightTriangle (42.42, 67.67)
centroid triangle |> printfn "%A"
{{< /highlight-custom >}}

The thing that was easy in object oriented code (adding new cases), was difficult in functional code. The thing that was easy in functional code (adding new operations), was difficult in object oriented code. This is the crux of the expression problem, designing programming language features that can do both things well. If you have a data structure that won't be getting new cases added very frequently (or ever), the functional approach is better. If you have a data structure that will be constantly adding new cases but has less frequently added operations, the object oriented style is better.

Using the Visitor Pattern
=========================

The [Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern) confers some of the benefits of the functional style in an object oriented language. It allows you to add new operations to your data structure, without having to recompile the code that defines the data structure itself. The downsides are, it's hard to understand if you don't know what you're looking at, and it clutters your code with implementation details that aren't really relevant to your business logic.

Here is a basic implementation of the Visitor Pattern using our shapes example above:

{{< highlight-custom language="csharp" header-text="C#" >}}
{{< /highlight-custom >}}