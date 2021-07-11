const socket = io('/')
const videoGrid = document.getElementById('big-video-display')
let main_screen_video = document.querySelector('.main_screen_video video');
var myPeer = new Peer({ secure: true, host: 'videodesk-ennesimo.herokuapp.com', port: 443, path: '/' });
let logoutBtn = document.querySelector('.logout');
const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}
var localStream;
let myVideoStream;

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
myVideoStream=stream;
  main_screen_video.srcObject = stream;
    main_screen_video.addEventListener('loadedmetadata', () => {
    main_screen_video.play();
  })
  addVideoStream(myVideo, stream)
  myVideo.addEventListener("click", function () {
    main_screen_video.srcObject = stream;

  })

  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      video.addEventListener("click", function () {
        main_screen_video.srcObject = userVideoStream;

      })
      addVideoStream(video, userVideoStream)
    })
  })
  localStream = stream;
  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

//---------------------------------------------------------------------------
//MEETING CONTROLS 
//---------------------------------------------------------------------------
const disconnectBtn = document.getElementById('disconnect');
disconnectBtn.addEventListener('click', () => {
  window.location.href = "/"});

//------------------------------------------
//TURN MIC ON / OFF 
//------------------------------------------
const toggleSelfMicrophoneMuteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
}

const setMuteButton = () => {
  const html = `
  <i class="small-meeting-icon ms-Icon ms-Icon--Microphone" id="changeMicrophoneIcon"></i>
  `
  document.getElementById('microphone').innerHTML = html;
}

const setUnmuteButton = () => {
  const html = `
  <i class="small-meeting-icon ms-Icon ms-Icon--MicOff" id="changeMicrophoneIcon"></i>
  `
  document.getElementById('microphone').innerHTML = html;
}

//-------------------------------------------------------
//TURN VIDEO ON / OFF 
//------------------------------------------

const toggleSelfVideoOnOff = () => {
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo()
  } else {
    setStopVideo()
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
}
const setStopVideo = () => {
  const html = `
  <i class="small-meeting-icon ms-Icon ms-Icon--Video"></i>
  `
  document.getElementById('userVideoControl').innerHTML = html;
}

const setPlayVideo = () => {
  const html = `
  <i class="small-meeting-icon ms-Icon ms-Icon--VideoOff"></i>
  `
  document.getElementById('userVideoControl').innerHTML = html;
}

//------------------------------------------------------------------
//MAKING THE MEETING CONTROLS BAR STICKY ON THE BOTTOM OF THE PAGE
//-----------------------------------------------------------------
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
// Get the navbar
var meetingBar = document.getElementsByClassName('meeting-controls');
// Get the offset position of the navbar
var sticky = meetingBar.offsetBottom;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset <= sticky) {
    meetingBar.classList.add("sticky")
  } else {
    meetingBar.classList.remove("sticky");
  }
}


//---------------------------------------------------------------------------------------------------------------
//class="active-participants-count"
//class="absent-participants-count"

var numberOfCopyLinksCreated = 0;
function copyLink() {
  var dummy = document.createElement('input'),
    text = window.location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert('Link Copied!');
  numberOfCopyLinksCreated++;
  updateAbsentParticipants();
}

function updateAbsentParticipants() {
  document.getElementById('absent-participants-count').innerHTML = numberOfCopyLinksCreated;
}

var numberOfVideosOnPage = document.getElementsByTagName('video').length;
window.onload = updateActiveParticipants();
function updateActiveParticipants() {
  document.getElementById('active-participants-count').innerHTML = numberOfVideosOnPage;
  if (numberOfCopyLinksCreated > 0) {
    numberOfCopyLinksCreated--;
    updateAbsentParticipants();
  }
}

if(logoutBtn){
  logoutBtn.addEventListener("click",async function(){
    await axios.post("https://tclone2021-poojagera.herokuapp.com/logout");
    window.location.href = "/";
  })
}

async function sendEmailInvite(){
  let emails = prompt("Enter email addresses of the participants (separated by semicolons)");
  console.log(emails)
  emails = emails.split(";");
  console.log(emails)
  for(i in emails){
    const data = {
      email:emails[i],
      body:"Join the meeting with link: "+window.location.href,
      subject:"You have been invited to an ongoing meeting.",
    };
    console.log(data);
    const response = await axios.post("http://localhost:3030/mail",data);
    console.log(response);
  }
}