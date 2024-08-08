# Interview task

### Installation
* `npm install` or `yarn`

### Development 
* run `npm start` which will start `ng serve`

# Questions

##### 1. Explain your choices regarding stack used as well as alternatives and their pros and cons
`I choose Angular7 and ngrx because i like ng architecutre and homogeneity in making projects.
Biggest pros of using these frameworks are scalability and nice tools in expanding. One of cons is definitely
time.`
#####  2. How would you go with application internationalisation?
`I would implement i18n module in AppModule. Then use pipe in view.`
#####  3. What could impact this application's performance most in longer term and what would be your ways to optimize it?
`Very long list. I would implement Virtual Scroll with Angular CDK`
#####  4. What if you had to make it work on lower-end devices and slow internet connection? What trade-offs would have to be made?
`I will implement pagination for mobile devices for list`
#####  5. How would you report and collect errors from application?
`We can collect errors in ngrx. We handle them in effects. We can send them automatically when it occurs.`
#####  6. How long did it take you to code this app?
`Around 10 hours`

Development task:
Using Reddit API (https://www.reddit.com/dev/api), design and implement modern frontend application for browsing articles from particular subreddits.

Resulting application should be available and fully functional on both desktops and mobile devices. Look-and-feel will have a significant impact on the rating.

There is no need to implement authentication, a login mechanism nor users management capabilities. Simply use read-only features provided by API.

Core requirements:
1. Switching between subreddits of your choice - i.e. Awww, memes, quantum, Music, BeAmazed.
   - The list of subreddits should be hardcoded in the app.
2. List of the articles from chosen subreddit.
   - List should be always sorted from newest to oldest articles
   - Expanding with infinite-scroll mechanism.
   - Searching by keyword feature.
3. Single article page with user comments.
   - Tree structure of comments should be noticeable

The type and amount of article data displayed on lists and single pages are unrestricted. It’s up to you and your sense of UX/UI.

Remember to provide tests. We don't require e2e tests (eg. selenium), but unit tests (components, utilities, reducers etc.) are a must!

Please keep in mind future development and project maintenance.

API hints:
1. Useful endpoints for this task are:
   - https://www.reddit.com/dev/api#GET_new
   - https://www.reddit.com/dev/api#GET_search
   - https://www.reddit.com/dev/api#GET_comments_{article}
2. To receive JSON data format add '.json' suffix
   i.e.: https://www.reddit.com/r/Music/new.json - provides newest articles from subreddit 'Music'


Questions (answers in English please):
1. Explain your choices regarding stack used as well as alternatives and their pros and cons
2. How would you go with application internationalisation?
3. What could impact this application's performance most in longer term and what would be your ways to optimize it?
4. What if you had to make it work on lower-end devices and slow internet connection? What trade-offs would have to be made?
5. How would you report and collect errors from application?
6. How long did it take you to code this app?
   Please write answers in the ReadMe file in your repository
