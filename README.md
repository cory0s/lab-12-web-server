#### frontend-auth-web-server
## Auth0

### Research Conducted By: Chris Merritt, Spencer Hirata, Cory Henderson, Gregory Dukes

### Overall Score and Comments
#### Score (Out of 10): 6
#### General Comments
Describe the stack (front-end only? full stack?), database, efficiency, etc. Describe the general usability and learnability:

We were looking into intergrating this login system into our full stack app. The documentation was clear if we were starting from scratch, but we were running into issues with integrating with an existing code base. We had trouble with the ordering of the middleware functions- it was unclear which middleware function was supposed to run first. If implemented correctly, the login system would have been seamless, scalable and flexible.

#### Pros
* Gave good code examples for general setup. Clearly defined process for what code needed to be added.
* Great scalability if implemented correctly. 
* Addition of multiple login sources is possible without having to provide any additional code.

#### Cons
* Documentation did not give clear instruction of ordering of middleware. 
* Code examples were easy to copy into the project, but not well explained.

### Ratings and Reviews
#### Documentation
Good step by step installation process with clear code examples. However, they were not explained in an understandable way. Did not give clear documentation for ordering middleware.

#### Systems Requirements
* Express-Session
* Passport
* Passport-auth0


#### Ramp-Up Projections
3 Hours, depending on any road blocks in their way.

#### Community Support and Adoption levels
* This is a very popular framework that many companies are using. They have automatic login systems for Google Facebook, Windows, Github and linkedIn. 
* It usually has a great reputation among the javascript community, and is known as being an easier system to implement.


### Links and Resources
* [framework](http://xyz.com)
* [docs](http://xyz.com)
* [examples/tutorials](http://xyz.com)

### Code Demos
* [live/running application](http://xyz.com)
* [code repository](http://xyz.com)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
