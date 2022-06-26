const audio = document.querySelector('#audio')
const audioBtn = document.querySelector('.intro__btn')

const song = document.querySelector('.intro__song')

const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')

const loading = document.querySelector('.loading')
const toast = document.querySelector('.toast')

const visitorCount =  document.querySelector('.visitor__count')

var isPlaying = false; // off

// sub function
function show(element, showClass, hideClass) {
    element.classList.remove(hideClass)
    element.classList.add(showClass)
}
function hide(element, showClass, hideClass) {
    element.classList.remove(showClass)
    element.classList.add(hideClass)
}

function updateVisitor() {
    fetch('https://api.countapi.xyz/update/vin/vin/?amount=1')
        .then((response) => response.json())
        .then((response) => {
            visitorCount.innerHTML = response.value
        })
}

function handleSong() {
    audioBtn.onclick = function () {
        // khi playing => pause
        if (isPlaying) {
            isPlaying = false
            audio.pause()
            audioBtn.classList.remove('playing')
    
            hide(song, 'show-song', 'hide-song')
    
        } else {
            isPlaying = true
            audio.play()
            audioBtn.classList.add('playing')
            show(song, 'show-song', 'hide-song')
    
        }
    
        // xu ly ended 
        audio.onended = function () {
            audioBtn.classList.remove('playing')
            hide(song, 'show-song', 'hide-song')

            isPlaying = false // khi hết bài chuyển về false để quay về logic ban đầu
    
        }
    }
}

function preload() {
    // Ẩn preload và hiện toast sau khi load xong
    window.onload = function () {
        // sau 1s sẽ tắt preload
        setTimeout(function() {
            loading.style.display = "none"
        }, 1000)

        setTimeout(function () {
            toast.classList.add('show-toast')
        }, 5000)

        setTimeout(function () {

            toast.classList.remove('show-toast')
            
        }, 12000)

    }
}

function start () {

    handleSong()
    preload()
    updateVisitor()
}

start();
