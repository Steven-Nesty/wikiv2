
function postNews()
{
    postNewsHeadline = $("#newsHl").text();
    postNewsText = $("#NewsText").text();
    
    
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postNewsHeadline,
        body: postNewsText,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
}


function deleteNews(){
    fetch('https://jsonplaceholder.typicode.com/posts/101', {
        method: 'DELETE',
      });
    
}

