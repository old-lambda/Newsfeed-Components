class Form {
  constructor() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    this.date = new Date();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    this.year = this.date.getFullYear();
    this.fullDate = `${
      monthNames[this.date.getMonth()]
    } ${this.date.getDate()}, ${this.year}`;
    this.paragraph =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum suscipit enim a lacinia. Vestibulum semper mi a justo bibendum, a accumsan neque cursus. In posuere tortor ipsum, et ornare turpis condimentum at. Curabitur luctus justo sem, ut tristique ligula varius in. Vestibulum vestibulum tellus eget magna pulvinar sodales. Aliquam dapibus feugiat felis, eget luctus urna vestibulum at. Ut velit dui, finibus id tristique id, hendrerit quis enim. Vivamus et nulla ac lectus tempor sagittis ac vitae ligula. Fusce in ex vitae nibh molestie ullamcorper at id est. Donec imperdiet nisl at mi aliquet molestie.";

    this.body = document.querySelector("body");
    this.articlesContainer = document.querySelector(".articles");
    this.form = document.createElement("form");
    this.form.setAttribute("id", "form");
    this.body.prepend(this.form);
    this.input = document.createElement("input");
    this.input.setAttribute("id", "titlefield");
    this.input.setAttribute("placeholder", "enter your article title");
    this.submitButton = document.createElement("button");
    this.submitButton.setAttribute("id", "submit-article");
    this.submitButton.textContent = "Submit";
    this.submitButton.addEventListener("click", e => this.createNewArticle(e));

    this.form.appendChild(this.input);
    this.form.appendChild(this.submitButton);
  }

  createNewArticle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.title = this.input.value;

    if (this.title === "") () => {};
    else {
      this.article = document.createElement("div");
      this.article.classList.add("article");
      this.articleH2 = document.createElement("h2");
      this.articleH2.textContent = this.title;
      this.articleDate = document.createElement("p");
      this.articleDate.classList.add("date");
      this.articleDate.textContent = this.fullDate;
      this.articleFirstPara = document.createElement("p");
      this.articleFirstPara.textContent = this.paragraph;
      this.articleSecondPara = document.createElement("p");
      this.articleSecondPara.textContent = this.paragraph;
      this.articleThirdPara = document.createElement("p");
      this.articleThirdPara.textContent = this.paragraph;
      this.articleExpandButton = document.createElement("span");
      this.articleExpandButton.classList.add("expandButton");
      this.articleExpandButton.textContent = "Click to Expand";
      this.articleCloseButton = document.createElement("span");
      this.articleCloseButton.classList.add("close");
      this.articleCloseButton.textContent = "x";

      this.articlesContainer.appendChild(this.article);
      this.article.appendChild(this.articleH2);
      this.article.appendChild(this.articleDate);
      this.article.appendChild(this.articleFirstPara);
      this.article.appendChild(this.articleSecondPara);
      this.article.appendChild(this.articleThirdPara);
      this.article.appendChild(this.articleExpandButton);
      this.article.appendChild(this.articleCloseButton);

      this.articleExpandButton.addEventListener("click", e =>
        this.changeArticleExpandState(e)
      );

      this.articleCloseButton.addEventListener("click", e =>
        this.removeArticle(e)
      );
      this.input.value = "";
    }
  }

  changeArticleExpandState(e) {
    e.stopPropagation();
    e.currentTarget.textContent =
      e.currentTarget.textContent === "Click to Expand"
        ? "Click to Close"
        : "Click to Expand";
    e.target.parentNode.classList.toggle("article-open");
  }

  removeArticle(e) {
    e.stopPropagation();
    this.articlesContainer.removeChild(e.target.parentNode);
  }
}

const myForm = new Form();
