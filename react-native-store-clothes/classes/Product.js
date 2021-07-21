    export default class Product {
        constructor(
          imgUrl,
          title,
          paragraph,
          delivery,
          category,
          finalPrice
        ) {
          this.imgUrl = imgUrl;
          this.title = title;
          this.paragraph = paragraph;
          this.delivery = delivery;
          this.final_price = finalPrice;
          this.category = category;
          this.comments = [];
        }
      }