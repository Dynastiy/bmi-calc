<template>
  <div>
    <div class="py-4" id="home">
      <div class="container">
        <section>
          <div class="mb-4 header-area text-center">
            <h2>Health Tips</h2>
          </div>
        </section>

        <!-- Health Tips Header  -->
        <section>
          <div class="health-tips-container">
            <div>
              <health-tips-header />
              <health-tips-content/>
            </div>
            <div class="divider-line"></div>
            <!-- <el-divider direction="vertical"></el-divider> -->
            <div>
              <interested-posts/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import HealthTipsHeader from "@/components/health-tips/HealthTipsHeader.vue";
import HealthTipsContent from '@/components/health-tips/HealthTipsContent.vue';
import InterestedPosts from '@/components/health-tips/InterestedPosts.vue';
export default {
  components: { HealthTipsHeader, HealthTipsContent, InterestedPosts },
};
</script>

<style>

.health-tips-container {
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  grid-template-columns: 1fr auto 20%;
  gap: 30px;
}

.divider-line {
  background: var(--gray-200);
  height: 100vh;
  width: 1px;
}


@media (max-width: 990px) {
  .health-tips-container {
    grid-template-columns: auto;
  }

  .divider-line {
    display: none;
  }
}
</style>
