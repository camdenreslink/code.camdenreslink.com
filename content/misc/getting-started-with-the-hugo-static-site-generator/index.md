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

I really admire the simplicity of Robert C. Martin's blog and the Hacker News website. The lack of extraneous design elements allows the reader to focus on the content rather than images, social buttons, and sticky nav bars. Another takeaway, was that I really enjoyed the banner images at the top of posts for the Code School and Nautilus blogs.

Choosing (and Implementing) a Layout
====================================

I chose to take the approach of first designing a static demo webpage to act as a template. Then, when I was satisfied with the look that was created, I translated and split up this template into something Hugo (my chosen blog engine) could handle. Hugo requires two types of pages: the page that displays a blog post, and the page that lists blog posts (based on section, tags, or category) to choose from. This first type is called a `single` page, and the second type is called a `list` page. So, to form the skeleton of my static template I had to choose a general layout for both. I decided to start with the `single` page template. I found that 99% of blogs out there fit into one of 3 categories: single column, two column with the content on the right, and two column with the content on the left:

{{< figure-resource resource="img/layouts.png" >}}

Of the blogs that I researched, I liked the layout of the Nautilus blog the best, so I tried to replicate their two column layout (if you compare my page structure to theirs, it is very similar). When trying to implement this layout, I found the [Learn CSS Layout](http://learnlayout.com/) website to be very helpful. Here is some pseudo-code of my blog post layout (this is for a two column layout with the content on the left):

{{< highlight-custom html >}}
<header></header>
<main>
    <article>
        <section id="post-content"></section><!--
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

You can view a jsbin of this simple layout example [here](https://jsbin.com/miqewapawu/edit?html,css,output). The `list` layout was very simple to implement. It's just a sequence of `div` tags, each representing an article.

Designing Type for Legibility
=============================

The built-in browser css styles for fonts and written text do not make for very easy to read blog posts. I adhered to the following principles when creating my templates in an effort to maximize legibility:

1. **Use a large enough `font-size`**: I set my body text to 16px. Small text can be difficult to read.
2. **Adjust the `line-height` appropriately**: I chose a `line-height` of 1.6. This allows the reader to focus on the line they are currently scanning without their eye being distracted by the adjacent lines. The additional white space gives your content a less condensed and more approachable look.
3. **Make sure your font color and background have enough contrast**: This is especially important for individuals with vision impairment. You can check your contrast score (based on the [Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/TR/WCAG21/)) using the interactive tool at [https://webaim.org](https://webaim.org/resources/contrastchecker/?fcolor=3C3C3C&bcolor=F1F1F1) (The tool is pre-filled with this blog's contrast score).
4. **Make sure your font color and background don't have *too much* contrast**: Black text on a white background or vice-versa can strain the eyes. It's best to have dark grey and off-white colors (while still making sure you have enough contrast to be legible).
5. **A shorter line length (or *measure*) is easier to read**: The ideal line length is 66 characters ([source](http://webtypography.net/2.1.2)). Line length is a function of `font-size` and the width of the containing box. It is difficult to enforce this in a web environment, because users can easily resize their browser window and adjust their font size. I tried to ensure that the line length wasn't too long during typical use. It is around 80 characters long with a `font-size` of 16px and a window width of 1536px (my containing box has its width specified as a percentage, so line length is actually a function of font-size and window width in my case). 

For more suggestions on web typography, check out the following website: [webtypography.net](http://webtypography.net/toc/). I haven't implemented all of the suggestions in this guide, but I may revisit it in the future.

What is a Static Site Generator?
================================

Traditionally, when you want to create a website that merges data/content with templates to return a fully formed html page to the browser you use a server side language (python, ruby, C#, etc.). The HTTP request for a specific page from the browser hits the web server. A call then is made by the web server to retrieve the requested content from a SQL database. This content is then combined with a predefined template (Jinja, ERB, Razor, etc.) to generate an html file. This file is sent back to the browser and displayed. This is how WordPress works. It uses PHP as its server side language, and MySQL as its database to store content related to blog posts. If you just use the admin interface and install themes, you may never see those internal details.

TODO: Insert diagram of client - server - db architecture. Rendering templates each call.

For some websites this setup is required because of the dynamic nature of the data and pages being rendered. In the case of a blog, it is total overkill. Performance can be improved by setting up different caching schemes (saving trips to the database and cpu-intensive template rendering calls), but it isn't worth it for a site that doesn't differentiate between users when serving content.

An alternative approach is to use a *static site generator*. In this approach, you use a framework/application that runs on your local computer (not on a web server). This application combines templates with content files to create the html files for your website all at once. You then upload these static files to a web server. Now, when a browser makes an HTTP request for a specific web page, the web server just returns the file that was generated ahead of time. No database is even required (eliminating a huge dependency and reducing complexity considerably). Your hosting options become a lot cheaper as well, because you don't need to run any application code. You just need a host that can serve static files.

TODO: Insert diagram of client - server architecture. Just serving static files.

Benefits of Hugo
================

The most popular static site generator by far is [Jekyll](https://jekyllrb.com/). It is a great choice with a huge community and a lot of resources for learning. I chose to go with another static site generator, [Hugo](https://gohugo.io/), for my site for one reason: it compiles your website lightning fast. If you have a website with a lot of content, jekyll will take much longer than hugo to recompile all of your pages. This is not ideal if you want a REPL-like experience when blogging (update a file, check the browser to see how your changes look, rinse and repeat).

Despite Hugo having a smaller community that Jekyll, it has a fairly large community in its own right. It also has all of the features that you need to create a well organized blog:

* **Content (in Markdown files) separated from layout**, allowing you to focus on your content while authoring posts.
* **Code reuse** via partials and shortcodes.
* **Site organization** through categories, tags and sections.

I find that Hugo strikes a nice balance between keeping things simple, while providing the capability to create custom behavior when desired.

Translating My Static Templates Into a Blog Engine
==================================================

At this point in the process, I had two html files with the exact layouts I wanted for my blog. Dummy Lorem Ipsum content was filled in, and all of the CSS was crammed into a `style` tag in the `head`.

Setting up an Asset Pipeline
============================



Deployment
==========



Some Tricky Bits
================