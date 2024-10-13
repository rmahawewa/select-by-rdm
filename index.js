module.exports.function1 = () => {
    console.log("this is my first npm test module");
};

module.exports.function2 = () => {
    return "abcdefg";
}

module.exports.create_button = () => {

    let select_div = document.querySelectorAll(".drop-down");

    select_div.forEach(div => get_position(div));

}

module.exports.get_json_data = (element) => {
    let value_string = element.getAttribute("values");
    let select_values = JSON.parse(value_string);
    return {select_values};
}

module.exports.get_position = (div) => {
    let select_values = get_json_data(div).select_values;
    let output_id = select_values.id;
    let output_name = select_values.name;
    let select_infos = select_values.values;

    let dropdown = '<input type = "hidden" id = "' + output_id + '" name = "' + output_name + '" ><button class="select" id="0" style="background-color: green; color: white; border: none; font-size: large; padding: 0.5rem;" >select</button>';
    for(let obj of select_infos){
        const value = obj.value;
        const text = obj.text;
        let opt_button = '<button class="opt-button" id="0" value='+ value +' style="display:none;">'+ text +'</button>';
        dropdown += opt_button;
    }

    div.innerHTML = dropdown;

    div.setAttribute("style", "display: flex; flex-direction: column; padding: 0.5rem; width: max-content;");
}

module.exports.select_button_click = (btn) => {
    let select_values = get_json_data(btn.parentNode).select_values;
    let output_id = select_values.id;
    let id = btn.id;
    let hidden = document.querySelector("#" + output_id);
    let option_button = document.querySelectorAll(".opt-button");
    if(Number(id) === 0){
        option_button.forEach(opt => opt.setAttribute("style","display: flex; background-color: green; color: white; border: none; font-size: large; padding: 0.5rem;"));
        btn.id = 1;
        hidden.value = "";
    }
    if(Number(id) === 1){
        option_button.forEach(opt => opt.setAttribute("style","display: none;"));        
        hidden.value = "";
        btn.id = 0;
    }
}

module.exports.option_button_click = (btn) => {
    let select_values = get_json_data(btn.parentNode).select_values;
    let hidden = document.querySelector("#" + select_values.id);
    let id = btn.id;
    let value = btn.getAttribute("value");
    let select_btn = btn.parentNode.firstChild.nextSibling;
    if(id == 0 ){            
        hidden.value = value;
        select_btn.setAttribute("style","display:none");
        option_button.forEach(opt => opt.setAttribute("style","display: none;"));
        btn.setAttribute("style","display: flex; background-color: green; color: white; border: none; font-size: large; padding: 0.5rem;");
        btn.id = 1;
    }
    if(id == 1){
        select_btn.setAttribute("style","display:flex; background-color: green; color: white; border: none; font-size: large; padding: 0.5rem;");
        option_button.forEach(opt => opt.setAttribute("style", "display: flex; background-color: green; color: white; border: none; font-size: large; padding: 0.5rem;"));
        btn.id = 0;
    }
}
