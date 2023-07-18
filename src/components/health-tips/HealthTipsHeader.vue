<template>
  <div>
    <div class="d-lg-flex" style="gap: 50px">
      <div>
        <div class="search-field" mt-3>
          <input type="text" />
          <i-icon icon="ion:search-outline" />
        </div>
      </div>

      <div class="tags-list mt-3">
        <span class="tag-header">Categories:</span>
        <div class="list-categories">
          <span
            class="tag"
            :class="item.charAt(0)"
            v-for="item in categories"
            :key="item"
            v-text="item"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Design", "Development", "UX", "Marketing"],
    };
  },
};
</script>

<style>
.tags-list {
  display: flex;
  display: inline-flex;
  display: inline-flex;
  gap: 6px;
  align-items: center;
}

.list-categories {
  display: flex;
  display: inline-flex;
  display: inline-flex;
  gap: 6px;
  align-items: center;
}

.tag {
  padding: 4px 14px;
  border-radius: 25px;
  font-size: 13px;
}
</style>
