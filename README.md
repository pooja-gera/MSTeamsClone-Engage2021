<!-- Add banner here -->
![Project Banner](https://res.cloudinary.com/pooja-gera/image/upload/v1625959187/engage2021-readme_assets/Banner_-_MS_Teams_Clone_nq1wde.png)
# MS Teams Clone By Pooja Gera

Microsoft Teams Clone is an attempt to bring the features to life of the robust and popular video conferencing application - Microsoft Teams. This project was built as a part of the Microsoft Engage Program 2021 where mentees had to build a video calling application with certain functionalities while incorporating the agile methodology. 

<b>Motivation:</b> While the world has crumbled down because of the ongoing pandemic, the only thing that is binding us together right now is being connected through social media platforms and get a chance to talk to our friends, family and co-workers through video conferencing platforms such as Microsoft Teams. 

<b>Solved Problem:</b> This clone application aims to offer a quick and easy way to connect with your friends, family and teammates by utilising the power of javascript and WebRTC.

<b>Learnings:</b> Through the Microsoft Engage Mentorship Program 2021 under the able guidance of my mentors - Akash Goel sir and Vaibhav Gupta sir I was able to go from a person who just knew how to make static web pages to a person who can build and deploy a full stack web applications.

<img src="https://image.flaticon.com/icons/png/512/1384/1384060.png" alt="youtube-icon" width="50px"> 

[Watch the Demo on YouTube (To be Added)](#)

# Table of contents

- [Features of the Application (With Demo)](#features-of-the-application-with-demo)
- [Installation](#installation)
- [Tech Stack Selection](#tech-stack-selection)
- [Usage of Agile Methodology](#usage-of-agile-methodology)
- [Challenges Faced](#challenges-faced)
- [Future Scope](#future-scope)
- [Bug Log](#bug-log)
- [Try The Web Application](#try-the-web-application)
- [Support and Contact](#support-and-contact)

# Features of the Application (With Demo)

1. Login 
![Login](https://res.cloudinary.com/pooja-gera/image/upload/v1626078908/engage2021-readme_assets/MSTeamsClone_Engage2021_LoginDemoGIF_bzb0jk.gif)
2. Signup 
3. Confirm password check 
4. Logout
5. Unique room IDs for every new meeting
6. Copy invitation link 
7. Send email invites with the click of one button 
8. Send email invites to multiple individuals together 
9. Display of logged-in user's name in the meeting room header
10. One on one video calling 
11. Group video calling 
12. Participant video calling sidebar 
13. Click a participant's video to pin it to the large video area
14. Microphone mute/unmute 
15. Video on/off 
16. Disconnect call 
17. In-meeting chat
18. Redirect to YouTube for watching the demo video 
19. The start meeting feature displays only when the user is logged in

[(Back to top)](#table-of-contents)

# Installation 
To use this project, follow the steps below:

Initialise git on your terminal.

```bash
git init
```
Clone this repository.

```bash
git clone https://github.com/pooja-gera/MSTeamsClone-Engage2021
``` 

Change the directory. 

```bash
cd MSTeamsClone-Engage2021
```

Open the repository with your code editor. 
In case you do not have a code editor, it is recommended you use Visual Studio Code. 

```bash
code .
```

Open the terminal in Visual code by pressing Ctrl+J (Windows) and run the following commands:

```bash
npm i
```
After the required packages are installed, run the following command: 

```bash
npm start
```

Please note: To run the machine on localhost:3030 you will have to edit the following lines of code: 

```js
//Line 21 public->js->login.js
let obj = await axios.post( "https://tclone2021-poojagera.herokuapp.com/auth/login" , {email:email.value , password:pw.value});
//Change the above piece of code to:
let obj = await axios.post( "http://localhost:3030/auth/login" , {email:email.value , password:pw.value});


//Line 46 public->js->signup.js
  let obj = await axios.post("https://tclone2021-poojagera.herokuapp.com/auth/signup", {
            "username": username.value,
            "email": email.value,
            "password": pw.value,
            "confirmPassword": cpw.value
        });
//Change the above piece of code to:
    let obj = await axios.post("http://localhost:3030/auth/signup", {
            "username": username.value,
            "email": email.value,
            "password": pw.value,
            "confirmPassword": cpw.value
        });

//Line 189 public->js->script.js
await axios.post("https://tclone2021-poojagera.herokuapp.com/logout");
//Change the above piece of code to: 
await axios.post("https://localhost:3030/logout");

//Line 206 public->js->script.js
const response = await axios.post("https://tclone2021-poojagera.herokuapp.com/mail",data);
//Change the above piece of code to: 
const response = await axios.post("http://localhost:3030/mail",data);
```

# Tech Stack Selection 

In spite of all the smart devices that exist today in the world, one thing that is common is - web and internet browsers. I selected my application to be a <b>web application</b> so that a large number of users are able to use it with ease and connect together. 

For frontend development, I have used <b>HTML, CSS, Javascript and EJS</b>. For backend development, I have used <b>NodeJS, Express Server and MongoDB</b>. 

The design of this application is in compliance with the <b>Microsoft UI Kit</b>. Fluent UI and the brand color pallette of Microsoft Teams has been utilised to create this application. The primary font of the application is Segoe UI which is the same as that of the original Microsoft teams Appplication.

* <b>Choosing A Video Call SDK 
![Jitsi vs WebRTC](https://res.cloudinary.com/pooja-gera/image/upload/v1626081180/engage2021-readme_assets/MSTeamsClone_VideoCallSDKComparison_jeuwsu.png)

* Choosing A Hosting Platform</b> 
![Firebase vs Heroku](https://res.cloudinary.com/pooja-gera/image/upload/v1626081222/engage2021-readme_assets/MSTeamsClone_HostingPlatformComparison_qe4bhs.png)

[(Back to top)](#table-of-contents)

# Usage of Agile Methodology 

After taking the session on Agile 101, I understood how modern software is developed and how agile methodologies are applied in Microsoft to deliver great products and this is when I understood the importance of incorporating Agile Methodology into my project. 

As this wasn't a team project, I could not assign different tasks to different people and form a sprint out of it. Therefore I divided myself into five different people - one who will research, one who will design, one who will develop the frontend of the web application, one who will develop the backend of the web application and finally the one who will fix bugs. This division helped me to get into a zone and focus on a particular functionality whenever I was working on the project. 

This disciplined process upon MS Teams Clone development gave me the following benefits: 
- It made my development process predicatable and more efficient. 
- It made my development process easy to handle, flexible and allowed more room to adjust new functionalities. 

I used Trello as my primary application for designing the board for the development process of MS Teams Clone Web Application. 

* <b>Using Trello for managing sprints</b>
![Trello Sprint Board](https://res.cloudinary.com/pooja-gera/image/upload/v1626083386/engage2021-readme_assets/MSTeamsClone_SprintBoardTrello_xkqjmd.png)
<br>
I divided my entire development process into <b>4 sprints (each having the duration of 1 week)</b> as shown in the images below. I gave due importance to the bug review and fixing part of the development process as it is crucial to offer whatever features you are offering are offered with utmost perfection. 
<br>
![Sprint 1](https://res.cloudinary.com/pooja-gera/image/upload/v1626083385/engage2021-readme_assets/MSTeamsClone_Sprint1_dkajyp.png)
<br>
![Sprint 2](https://res.cloudinary.com/pooja-gera/image/upload/v1626083385/engage2021-readme_assets/MSTeamsClone_Sprint2_plyvkj.png)
<br>
![Sprint 3](https://res.cloudinary.com/pooja-gera/image/upload/v1626083385/engage2021-readme_assets/MSTeamsClone_Sprint3_alr2mm.png)
<br>
![Sprint 4](https://res.cloudinary.com/pooja-gera/image/upload/v1626083385/engage2021-readme_assets/MSTeamsClone_Sprint4_k1oin4.png)
<br>
* <b>Adjusting AceHacker/Mentor Assigned Assignments</b>
To cater to the assignments provided by the AceHacker platform and also undertake the tasks and suggestions provided by the mentors, I made a separate card where I put these assignments and made sure I was completing them alongside my ongoing sprints. 
<br>
![Assignments](https://res.cloudinary.com/pooja-gera/image/upload/v1626083385/engage2021-readme_assets/MSTeamsClone_SprintAssignments_upjwsz.png)


[(Back to top)](#table-of-contents)

# Challenges Faced

"If you are not facing challenges while developing an application, you are not considering every possible case for a better experience of your users."

During the development process I faced the following challenges: 
1. Understanding the working of the backend side of my application as I had never worked with web backend before. However, thanks to online communities, stackoverflow, my mentors and friends I was able to find resources which helped me in creating this web application. 
2. Preparing a feature list. In the beginning I wanted to build an app like no other and incorporate many features. But in the interest of time, I had to narrow down the features to the basic functionalities that are available in a video conferencing web application. 
3. Hosting. Initially I was using Firebase to host my application and I realised it later after reading articles online that Firebase will not be able to handle the server code I had written. Therefore I switched to Heroku. The deployment was easy and I did learn a valuable lesson that even if it is the tiniest part of your application, you need to research well and make sure the service you are choosing caters to all the needs of your software.
4. Implementing the Adapt feature. I was able to implement the in-meeting chat but since I had less time I wasn't able to implement the before and after display of chats. 

All these challenges were less of challenges and more of lessons, lessons to help me have an even better development process in the future so that I can incorporate the customers' requests and requirements easily and efficiently. 

[(Back to top)](#table-of-contents)

# Future Scope
The web application can be improved by adding the following features. 
1. Adding responsiveness and making it compatible with devices having smaller screens. 
2. Automatic minutes of meeting 
3. 3 variations of the web application:
   - Classroom
   - Professional
   - Friends 
4. Live captioning 
5. Live translation
6. Individual user video quality adjustment (like in YouTube)
7. User registration through social media handles 
10. Before and after meeting chat 
12. Screen Sharing 
13. Noise Cancellation

[(Back to top)](#table-of-contents)

# Bug Log

Following are the known bugs of the web application: 
1. The web application will work on mobile devices but isn't made responsive to cater to different sizes. 
2. In the meeting room your video will be displayed at two places - one in the large display area and one in the sidebar where videos of all participants are displayed. 
3. After the call disconnects, the user gets redirected to the home page, there could have been a page where the user gets to know that they have left the meeting. 
4. The UI of the chat can be improved and made more in accordance with the original MS Teams application. 

[(Back to top)](#table-of-contents)

# Try The Web Application 

Try the MS Teams Clone Web App [here](https://tclone2021-poojagera.herokuapp.com/).
Please give it a little time to load.

[(Back to top)](#table-of-contents)

# Support and Contact 
[(Back to top)](#table-of-contents)

![GitHub issues](https://img.shields.io/github/issues/pooja-gera/Engage2021-MSTeamsClone?style=flat-square) ![GitHub Forks](https://img.shields.io/github/forks/pooja-gera/Engage2021-MSTeamsClone?style=flat-square) ![GitHub Stars](https://img.shields.io/github/stars/pooja-gera/Engage2021-MSTeamsClone?style=flat-square) ![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fpoojagera0_0)