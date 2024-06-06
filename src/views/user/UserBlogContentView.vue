<template>
  <div class="blog-list-wrap content-wrap">
    <nav class="media-blog-nav-wrap top-nav">
      <ul :class="['media-blog-nav', {'nav-fixed' : isFixed}]">
        <li class="media-blog-nav-active" @click="toBlogPege">全部文章</li>
        <li @click="toBlogPege">UI/UX 新知</li>
        <li @click="toBlogPege">數位產品設計</li>
        <li @click="toBlogPege">平面設計</li>
        <li @click="toBlogPege">前端開發</li>
      </ul>
    </nav>
    <div class="blog-content-list-container">
      <main class="blog-content-wrap">
        <nav>
          <a href="#">數位產品設計</a>
          <p>/</p>
          <a href="#">2023/09/20 發佈</a>
        </nav>
        <div class="blog-content-title">
          <h3>虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究</h3>
          <h5>- 探索虛擬實境技術的現狀與前景 -</h5>
        </div>
        <div class="blog-content-body">
          <p>在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。</p>
          <h5>大眾看法</h5>
          <p>虛擬實境技術近年來受到越來越多人的關注和接受。人們對VR技術的潛力持樂觀態度，認為它能夠提供全新的體驗和娛樂方式，並在教育、訓練等領域中有著廣泛的應用前景。然而，也有一些人擔心虛擬實境技術的成熟度和可靠性，對其潛在風險抱有顧慮。</p>
          <h5>現行產品</h5>
          <p>目前市面上有許多虛擬實境產品，如Vision Pro、Oculus Rift、HTC Vive、PlayStation VR等。這些產品在硬件性能、軟件支持和使用者體驗等方面存在差異，而介面設計是影響使用者體驗的重要因素之一。不同的介面設計可以影響使用者的操作方式、感知真實度以及沈浸感。</p>
          <ul class="img-list">
            <li>
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/vision-pro.png" alt="vision-pro">
              <p>Vision Pro</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/oculus-rift.png" alt="oculus-rift">
              <p>Oculus Rift</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/htc-vive.png" alt="htc-vive">
              <p>HTC Vive</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/playstation-vr.png" alt="playstation-vr">
              <p>PlayStation VR</p>
            </li>
          </ul>
          <h5>技術創新</h5>
          <p>隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。<br>
技術瓶頸：儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。</p>
          <h5>技術瓶頸</h5>
          <p>儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。</p>
          <h5>未來展望</h5>
          <p>未來，虛擬實境技術將繼續向前發展。我們可以期待更加先進的硬件設備和更加豐富多彩的虛擬內容。同時，介面設計也將繼續演進，以提供更加直觀和便捷的操作方式，進一步增強使用者的沈浸感和參與感。總的來說，虛擬實境技術的未來是充滿希望和潛力的，我們期待著看到它在各個領域中的廣泛應用和發展。</p>
          <p class="author-text">Noel 主筆</p>
        </div>
      </main>
      <nav class="blog-nav-wrap">
        <ul class="blog-nav">
          <li class="blog-nav-active" @click="toBlogPege">全部文章</li>
          <li @click="toBlogPege">UI/UX 新知</li>
          <li @click="toBlogPege">數位產品設計</li>
          <li @click="toBlogPege">平面設計</li>
          <li @click="toBlogPege">前端開發</li>
        </ul>
      </nav>
    </div>
    <div class="blog-content-list-footer">
      <h4>相關文章</h4>
      <ul class="article-list">
        <li>
          <RouterLink class="article-card" :to=" `/blog/UIUX-news`" exact>
            <div class="article-card-header">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image1.png" alt="article-image1">
            </div>
            <div class="article-content">
              <div class="article-card-body">
                <h6>Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</h6>
              </div>
              <div class="article-card-footer">
                <ul class="article-tag">
                  <li><span>UI/UX 新知</span></li>
                </ul>
                <p>2024/02/10</p>
              </div>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="article-card" :to=" `/blog/UIUX-news`" exact>
            <div class="article-card-header">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/article-image7.png" alt="article-image7">
            </div>
            <div class="article-content">
              <div class="article-card-body">
                <h6>Vision Pro 來了！UIUX 設計師的未來在哪裡？</h6>
              </div>
              <div class="article-card-footer">
                <ul class="article-tag">
                  <li><span>UI/UX 新知</span></li>
                </ul>
                <p>2023/07/10</p>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false,
      scrollPosition: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 220) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    toBlogPege () {
      this.$router.push('/blog')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
</style>
