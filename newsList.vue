<template>
    <div>
        <header>
            <div class="search-box">
                <input type="text" placeholder="搜索" v-model="searchKeyword">
                <button @click="search">搜索</button>
            </div>
        </header>
        <h1>{{ pageTitle }}</h1>


        <div v-for="newsItem in list" :key="newsItem.id" class="news-item" @click="openNews(newsItem.link)">
            <h2 class="news-title">{{ newsItem.title }}</h2>
            <p class="news-text">{{ newsItem.pubDate }}</p>
        </div>
        <button v-if="showLoadMoreButton" @click="loadMore">加载更多</button>
    </div>
</template>
<script>

import axios from 'axios'
  
export default{
    name:"newsList",
    data()
    {
        return {list:undefined,
        page:1,
        showLoadMoreButton:true,
        searchKeyword: '',
        pageTitle: '最新资讯'
    }
    },
    
    created(){
        this.fetchNews();
    },
    methods:{
        fetchNews(){
            const apiUrl = `https://route.showapi.com/109-35?showapi_appid=1462436&showapi_sign=ce8a2e1fe7d945ef96c145cebb660364&page=${this.page}`
        axios.get(apiUrl)
        .then((response) => {
            const newNews = response.data.showapi_res_body.pagebean.contentlist
            this.list=this.list.concat(newNews);

            this.showLoadMoreButton = newNews.length === 20;
            console.log(response.data.showapi_res_body.pagebean.contentlist);
      })
      .catch((error) => {
          console.error('获取新闻失败：', error);
        });
        
        },
        loadMore() {
            this.page += 1; // 加载下一页的新闻
            this.fetchNews();
        },
        openNews(newsUrl) {
      // 打开新闻链接
      // 在当前页面打开新闻详情链接
      window.open(newsUrl, '_blank');
    },
    search() {
      // Handle the search button click
      if (!this.searchKeyword) {
        // If the search keyword is empty, return
        return;
      }

      const apiBaseUrl = 'https://route.showapi.com/109-35';
      const apiKey = '1462436';
      const apiSign = 'ce8a2e1fe7d945ef96c145cebb660364';

      // Generate the API link with the search keyword
      const apiUrl = `${apiBaseUrl}?showapi_appid=${apiKey}&showapi_sign=${apiSign}&page=${this.page}&title=${this.searchKeyword}`;
      this.pageTitle = `搜索${this.searchKeyword}相关`;
      axios
        .get(apiUrl)
        .then((response) => {
          const newNews = response.data.showapi_res_body.pagebean.contentlist;
          this.list = newNews;
          this.showLoadMoreButton = false; // Hide the "Load More" button for search results
        })
        .catch((error) => {
          console.error('获取搜索结果失败：', error);
        });
    },
    login() {
      // 这里可以添加登录逻辑

      // 导航到newsList.vue组件
      this.$router.push({name:"loginPage"});
    }
    },
    mounted()
    {
        
        axios.get('https://route.showapi.com/109-35?showapi_appid=1462436&showapi_sign=ce8a2e1fe7d945ef96c145cebb660364')
        .then((response) => {
            this.list=response.data.showapi_res_body.pagebean.contentlist
            console.log(response.data.showapi_res_body.pagebean.contentlist);
      })
      ;
      
    }
}
</script>
<style>
/* 样式可以根据你的需求进行调整 */
#app {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.news-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.news-item:hover {
  background-color: #f0f0f0;
}

.news-title {
  font-size: 20px;
  margin-bottom: 5px;
  /* 添加链接样式 */
  color: #007bff;
  text-decoration: underline;
}

.news-text {
  font-size: 16px;
}
/* 样式可以根据你的需求进行调整 */
header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-box input[type="text"] {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
}

.search-box button {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
}


.login-register {
  display: flex;
  align-items: center;
}

.login-register button {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  margin-right: 1rem;
}
</style>
app.mount('#app')