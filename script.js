$(document).ready(function(){
    var quiz=$(".quiz-item")
    var modal=$("#modal-wrapper")
    var resulthtml=$("#result")

    function getData(){
        $.get("./quiz.json", function(data, status){
        var response=data;
        for (let i = 0; i < response.length; i++) {
 
            //add questions
            var question= document.createElement("h1")
            var questionTxt=document.createTextNode("Q"+(i+1)+". "+response[i].question)
            question.appendChild(questionTxt)
            quiz[i].prepend(question)


            //add option containers
            // var optionWrapper= document.createElement("div")
            // optionWrapper.classList.add("option-wrapper")
            // quiz[i].append(optionWrapper)

            //loop through options
            options= response[i].options
            for (let j = 0; j < options.length; j++) {
                //add option containers
                var optionWrapper= document.createElement("div")
                optionWrapper.classList.add("option-wrapper")
                quiz[i].append(optionWrapper)
                
                //add label
                const element = options[j];
                var label= document.createElement("label")
                optionWrapper.append(label)
                // console.log(optionWrapper)
                

                //add inputs
                var labelInput=document.createElement("input")
                labelInput.setAttribute("required", "")
                labelInput.setAttribute("type", "radio")
                labelInput.setAttribute("name", "q"+(i+1))
                labelInput.setAttribute("value", (j+1))
                label.append(labelInput)
                // console.log(label)


                //add option text
                var paragraph= document.createElement("p")
                var text =document.createTextNode( options[j])
                paragraph.append(text)
                label.append(paragraph)
            }
        }
        } )
    }
    getData();
    var btn=document.getElementById("btn-submit")
    btn.addEventListener("click", function(e){
        e.preventDefault()
        $.get("./quiz.json", function(data, status){
            let result=data
            var q1=document.getElementsByName("q1")
            var q2=document.getElementsByName("q2")
            var q3=document.getElementsByName("q3")
            var q4=document.getElementsByName("q4")
            var q5=document.getElementsByName("q5")
            var score =0
            for (let j = 0; j < q1.length; j++) {
                if(q1[j].checked && q1[j].value==result[0].answer){
                    score+=1
                }
            }
            for (let j = 0; j < q1.length; j++) {
                if(q2[j].checked && q1[j].value==result[1].answer){
                    score+=1
                }
            }
            for (let j = 0; j < q1.length; j++) {
                if(q3[j].checked && q1[j].value==result[2].answer){
                    score+=1
                }
            }
            for (let j = 0; j < q1.length; j++) {
                if(q4[j].checked && q1[j].value==result[3].answer){
                    score+=1
                }
            }
            for (let j = 0; j < q1.length; j++) {
                if(q5[j].checked && q1[j].value==result[4].answer){
                    score+=1
                }
            }
            var scr=document.createElement("h3")
            var scrTxt=document.createTextNode(score+"/5")
            scr.append(scrTxt)
            resulthtml.append(scr)
            modal.css("display", "block")
        })
    })
    


})
