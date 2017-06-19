# sampleApp
sampleApp is created for 'zooz' job interview task.

This is a node.js express REST API server that uses instagram API in order to fetch 'TAG' data (instegram hashtag #).  
You have the ability to feach 'TAG' data with the following 2 ways:  

1. **'/searchTag' endpoint** - will search tag by name, in our case 'telaviv', and return the tag variations
and number of public media with this tag. This api uses a direct call to 'api.instegram.com'.  

2. **'/randomLoveTag' endpoint** - will return one random variation of 'love' tag. This api uses 'instagram-node' librery.  
 
Although it's a simple server side (with few API's) this task was a bit chalenging for me, I started with one creative public API
that I found which returns a movie quate on every call (or a bunch of it - depends on the parameters).  
I wasn't sure whether this API authentication is as requested in this task, so yestarday I've decided to swich to another API that 
uses oAuth authentication.  
The authentication part was a bit challanging, since I never done it before, but once I overcome that I wanted to do something nice
with the recieved data, that's the reason I've created 'randomLoveTag' api.  
  
  
I used several libreries in this task, 'exprees', 'request' and 'instagram-node'.  
For testing I used mocha framework with 'chai'.

## How it works  
In order to authenticate with Instagram, once you start the server (typing: 'node server.js' in your command line) and opened 
'http://localhost:8000/' on your favorite web browser, you will be redirected to Instagram login page.

### Step by Step
1. Open CMD and nevigate to this project library
2. Write 'node server.js'
3. Open your favorite browser and type on the address field: 'http://localhost:8000/'
4. Enter your Instegram login credentials and press 'Log in' button (see sandbox test credetials bellow) 
5. Autorize the requested permissions and than you should see on your screen 'You made it!!'
6. Go to 'http://localhost:8000/searchTag' or 'http://localhost:8000/randomLoveTag' - see the results.  

sandbox test user  
Username: zoozjhondoe  
Password: Aa123567
 
### Testing step by step

1. Make sure that the server is running.
2. Open CMD and nevigate to this project library
3. Write 'npm test'

###### Personal Note
I started to learn React.js in order to create a client side for this task, but I saw that I won't be able to finish on time.
I'm still working on it and hopefully in a few days you'll be able to see a new repository that will integrate with this one.


