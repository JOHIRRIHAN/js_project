function calculateTriangleArea(){
    // get triangle base value
    const bestField = document.getElementById('triangle-base');
    const baseValueText = bestField.value;
    const base  = parseFloat(baseValueText)
    console.log(base);
    // get triangle height value
    const heightField= document.getElementById('triangle-height');
    const heightValueText= heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area);
    const areaSpan = document.getElementById('Triangle-area');
    areaSpan.innerText = area;   
    addToCalculationEntry('triangle', area);
}
function calculateRectangleArea(){
    // get triangle base value
    const bestField = document.getElementById('rectangle-base');
    const baseValueText = bestField.value;
    const base  = parseFloat(baseValueText)
    
    // get triangle height value
    const widthField= document.getElementById('rectangle-width');
    const widthValueText= widthField.value;
    const width = parseFloat(widthValueText);
    
    const area = base * width;
    
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;   
    addToCalculationEntry('rectangle', area);
}


// function calculateParallelogramArea(){
//     // get triangle base value
//     const bestField = document.getElementById('parallelogram-base');
//     const baseValueText = bestField.value;
//     const base  = parseFloat(baseValueText)
//     console.log(base);

//     // get triangle height value
//     const parallelogramField= document.getElementById('parallelogram-width');
//     const parallelogramValueText= parallelogramField.value;
//     const parallelogram = parseFloat(parallelogramValueText);
//     console.log(parallelogram);

//     const area = 0.5 * base * parallelogram;
//     console.log(area);
    
//     const areaSpan = document.getElementById('parallelogram-area');
//     areaSpan.innerText = area;   
// }

// reusable function ---> reduce duplicate code
// function-1
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base)

    const height = getInputValue('parallelogram-width');
    // console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('pentagon', area);
}

// reusable get input value field in Number
// function-2
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span , p, div , etc Text
// function-3
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}






// <!-- four card  ellipse-->
function calculateEllipseArea(){
    const base = getInputValue('ellipse-first-radius');
    // console.log(base)

    const height = getInputValue('ellipse-second-radius');
    // console.log(height);

    const area = base * height * 3.14;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', area);
    addToCalculationEntry('ellipse', area);
}

// reusable get input value field in Number
// function-2
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span , p, div , etc Text
// function-3
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

function calculateRhombusArea(){
    const base = getInputValue('Rhombus-first-radius');
    // console.log(base)

    const height = getInputValue('Rhombus-second-radius');
    // console.log(height);

    const area = 0.5 * base * height;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('Rhombus-area', area);
    addToCalculationEntry('rhombus', area);
}

// reusable get input value field in Number
// function-2
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span , p, div , etc Text
// function-3
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// card-6
function calculatePentagonArea(){
    const p = getInputValue('Pentagon-first-radius');
    // console.log(p)

    const b = getInputValue('Pentagon-second-radius');
    // console.log(b);'
    if(isNaN(p) || isNaN(b)){
        alert('please insert number')
        return
    }

    const area = 0.5 * p * b;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('Pentagon-area', area);
    
    addToCalculationEntry('pentagon', area);

}

// reusable get input value field in Number
// function-2
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span , p, div , etc Text
// function-3
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
   
}
function addToCalculationEntry( areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`;

    calculationEntry.appendChild(p);
}