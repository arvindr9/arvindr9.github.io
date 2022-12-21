---
layout: post
title:  "Some concentration inequalities"
date:   2022-10-25 18:10:00 -0400
categories: blog
---

{% include_relative posts.html %}

I am just working through some proofs of this paper that I had presented recently in a reading group: <a href = "https://arxiv.org/abs/1605.07272">
Matrix Completion has no Spurious Minimum</a>

First, let's present Bernstein's Inequality:

Let $$v_i$$ ($$1 \leq i \leq n$$) be independent random vectors, and $$v = \sum_{i=1}^n v_i$$. Suppose $$\sigma^2 = \mathbb{E} \sum_{i=1}^n ||v_i||^2$$ and for all $$i$$ $$||v_i|| \leq R$$ with probability $$1$$, then

$$\mathbb{P}(||v|| > t) \leq d \exp(-t^2 / (3 \sigma^2 + 3tR))$$

<!-- Include Talagrand's inequality too? idk -->