<template>
  <div class="mt-4">
    <h5 class="body-header">Articles</h5>
    <hr />
    <div v-for="item in 5" :key="item">
      <div class="d-flex align-items-center" style="gap: 10px">
        <img
          class="user-profile-photo"
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          alt=""
        />
        <div class="d-flex flex-column">
          <div class="author-details">
            <span class="author-name">John Doe</span>
            <span class="dot"></span>
            <span class="text-secondary small">July 1st 2023</span>
          </div>
          <span class="text-secondary small">3 mins Read</span>
        </div>
      </div>
      <div class="blog-post">
        <div class="post-details w-100">
          <h4>Lorem ipsum dolor, sit amet consectetur</h4>
          <p class="body-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos saepe
            voluptate ipsa provident, laudantium quos consequatur sint qui
            ducimus quidem cupiditate, sunt iste harum fuga! Voluptas porro
            minus laboriosam ullam?
          </p>
          <div class="list-categories mt-2">
            <span
              class="tag"
              :class="item.charAt(0)"
              v-for="item in categories"
              :key="item"
              v-text="item"
            ></span>
          </div>
        </div>
        <div class="w-50">
          <img
            class="blog-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpexqYbTHVFdk1TIViYZgAxCgmUgZYnIGNQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <hr />
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
.user-profile-photo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  -o-object-fit: cover;
  object-position: center;
  object-position: center;
  border-radius: 50%;
}

.author-details {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 6px;
  align-items: center;
}

.author-details .author-name {
  font-weight: 600;
  font-size: 16px;
  display: block;
  line-height: 15px;
}

.dot {
  background: var(--gray-400);
  width: 5px;
  height: 5px;
  display: block;
  border-radius: 50%;
}

.body-header {
  font-weight: 500;
  font-size: 24px;
}

.blog-post {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 20px;
}

.blog-post .post-details {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.blog-post h4 {
  font-weight: 600;
}

.blog-post p {
  color: var(--gray-400);
  line-height: 18px;
}

.blog-image {
  width: 100%;
  border-radius: 10px;
}

@media (max-width: 990px) {
  .blog-post {
    flex-direction: column;
  }
}
</style>
