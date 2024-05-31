<template>
  <header>
    <a href="#" class="logo-img">
      <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/logo.svg" alt="logo">
    </a>
    <transition>
      <a href="#" class="hamburger-list-icon"
        @click.prevent="mediaLinkActive =! mediaLinkActive"
        v-show="!mediaLinkActive">
        <img src="https://i.imgur.com/mW0FaCA.png" alt="hamburger-list-icon">
      </a>
    </transition>
    <transition>
      <a href="#" class="cancle-list-icon"
        @click.prevent="mediaLinkActive =! mediaLinkActive"
        v-show="mediaLinkActive">
        <img src="https://i.imgur.com/oD1wN6h.png" alt="cancle-list-icon">
      </a>
    </transition>
    <nav class="header-nav">
      <ul class="link-wrap">
        <li :class="{ 'nav-active' : $route.path === '/' }">
          <RouterLink to="/">
            首頁
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/portfolio' }">
          <RouterLink to="/portfolio">
            作品集
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/service' }">
          <RouterLink to="/service">
            服務項目
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/blog' || $route.path === '/blog/UIUX-news'}">
          <RouterLink to="/blog">
            部落格
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/ablot'}">
          <RouterLink to="/about">
            聯絡我
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
      </ul>
    </nav>
    <transition>
      <ul class="media-link-wrap" v-show="mediaLinkActive">
        <li :class="{ 'nav-active' : $route.path === '/' }">
          <RouterLink to="/" @click="closeMenu">
            首頁
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/portfolio' }">
          <RouterLink to="/portfolio" @click="closeMenu">
            作品集
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/service' }">
          <RouterLink to="/service" @click="closeMenu">
            服務項目
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/blog' }">
          <RouterLink to="/blog" @click="closeMenu">
            部落格
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
        <li :class="{ 'nav-active' : $route.path === '/about'}">
          <RouterLink to="/about" @click="closeMenu">
            聯絡我
          </RouterLink>
          <span class="nav-list-top-left">
            <img src="https://i.imgur.com/ni1GuZi.png"
                alt="top-left-icon">
          </span>
          <span class="nav-list-top-right">
            <img src="https://i.imgur.com/Fb8fW14.png"
                alt="top-right-icon">
          </span>
          <span class="nav-list-bottom-left">
            <img src="https://i.imgur.com/AU1fMFX.png"
                alt="buttom-left-icon">
          </span>
          <span class="nav-list-bottom-right">
            <img src="https://i.imgur.com/2HKFkrv.png"
                alt="buttom-right-icon">
          </span>
        </li>
      </ul>
    </transition>
  </header>
  <RouterView />
  <footer>
    <div class="footer-logo">
      <a href="#" class="footer-logo-img">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/logo.svg" alt="logo">
      </a>
      <div class="footer-logo-text">
        <p>若有數位產品設計和開發相關問題</p>
        <p>歡迎填寫表單，或直接與我聯絡！</p>
      </div>
      <a href="#">service@hexschool.com</a>
    </div>
    <ul class="footer-link-list">
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/list.svg" alt="list-icon">
          <p>填寫表單</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg" alt="ins-icon">
          <p>hexschool_demo</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg" alt="facebook-icon">
          <p>hexschoolTW</p>
        </a>
      </li>
    </ul>
  </footer>
  <transition name="fade">
    <div class="overlay" v-show="mediaLinkActive"
      @click="closeMenu"></div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      mediaLinkActive: false
    }
  },
  methods: {
    closeMenu () {
      this.mediaLinkActive = false
    }
  }
}
</script>

<style scoped>
</style>
