<template>
  <div class="books">
    <div class="book" v-for="book in books">
      <div class="title">{{book.title}}</div>
      <div class="separator">
        &nbsp;
      </div>
      <div>
        <a v-bind:href="book.url">
          <img v-bind:src="book.imageUrl" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const books = [{
      title: 'Architecting Angular Applications with Redux, RxJS, and NgRx',
      imageUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b07031_cover.png',
      url: 'https://www.packtpub.com/web-development/architecting-angular-applications-redux-rxjs-and-ngrx'
    },
    {
      title: 'Learning Angular - Second edition',
      imageUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/0/b06169_cover.png',
      url: 'https://www.packtpub.com/web-development/learning-angular-second-edition'
    },
    {
      title: 'RxJS Ultimate (FREE)',
      imageUrl: 'rxlogo.png',
      url: 'https://legacy.gitbook.com/book/chrisnoring/rxjs-5-ultimate/details'
    },
    {
      title: 'React (FREE)',
      imageUrl: 'react.png',
      url: 'https://legacy.gitbook.com/book/chrisnoring/react/details'
    }]

    return {
      books
    }
  }
}
</script>
<style scoped>
  .books {
    display:flex;
    flex-wrap: wrap;
  }

  .book {
    box-shadow: 0px 0px 2px #888;
    margin: 5px;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    
  }

  @media screen and (max-width: 600px) {
    .books {
      flex-direction: column; 
      justify-content:center;
      align-items: center;
    }    

    .book {
      width: 80%;
    }
  }

  

  .book .title {
    margin-bottom: 10px;
  }

  .separator {
    flex: 1;
  }
</style>


