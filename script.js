function getElement(id) {
    const element = document.getElementById(id)
    return element

}

// heart icon 
const hearClicks= document.getElementsByClassName('hear-click')
for(const hearClick of hearClicks){
    hearClick.addEventListener('click', function(){
      
        let heartCoin=getElement('heart-coin').innerText
        heartCoin= Number(heartCoin)+1
        getElement('heart-coin').innerText=heartCoin
        
    })
}

// copy  button count
const copyBtns =document.getElementsByClassName('copy-btn')
for(const copyBtn of copyBtns ){
    copyBtn.addEventListener('click',function(){
        

    
        let copyCount =getElement('copy-count').innerText
        copyCount=Number(copyCount)+1
      getElement('copy-count').innerText=copyCount

      const copyalert = copyBtn.parentNode.children[3].innerText

        navigator.clipboard.writeText(copyalert);

      alert('নম্বর কপি হয়েছে  '+ copyalert)

    })
}

//   call btn
const callBtns = document.getElementsByClassName('call-btn')


for (const callBtn of callBtns) {

    callBtn.addEventListener('click', function () {


        let countCoin = getElement('count-coin').innerText
        if (countCoin < 20) {
            alert('❌️  আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগবে।')
            return
        }

        countCoin = Number(countCoin) - 20
        getElement('count-coin').innerText = countCoin

        const alertTittle = callBtn.parentNode.children[1].innerText
        const alertSubTittle = callBtn.parentNode.children[2].innerText
        const alertNumber = callBtn.parentNode.children[3].innerText
        const currentTime = new Date().toLocaleTimeString()

        alert('📞 ' + 'Calling  ' + alertSubTittle + ' ' + alertNumber)
        //    append child
        let createElement = document.createElement('div')
        createElement.innerHTML = `
                   

                    <div  class="flex items-center justify-between bg-[#f5fff6] p-4 mb-5">
                        <div>
                            <h1 class="font-[18px]"> ${alertTittle}</h1>
                            <p class="font-[18px]">${alertNumber}</p>
                           
                        </div>
                         <p class="font-[18px]"> ${currentTime} </p>
                    </div>

                 
                   
                   `
        document.getElementById('append-div').appendChild(createElement)

    })


}


// clear button

const clearBtn = getElement('clear-btn')


clearBtn.addEventListener('click', function () {

    getElement('append-div').innerHTML = " ";

})
