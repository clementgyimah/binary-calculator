window.onload = function() {
    function takeCareOfButtons(e) {
        const holdVal = e.target || e.srcElement;
        let input = document.getElementById('res');
        
        if (holdVal.id === 'btn0' || holdVal.id === 'btn1' || holdVal.id === 'btnSum' || holdVal.id === 'btnSub' || holdVal.id === 'btnMul' || holdVal.id === 'btnDi') return document.getElementById('res').innerHTML += holdVal.innerHTML;
        else if (holdVal.id === 'btnClr') return document.getElementById('res').innerHTML = "";
        else {
            const firstParam = input.innerHTML.match(/^\d+/);
            const secondParam = input.innerHTML.match(/\d+$/);
            const operand = input.innerHTML.match(/([\+,\-,\*,\/])/)[0];
            //return input.innerHTML = operand;
            return input.innerHTML = Math.floor(eval(parseInt(firstParam, 2).toString() + operand + parseInt(secondParam, 2).toString()).toString(2));
            
        }
        
    }    
    document.getElementById('btn0').onclick = takeCareOfButtons;
    document.getElementById('btn1').onclick = takeCareOfButtons;
    document.getElementById('btnClr').onclick = takeCareOfButtons;
    document.getElementById('btnEql').onclick = takeCareOfButtons;
    document.getElementById('btnSum').onclick = takeCareOfButtons;
    document.getElementById('btnSub').onclick = takeCareOfButtons;
    document.getElementById('btnMul').onclick = takeCareOfButtons;
    document.getElementById('btnDi').onclick = takeCareOfButtons;
  }