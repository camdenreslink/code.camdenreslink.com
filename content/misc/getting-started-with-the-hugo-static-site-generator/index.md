+++
title = "Getting Started with the Hugo Static Site Generator"
subtitle = "How this Blog was Created"
bannerFigCaption = "This fig caption should give attribution to banner image source."
date = "2018-02-16"
+++

Motivation
==========

There are already thousands (millions?) of technology and programming blogs out there, so why would anybody add to this already enormous pile of material? What could they possibly hope to contribute, that hasn't already been detailed in a blog post by somebody else? Isn't it a bit presumptuous to believe that you have ideas to communicate that other people will find interesting?

Luckily, all of the self-doubt in the previous paragraph is misplaced because programming is a huge discipline. For every topic that has been covered in a blog post, there are ten more that have not been. Programming is also a creative activity (in the sense that something is created at the end of the process). This means that new topics to write about are being invented every day. Nobody would criticize a novel writer by saying, "Aren't there already enough novels out there?".

My primary motivation for writing a blog is to document new topics as I learn them. In the past, I would spend hours exploring a framework or writing a small proof of concept to satisfy my curiosity. However, because these efforts weren't documented anywhere they have been lost to the sands of time, locked into hard drives that have long since been recycled and disposed of.

In this post, I will document the process of creating this blog. I will not give step-by-step instructions (these can be found within the [Hugo Documentation](https://gohugo.io/documentation/)). Instead, I will be highlighting my overall thought process and some gotchas I ran into along the way.

Researching Existing Blogs
==========================

The first step in the process of creating a blog is drawing inspiration from other blogs and websites that you enjoy reading. I decided to research other blogs on the following criteria:

* Content
* Layout
* Other Design Elements

Here are some blogs/websites that I researched:

{{< figure-resource resource="img/screenshot_hanselman.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="https://www.hanselman.com/blog/"
                    caption="Scott Hanselman's Blog" >}}

{{< figure-resource resource="img/screenshot_codeschool.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="https://www.codeschool.com/blog/"
                    caption="Code School's Blog" >}}

{{< figure-resource resource="img/screenshot_cleancoder.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="http://blog.cleancoder.com/"
                    caption="The Clean Code Blog" >}}

{{< figure-resource resource="img/screenshot_csstricks.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="https://css-tricks.com/"
                    caption="CSS Tricks" >}}

{{< figure-resource resource="img/screenshot_nautilus.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="http://nautil.us/blog"
                    caption="Nautilus Blog" >}}

{{< figure-resource resource="img/screenshot_hackernews.png" 
                    imgProcCommand="Resize" 
                    imgProcOptions="600x" 
                    link="https://news.ycombinator.com/"
                    caption="Hacker News" >}}

I really admire the simplicity of Robert C. Martin's blog and the Hacker News website. The lack of extraneous design elements allows the reader to focus on the content rather than images, social buttons, and sticky nav bars. Another takeaway, was that I really enjoyed the banner images at the top of the posts for the Code School and Nautilus blogs.

Choosing (and Implementing) a Layout
====================================

I chose to take the approach of first designing a static demo webpage to act as a template. Then, when I was satisfied with the look that was created, I then translated and split up this template into something Hugo (my chosen blog engine) could handle. Hugo requires two types of pages: the page that displays a blog post, and the page that lists blog posts (based on section, tags, or category) to choose from. This first type is called a {{% code %}}single{{% /code %}} page, and the second type is called a {{% code %}}list{{% /code %}} page. So, to form the skeleton of my static template I had to choose a general layout. I found that 99% of blogs out there fit into one of 3 categories: single column, two column with the content on the right, and two column with the content on the left:

{{< figure-resource resource="img/layouts.png" >}}

Of the blogs that I researched, I liked the layout of the Nautilus blog the best, so I tried to replicate their two column layout (if you compare my page structure to theirs, it is very similar). When trying to implement this layout, I found the [Learn CSS Layout](http://learnlayout.com/) website to be very helpful. Here is some pseudo-code of my blog post layout:

{{< highlight-custom html >}}
<header></header>
<main>
    <article>
        <section id="post-content"></section><!-- ghjkghjghjghjgkhjjjjghjghjghjghjghjghjghgggggggggggggggggggggggggg
     --><aside id="post-sidebar"></aside>
    </article>
</main>
<footer></footer>
{{< /highlight-custom >}}

{{< highlight-custom css >}}
main {
    padding: 0 15%;
}

#post-content {
    width: 70%;
    display: inline-block;
    vertical-align: top;
}

#post-sidebar {
    width: 30%;
    display: inline-block;
    vertical-align: top;
}
{{< /highlight-custom >}}

You can view a jsbin of this simple layout example [here](https://jsbin.com/miqewapawu/edit?html,css,output).
Designing Type for Legibility
=============================


What is a Static Site Generator?
================================



Benefits of Hugo
================



Translating My Static Templates Into a Blog Engine
==================================================



Setting up an Asset Pipeline
============================



Deployment
==========