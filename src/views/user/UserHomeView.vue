<template>
  <section class="home-banner-wrap">
    <div class="home-banner-img">
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/hero-lg.png" alt="banner-img">
    </div>
    <div class="home-banner-text">
      <div class="title">
        <h1>Hi！我是 Noel</h1>
      </div>
      <div class="text">
        <p>具有 10 年經驗的
          <span><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png" alt="text-mark">資深 UI 設計師</span>
          兼
          <span><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png" alt="text-mark">前端工程師</span>
        </p>
        <p>技術雙修並行，<span>熱衷於優化使用者的網頁體驗</span></p>
      </div>
      <p>WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</p>
      <ul class="icon-list">
        <li>
          <a href="#">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg" alt="ins-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg" alt="facebook-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/youtube.svg" alt="youtube-icon">
          </a>
        </li>
      </ul>
    </div>
  </section>
  <main class="works-list-container">
    <div class="list-header">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="3" cy="3.5" r="3" fill="#C1C1C1"/>
          <path d="M6 3.5H100" stroke="#C1C1C1"/>
        </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-left-sm.png" alt="title-deco-left-sm">
      <h3>作品介紹</h3>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="97" cy="3.5" r="3" transform="rotate(-180 97 3.5)" fill="#C1C1C1"/>
          <path d="M94 3.5L-1.01328e-06 3.49999" stroke="#C1C1C1"/>
          </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-right-sm.png" alt="title-deco-right-sm">
    </div>
    <div class="works-list-wrap">
      <div class="works-list">
        <div class="works-list-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/homepage-work1.png" alt="homepage-work1-img">
        </div>
        <div class="works-list-text-wrap">
          <div class="works-list-text">
            <h4>星際旅行訂票平台</h4>
            <p>悠遊宇宙的夢想，從這裡開始實現</p>
            <ul class="works-card-tag">
              <li><span>網頁設計</span></li>
              <li><span>響應式設計</span></li>
              <li><span>Bootstrap</span></li>
            </ul>
          </div>
          <div class="works-list-text-btn">
            <Router-link to="/portfolio" class="link-btn-lg">完整介紹
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </Router-link>
          </div>
        </div>
      </div>
      <div class="works-list-text-wrap-media">
        <div class="works-list-text">
          <h4>星際旅行訂票平台</h4>
          <p>悠遊宇宙的夢想，從這裡開始實現</p>
          <ul class="home-works-card-tag">
            <li><span>網頁設計</span></li>
            <li><span>響應式設計</span></li>
            <li><span>Bootstrap</span></li>
          </ul>
        </div>
        <div class="works-list-text-btn">
          <Router-link to="/portfolio" class="link-btn-lg">完整介紹
            <span class="material-symbols-outlined">
              arrow_forward
            </span>
          </Router-link>
        </div>
      </div>
      <div class="works-list">
        <div class="works-list-img">
        </div>
        <div class="works-list-text-wrap">
          <div class="works-list-text">
            <h4>理財APP</h4>
            <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
            <ul class="works-card-tag">
              <li><span>APP設計</span></li>
              <li><span>IOS</span></li>
              <li><span>React</span></li>
            </ul>
          </div>
          <div class="works-list-text-btn">
            <Router-link to="/portfolio" class="link-btn-lg">完整介紹
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </Router-link>
          </div>
        </div>
      </div>
      <div class="works-list-text-wrap-media">
        <div class="works-list-text">
          <h4>理財APP</h4>
          <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
          <ul class="home-works-card-tag">
            <li><span>APP設計</span></li>
            <li><span>IOS</span></li>
            <li><span>React</span></li>
          </ul>
        </div>
        <div class="works-list-text-btn">
          <Router-link to="/portfolio" class="link-btn-lg">完整介紹
            <span class="material-symbols-outlined">
              arrow_forward
            </span>
          </Router-link>
        </div>
      </div>
      <div class="works-list">
        <div class="works-list-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/homepage-work3.png" alt="homepage-work3-img">
        </div>
        <div class="works-list-text-wrap">
          <div class="works-list-text">
            <h4>醫美診所官網</h4>
            <p>永保青春的秘密，從粹究開始</p>
            <ul class="home-works-card-tag">
              <li><span>網頁設計</span></li>
              <li><span>響應式設計</span></li>
              <li><span>WordPress</span></li>
            </ul>
          </div>
          <div class="works-list-text-btn">
            <Router-link to="/portfolio" class="link-btn-lg">完整介紹
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </Router-link>
          </div>
        </div>
      </div>
      <div class="works-list-text-wrap-media">
        <div class="works-list-text">
          <h4>醫美診所官網</h4>
          <p>永保青春的秘密，從粹究開始</p>
          <ul class="home-works-card-tag">
            <li><span>網頁設計</span></li>
            <li><span>響應式設計</span></li>
            <li><span>WordPress</span></li>
          </ul>
        </div>
        <div class="works-list-text-btn">
          <Router-link to="/portfolio" class="link-btn-lg">完整介紹
            <span class="material-symbols-outlined">
              arrow_forward
            </span>
          </Router-link>
        </div>
      </div>
    </div>
  </main>
  <section class="server-list-wrap">
    <div class="list-header">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="3" cy="3.5" r="3" fill="#C1C1C1"/>
          <path d="M6 3.5H100" stroke="#C1C1C1"/>
        </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-left-sm.png" alt="title-deco-left-sm">
      <h3>服務項目</h3>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="97" cy="3.5" r="3" transform="rotate(-180 97 3.5)" fill="#C1C1C1"/>
          <path d="M94 3.5L-1.01328e-06 3.49999" stroke="#C1C1C1"/>
          </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-right-sm.png" alt="title-deco-right-sm">
    </div>
    <ul class="server-list">
      <li>
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-visual.svg" alt="service-item-visual">
        <h4>平面設計</h4>
      </li>
      <li>
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-ui.svg" alt="service-item-ui">
        <h4>UI 設計</h4>
      </li>
      <li>
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-html%26css.svg" alt="service-item-html">
        <h4>切版服務</h4>
      </li>
      <li>
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-front-end.svg" alt="service-item-front-end">
        <h4>前端開發</h4>
      </li>
    </ul>
    <div class="server-list-text-btn">
      <h4>想要合作或瞭解更多？</h4>
      <Router-link to="/service" class="link-btn-lg">詳細內容與合作流程
        <span class="material-symbols-outlined">arrow_forward</span>
      </Router-link>
    </div>
  </section>
  <section class="article-list-wrap">
    <div class="list-header">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="3" cy="3.5" r="3" fill="#C1C1C1"/>
          <path d="M6 3.5H100" stroke="#C1C1C1"/>
        </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-left-sm.png" alt="title-deco-left-sm">
      <h3>精選文章</h3>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="7" viewBox="0 0 100 7" fill="none">
          <circle cx="97" cy="3.5" r="3" transform="rotate(-180 97 3.5)" fill="#C1C1C1"/>
          <path d="M94 3.5L-1.01328e-06 3.49999" stroke="#C1C1C1"/>
          </svg>
      </span>
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/title-deco-right-sm.png" alt="title-deco-right-sm">
    </div>
    <!--swiper start-->
    <div class="article-swiper">
      <ul class="article-list article-swiper-wrapper">
        <li
          v-for="(article, index) in articles"
          :key="index"
          :class="['article-swiper-slide', { 'swiper-active': index === activeSlide || index === activeSlide+1 || index === activeSlide+2  }]"
        >
          <Router-link class="article-card" :to="article.link" exact>
            <div class="article-card-header">
              <img :src="article.image" :alt="`article-image${index + 1}`">
            </div>
            <div class="article-card-body">
              <h6>{{ article.title }}</h6>
            </div>
            <div class="article-card-footer">
              <ul class="article-tag">
                <li><span>{{ article.tag }}</span></li>
              </ul>
              <p>{{ article.date }}</p>
            </div>
          </Router-link>
        </li>
      </ul>
    </div>
    <!--swiper end-->
    <ul class="article-list media-article-list">
      <li>
        <RouterLink class="article-card" :to=" `/blog/UIUX-news`" exact>
          <div class="article-card-header">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image1.png" alt="article-image1">
            </div>
          <div class="article-card-body">
            <h6>Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</h6>
          </div>
          <div class="article-card-footer">
            <ul class="article-tag">
              <li><span>UI/UX 新知</span></li>
            </ul>
            <p>2024/02/10</p>
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="article-card" :to=" `/blog/UIUX-news`" exact>
          <div class="article-card-header">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image2.png" alt="article-image2">
          </div>
          <div class="article-card-body">
            <h6>給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)</h6>
          </div>
          <div class="article-card-footer">
            <ul class="article-tag">
              <li><span>UI/UX 新知</span></li>
            </ul>
            <p>2023/11/20</p>
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="article-card" :to=" `/blog/UIUX-news`" exact>
          <div class="article-card-header">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image3.png" alt="article-image3">
          </div>
          <div class="article-card-body">
            <h6>給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)</h6>
          </div>
          <div class="article-card-footer">
            <ul class="article-tag">
              <li><span>UI/UX 新知</span></li>
            </ul>
            <p>2023/10/18</p>
          </div>
        </RouterLink>
      </li>
    </ul>
    <div class="article-list-footer">
      <div class="article-list-page-btn">
        <a href="#" @click.prevent="swiperSlideChange(0)">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6"
              :fill="activeSlide === 0 ? 'black' : '#E9E9E9'"/>
          </svg>
        </a>
        <a href="#" @click.prevent="swiperSlideChange(1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6"
              :fill="activeSlide === 1 ? 'black' : '#E9E9E9'"/>
          </svg>
        </a>
        <a href="#" @click.prevent="swiperSlideChange(2)">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6"
              :fill="activeSlide === 2 ? 'black' : '#E9E9E9'"/>
          </svg>
        </a>
        <a href="#" @click.prevent="swiperSlideChange(3)">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6"
              :fill="activeSlide === 3 ? 'black' : '#E9E9E9'"/>
          </svg>
        </a>
        <a href="#" @click.prevent="swiperSlideChange(4)">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6"
              :fill="activeSlide === 4 ? 'black' : '#E9E9E9'"/>
          </svg>
        </a>
      </div>
      <Router-link to="/blog" class="link-btn-lg">
        更多文章
        <span class="material-symbols-outlined">arrow_forward</span>
      </Router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      articles: [
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image1.png',
          title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
          tag: 'UI/UX 新知',
          date: '2024/02/10'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image2.png',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)',
          tag: 'UI/UX 新知',
          date: '2023/11/20'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image3.png',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: 'UI/UX 新知',
          date: '2023/10/18'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image4.png',
          title: '虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究',
          tag: '數位產品設計',
          date: '2023/09/20'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image5.png',
          title: '想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！',
          tag: '數位產品設計',
          date: '2023/08/10'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image6.png',
          title: 'React vs. Vue，哪種前端框架比較好用？從三大面向談起',
          tag: '前端開發',
          date: '2023/07/03'
        },
        {
          link: '/blog/UIUX-news',
          image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image1.png',
          title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
          tag: 'UI/UX 新知',
          date: '2024/02/10'
        }
      ]
    }
  },
  methods: {
    swiperSlideChange (index) {
      this.activeSlide = 0
      this.activeSlide += index
    },
    swiperAutoPlay () {
      setInterval(() => {
        this.activeSlide = this.activeSlide >= 4 ? -1 : this.activeSlide
        this.swiperSlideChange(this.activeSlide + 1)
      }, 4000)
    }
  },
  mounted () {
    this.swiperAutoPlay()
  }
}
</script>
<style scoped>
</style>
