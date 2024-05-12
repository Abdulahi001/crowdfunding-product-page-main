let btn2 = document.querySelector('.btn-2');
btn2.addEventListener('click', ()=> {
    const bookmark = document.getElementById('bookmark');
    if(bookmark.innerHTML.includes('ed')) {
        bookmark.innerHTML = 'Bookmark'
        btn2.style.opacity = '1'
    } else {
        bookmark.innerHTML += 'ed'
        btn2.style.opacity = '0.5'
    }
    
})






// Firt window part


let shadow = document.getElementById('shadow');
const btn1 = document.querySelectorAll('#btn-1')
let circle = document.querySelectorAll('.circle');
let radio = document.querySelectorAll('.radio');
const OpenBottonSide = document.querySelectorAll('#open-bottom-side');
let expand = document.querySelectorAll('.expand')
let Enter = document.querySelectorAll('.enter')
const closeWindow = document.getElementById('close-window')
const Firstwindow = document.getElementById('window')
const input = document.querySelectorAll('input');
const btn5 = document.querySelectorAll('#btn-5')
const smallWindow = document.querySelector('.small-window')
const btn6 = document.getElementById('btn-6')
let boxBorder = document.querySelectorAll('.border')
console.log(expand)

Firstwindow.style.display = 'none'
smallWindow.style.display = 'none';
shadow.style.display = 'none';
for(let i = 0; i < btn1.length; i++) {
        btn1[i].addEventListener('click',() => {
            Firstwindow.style.display = 'block'
            shadow.style.display = 'block';
        })
    }




closeWindow.addEventListener('click',() => {
    Firstwindow.style.display = 'none'
    shadow.style.display = 'none';
})






for(let i = 0; i < radio.length; i++) {
    radio[i].classList.add('hide')
}
for(let i = 0; i < OpenBottonSide.length; i++) {
    OpenBottonSide[i].addEventListener('click',() => {
        radio[i].classList.toggle('hide')
    })
}

for(let i = 0; i < Enter.length; i++) {
    Enter[i].classList.remove('hide');
    Enter[i].style.display = 'none'
}
for(let i = 0; i < boxBorder.length; i++) {}
for(let i = 0; i < expand.length; i++) {
    expand[i].addEventListener('click',() => {
        
       if(Enter[i].style.display !== 'block') {

        Enter[i].style.display = 'block'
        Enter[i].style.border = '2px solid #3cb4ac'
        Enter[i].style.borderTop = 'none'
       
            boxBorder[i].style.border = '2px solid #3cb4ac'
            boxBorder[i].style.borderBottom = '2px solid #e0e0e0'
       } else {
        Enter[i].style.display = 'none'
        boxBorder[i].style.border = '1px solid #e0e0e0'
       }
    })
}
console.log(Enter)


for(let i = 0; i < btn5.length; i++) { 

    btn5[i].addEventListener('click', () => {
        for(let i = 0; i < input.length; i++) {
            if(input[i].value !== '') {
                console.log('hello')
                smallWindow.style.display = 'block';
                Firstwindow.style.display = 'none'
                shadow.style.display = 'block'
            }
        }
    })
}
btn6.addEventListener('click', () => {
    smallWindow.style.display = 'none'
    shadow.style.display = 'none';
    window.location.reload();
})




// mobile menu part


let closeMenu = document.querySelector('.close-menu');
let menu = document.getElementById('menu');
let unorderList = document.querySelector('ul');

closeMenu.style.display = 'none'



menu.addEventListener('click', function() {
    closeMenu.style.display = 'block'
    unorderList.style.display = 'block';
    shadow.style.display = 'block';
    menu.style.display = 'none'
})
closeMenu.addEventListener('click', function() {
    closeMenu.style.display = 'none'
    unorderList.style.display = 'none';
    shadow.style.display = 'none';
    menu.style.display = 'block'
})