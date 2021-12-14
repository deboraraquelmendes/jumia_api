
document.getElementById('button').addEventListener('click', getData);



function getData() {


    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="list_container">
                    <div class="list">
                    <div class="list-pic"><img src="${lists.picture.large}" class="picture">
                    <div class="list-group">
                    <h2>${lists.name.first}</h2>
                    <div class="list-caption">
                        <ul>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            
                           
                        </ul>
                        <ul>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });


}


// pagination

// var state = {
//     'querySet': getData,

//     'page': 1,
//     'rows': 5,
//     'window': 5,
// }


// function pagination(querySet, page, rows) {

//     var trimStart = (page - 1) * rows
//     var trimEnd = trimStart + rows

//     var trimmedData = querySet.slice(trimStart, trimEnd)

//     var pages = Math.round(querySet.length / rows);

//     return {
//         'querySet': trimmedData,
//         'pages': pages,
//     }
// }

// function pageButtons(pages) {
//     var wrapper = document.getElementById('pagination-wrapper')

//     wrapper.innerHTML = ``
// 	console.log('Pages:', pages)

//     var maxLeft = (state.page - Math.floor(state.window / 2))
//     var maxRight = (state.page + Math.floor(state.window / 2))

//     if (maxLeft < 1) {
//         maxLeft = 1
//         maxRight = state.window
//     }

//     if (maxRight > pages) {
//         maxLeft = pages - (state.window - 1)
        
//         if (maxLeft < 1){
//         	maxLeft = 1
//         }
//         maxRight = pages
//     }
    
    

//     for (var page = maxLeft; page <= maxRight; page++) {
//     	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
//     }

//     if (state.page != 1) {
//         wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
//     }

//     if (state.page != pages) {
//         wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
//     }

//     $('.page').on('click', function() {
//         $('#output').empty()

//         state.page = Number($(this).val())

//     })

// }

/*--------------------------------------------------------------
# dropdown
--------------------------------------------------------------*/

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
