var Books = [
  {
    Title: "The Girl With No Dream",
    Author: "Deepak Gupta",
    Genre: "Fiction,Romance",
    Price: "Rs.420",
  },
  {
    Title: "Believe in Yourself ",
    Author: "Dr. Joseph Murphy",
    Genre: "Self-Help",
    Price: "Rs.350",
  },
  {
    Title: "The Things We Cannot Say ",
    Author: "Kelly Rimmer",
    Genre: "Historical Fiction,Romance , Domestic Fiction",
    Price: "Rs.1200",
  },
  {
    Title: "You've Reached Sam",
    Author: "Dustin Thao Tran",
    Genre: "Fiction",
    Price: "Rs.500",
  },
  {
    Title: "The Girl With No Dream",
    Author: "Deepak Gupta",
    Genre: "Fiction",
    Price: "Rs.600",
  },
];
function printBooksData() {
  let allBooks = "";
  for (let i = 0; i < Books.length; i++) {
    allBooks += `</tr>
        <th scope ="row" >${1 + i}</th>
        <td>${Books[i]["Title"]}</td>
        <td>${Books[i]["Author"]}</td>
        <td>${Books[i]["Genre"]}</td>
        <td>${Books[i]["Price"]}</td>
        <td><button class="btn btn-success btn-space" onclick="editBooks(${i})">Edit</button>
  
        <br> <button class="btn btn-dark" onclick="deleteBooks(${i})">Delete</button></td>
    </tr>`;
  }
  document.getElementById('BooksData').innerHTML = allBooks;
}
printBooksData();

document.getElementById('btnPrint').onclick = printBooksData;
document.getElementById('btnClean').onclick = function () {
  document.getElementById('BooksData').innerHTML = "";
};
function addBooks(myform) {
  let TitleFound = false;
  let Title = myform.Title.value;
  let Author = myform.Author.value;
  let Genre = myform.Genre.value;
  let Price = myform.Price.value;
  for (let i = 0; i < Books.length; i++) {
    const Book = Books[i];

    if (Book.Title == Title) {
      TitleFound = true; //Title found
    }
  }

  if (!TitleFound) {
    let BooksObj = { Title: Title, Author: Author, Genre: Genre, Price: Price, };
    Books.push(BooksObj);
    printBooksData();
  } else {
    alert("Enter an unique title plz.");
  }
  return false;

}

function deleteBooks(id) {
  Books.splice(id, 1);
  // console.log(Books);
  printBooksData();
}
function editBooks(id) {
  console.log(id);
  let { Title, Author, Genre, Price } = Books[id];
  let myform = document.querySelector("#updateFormBooks");
  // console.log(myform);
  myform.className = id;
  myform.Title.value = Title;
  myform.Author.value = Author;
  myform.Genre.value = Genre;
  myform.Price.value = Price;

  updateForm();
}
function editProcessBooks(myform, id) {
  let Title = myform.Title.value;
  let Author = myform.Author.value;
  let Genre = myform.Genre.value;
  let Price = myform.Price.value;
  let BooksObj = { Title: Title, Author: Author, Genre: Genre, Price: Price, };
  // Books.push(BooksObj);
  Books[id] = BooksObj;//updating data
  printBooksData();//refreshing browser table
  return false;
}
function addForm() {
  document.querySelector("#addbooksForm").style.display = "block";
  document.querySelector("#updatebooksForm").style.display = "none";
}

function updateForm() {
  document.querySelector("#addbooksForm").style.display = "none";
  document.querySelector("#updatebooksForm").style.display = "block";
}

document.querySelector("#addForm").onclick = addForm;
document.querySelector("#updateForm").onclick = updateForm;
