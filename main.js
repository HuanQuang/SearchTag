const $ = document.querySelector.bind(document);
const content = $('.content');
const input = $('.content input');
const removeBtn = $('.btn')
var tags = ['Javascript', 'React Js', 'Node Js'];

function createTag(){
    const item = tags.map((tag,index) => {
        return `<li>${tag}
                     <i class="fa-solid fa-xmark" onclick = "remove()"></i>
                </li>`
});
    content.innerHTML = item.join('');
    content.appendChild(input);
    input.focus();
};
createTag();
input.onkeydown = function(e){
    if(e.key == 'Enter'){
        if(!input.value.trim() == ''){
            tags.push(input.value.trim());
        }
        input.value = '';
        createTag();
    };
    
};
function remove(index){
    tags.splice(index, 1);
    createTag();
}
removeBtn.onclick = function(){
    tags.splice(0, tags.length);
    createTag()
}
