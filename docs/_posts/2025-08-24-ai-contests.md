---
layout: post
title:  "Navigating competitive programming in the era of LLMs"
date:   2025-08-24 18:10:00 -0400
categories: blog
---

{% include_relative posts.html %}

Disclaimer: These are my opinions and thoughts, and shouldn't be taken as ground truth facts. Much of what I'm writing is based on ideas I've thought of, or things I've discussed or heard from other people. Also my thoughts may change over time, depending on factors like future capabilities of AI.

## Intro

Over the last few years, we've all seen AI change. ChatGPT got popular in the end of 2022, and every 6 months since then, some drastic change has occurred.

Several decades ago, even something like chess was dominated by humans. But this changed in the 1990s when <a href="">IBM's engine DeepBlue was able to beat grandmasters like Gary Kasparov.</a> Now OpenAI has models that has placed <a href = "https://codeforces.com/blog/entry/145474">6th in the IOI</a> unofficially (the four players it lost to were all 3000+ rated in Codeforces, which is roughly equivalent to being top 50 in the world).

Out of the many things that AI has gotten good at, I, as well as many others, had expected the last thing for it to be good at to be math / computing olympiads. Many of the problems in these contests (at least the higher quality ones) are quite original, and require creativity in coming up with solutions. AI models are largely based on training data, so it's surprising that they should be able to solve non-standard problems.

A bit of background about myself (which you can also find clicking through my website). I used to do some regional level math contests in high school, as well os other contests including AMC, AIME and ARML. I wasn't a top competitor, but I do find my involvement in these contests to be responsible for my interest in mathematics -- at the time, I liked combinatorics problems (and still find them fun to work in). Starting from college, I've been highly involved in competitive programming, and am a Master in Codeforces (usually around 2100-2200) rated, and have been doing contests on and off. I was also an ICPC World Finalist from Georgia Tech a couple of years ago. Nowadays, I spend my time doing grad school work, and also teach competitive programming on the side.

I remember in early 2022 hearing about DeepMind's model <a href = "https://deepmind.google/discover/blog/competitive-programming-with-alphacode/">AlphaCode</a>, which could apparently get ~1300 rating. Getting to this level is nontrivial for a human, and often requires prior problem-solving experience: for example through math contests, or through a couple of months of practicing competitive programming. This was before ChatGPT came out, so it was new news. Then, in late 2022, ChatGPT came out. I didn't play around with it much until 2023, where I found it could help me significantly with my internship work (I was working at a tech startup during the time). It did dawn to me that stackoverflow was becoming less useful, and I could learn things through ChatGPT. ChatGPT was still in somewhat primitive stages back then though and did hallucinate a lot. I remember testing it with competitive programming problems at the time -- It could get some test cases correct in USACO Bronze problems and could spit out implementations for standard data structures such as segment trees and link-cut trees. At the time, I saw ChatGPT as a useful way to retrieve facts about things that are well-known.

The end of 2024 was when my mind was blown -- OpenAI had announced a model o1 that was ~1800 rated. I was still somewhat skeptical since I hadn't tried competing with it or seen it in action. But I was convinced that AI was better than me after o3 was released in the Spring 2025. I did use it to prove a lemma in one of my papers, and I definitely found it to be a useful tool. Very recently, GPT-5-pro has been shown to be able to discover new mathematics (see <a href="https://x.com/SebastienBubeck/status/1958198661139009862">this X post</a>). I guess I wasn't too surprised at this point, after having seen o3 be a useful tool in research. But this suggests AI is still getting better. What will the world look like when it's better than every human at every (technical) task?

## What role do contests play today?

This brings the following question: what role do math / programming contests play today? AI can solve everything, right? What's the point of trying to do something that's already solved by AI? Why can't we just use AI for everything, since that's anyways what we'll do in our careers?

