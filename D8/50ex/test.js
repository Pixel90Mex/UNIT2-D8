const anch = document.getElementsByTagName('a')

for (ele of anch){
    ele.addEventListener('mouseover', (event) => {
        
        alert(event.currentTarger.href)
    })
}