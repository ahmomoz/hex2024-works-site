<template>
  <section class="banner-wrap">
    <div class="banner">
      <div class="quote-left">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/quote-left.png"
          alt="quote-left">
      </div>
      <div class="banner-text">
        <h5>讓使用者在觀賞與使用的旅程中，<span>
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png" alt="text-mark">發現設計的價值</span>
        </h5>
        <h5>而我在設計與開發的過程中，<span>
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png" alt="text-mark">看見自己的價值</span>
        </h5>
      </div>
      <div class="quote-right">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/quote-right.png"
          alt="quote-right">
      </div>
    </div>
    <ul class="banner-list">
      <li>
        <h7>2B經驗</h7>
        <hr>
        <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
      </li>
      <li>
        <h7>2C經驗</h7>
        <hr>
        <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
      </li>
    </ul>
  </section>
  <main class="works-container">
    <ul class="works-card-wrap">
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image1.png" alt="work1-img">
        </div>
        <div class="works-card-text">
          <h4>星際旅行訂票平台</h4>
          <p>悠遊宇宙的夢想，從這裡開始實現</p>
        </div>
        <ul class="works-card-tag">
          <li><span>網頁設計</span></li>
          <li><span>響應式設計</span></li>
          <li><span>Bootstap</span></li>
        </ul>
      </li>
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image2.png" alt="work2-img">
        </div>
        <div class="works-card-text">
          <h4>理財App</h4>
          <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
        </div>
        <ul class="works-card-tag">
          <li><span>APP設計</span></li>
          <li><span>IOS</span></li>
          <li><span>React</span></li>
        </ul>
      </li>
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image3.png" alt="work3-img">
        </div>
        <div class="works-card-text">
          <h4>醫美診所官網</h4>
          <p>永保青春的秘密，從粹究開始</p>
        </div>
        <ul class="works-card-tag">
          <li><span>網頁設計</span></li>
          <li><span>響應式設計</span></li>
          <li><span>ＷordPress</span></li>
        </ul>
      </li>
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image4.png" alt="work4-img">
        </div>
        <div class="works-card-text">
          <h4>美美美早餐店 POS 機 UI Design</h4>
          <p>訂單送單一目瞭然，自動報表分析好輕鬆</p>
        </div>
        <ul class="works-card-tag">
          <li><span>UI 設計</span></li>
          <li><span>前端開發</span></li>
          <li><span>Wix</span></li>
        </ul>
      </li>
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image5.png" alt="work5-img">
        </div>
        <div class="works-card-text">
          <h4>電影院訂票系統</h4>
          <p>三步驟完成訂票，電腦手機都支援</p>
        </div>
        <ul class="works-card-tag">
          <li><span>前端開發</span></li>
          <li><span>後端支援</span></li>
          <li><span>Vue</span></li>
        </ul>
      </li>
      <li class="works-card" @click.prevent="openModal">
        <div class="works-card-img">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/work-image6.png" alt="work6-img">
        </div>
        <div class="works-card-text">
          <h4>巧克巧克形象官網設計</h4>
          <p>三步驟完成訂票，電腦手機都支援</p>
        </div>
        <ul class="works-card-tag">
          <li><span>UI設計</span></li>
          <li><span>設計系統</span></li>
          <li><span>網路電商</span></li>
        </ul>
      </li>
    </ul>
    <ul class="works-card-page-list">
      <li><a href="#" class="page-active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
    </ul>
  </main>
  <div class="modal" v-if="modalActive"
    @click.self="closeModal">
    <div class="modal-demo">
      <div class="modal-header">
        <a href="#">
          <span class="material-symbols-outlined"
            @click.prevent="closeModal">
            close
          </span>
        </a>
      </div>
      <div class="modal-description">
        <div class="modal-title">
          <h4>星際旅行訂票平台</h4>
          <p>悠遊宇宙的夢想，從這裡開始實現</p>
        </div>
        <div class="modal-text">
          <div class="modal-intro">
            <p>
              STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。<br>
              主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
            </p>
          </div>
          <div class="modal-tag">
            <p>設計原則：<br>宇宙旅行、深色背景、強烈視覺效果</p>
            <p>開發方式：<br>Bootstrap、Javascript、RWD</p>
          </div>
        </div>
      </div>
      <div class="modal-main-content">
        <div class="modal-main">
          <div class="modal-main-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/modal-image1.png" alt="STARTRAVEL-main-image">
          </div>
          <h5>主視覺</h5>
          <p>可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</p>
        </div>
        <div class="modal-feature">
          <div class="modal-feature-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/modal-image2.png" alt="STARTRAVEL-feature-image">
          </div>
          <h5>推薦查詢</h5>
          <p>給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalActive: false
    }
  },
  methods: {
    openModal () {
      this.modalActive = true
    },
    closeModal () {
      this.modalActive = false
    }
  }
}
</script>
<style scoped>
</style>