Don't get me wrong, I think it's important to be able to use AI. But it's also important to be able to think critically about problems and evaluate information that is given to you. Critical thinking is still a needed skill. In life, you'll hear opinions and perspectives from others, and need to have something to form your own opinion after evaluating what you observe.

### Will AI devalue competitive programming achievements? 

From my experience doing contests, it feels very rewarding when you achieve something in competitive programming, such as an increase in Codeforces rating. I've gotten +150 rating a couple of times, and I can confirm the dopamine rush is great.

I'm not sure how things will be if it's possible for anyone to get 2100 rating by just plugging the problem statement into AI. This part is a bit sad to think about. Some companies (including many tech startups and quant companies) have tried to hire top talent. Many of them still hire via metrics like Codeforces ratings and awards at contests like IOI / ICPC. I wonder if the increase in AI's ability will devalue hard-earned competitive programming achievements.

### Will programming contests feel "outdated" in the future?

In the past, programming contests gave people valuable skills for programming. This includes things like finding edge cases and debugging speed. In some sense the results were a bit tangible. There are still benefits to gain from contests, even after AI is better than us. The "critical thinking" skill is still to be gained from programming contests; however, the notion is a bit vague bit vague, with no concrete results. Maybe someone who wants to do well in a math contest may gain benefit from it (because of the similarity of problem style, especially for combinatorics problems), but for people who want to get into tech may feel less and less inclined to do them, just because it's getting farther and farther from what "real-world programming" is.

Perhaps coding will later not be a needed skill, but "critical thinking" could still be a needed skill. A bit of a wild idea, but if "critical thinking abilities" is the main goal, this may result in less of a shift towards learning coding, and more of a shift to learning things that directly foster "critical thinking" such as math contests. The last few years has seen a shift in focus from math contests to programming contests, but maybe we'll shift back to math contests. Again, this is just some very wild speculation, but it does seem like a possibility to me.

### Other comments: Contests for evaluating your own skills

Even if all our jobs will involve AI, people will still want to be able to evaluate themselves. Doing a difficult task where AI isn't allowed, such as a contest, gives an objective metric about your individual skills (it may debatable whether this is a good metric, but it's nevertheless an objective metric). You can have some kind of ownership over your achievements. You achieved not because you were carried by AI -- you achieved because of your own hard work and good performance.

Again, I definitely do think people should learn to use AI. It makes you more productive. But there should also be some kind of independence where you can make your own decisions without depending on AI.

## My thoughts on rules for programming contests

For a long time, I've had a point of confusion for what the rules should look like in programming contests. Atcoder has a fairly lenient AI policy (As of August 2025 when this blog post is being written). You can use autocomplete, and you can translate problem statements <a href = "https://info.atcoder.jp/entry/llm-rules-en">https://info.atcoder.jp/entry/llm-rules-en</a>. Meanwhile some contests like USACO strictly prohibit any use of AI or autocomplete.

As AI gets stronger (maybe we're already at this stage), autocomplete should be able to infer what the problem statement is asking when looking at the code, and fix the code. It does seem necessary that there needs to be a strict ban on using AI. Maybe AI for looking up syntax will be justified, but it's not clear what justifications there can be for other kinds of AI.

There are many people who want to do programming contests without any unfair help. But there are also others who decide to cheat, and AI has made it much easier for them to cheat. In the past, cheating often involved some form of collaboration during the ongoing contest. In some sense, cheating was hard for lower rated participants since it's nearly impossible to get a high-rated participant to share their answers during an ongoing contest. But now it's simple -- just ask ChatGPT, which has comparable skill to a top 0.5% level competitive programmer. Maybe some form proctoring is needed to prevent cheating? Also the Universal Cup has started <a href="https://qoj.ac/blog/qingyu/blog/1339">requiring contestants to record their screen when competing</a> -- maybe this is the new norm?

## Conclusion

The world as I see it has changed a lot, and the role of things like programming contests is getting less clear. I've written this blog to lay out these concerns, I'm curious to see what happens in the next few years.