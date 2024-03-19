<template>
  <div>
    <div class="header-wrapper">
      <img src="../../assets/sidebarIcons/IconOne.png" class="product-logo" />
      <h3 class="title">House Of Models</h3>
    </div>
    <div class="w3-bar w3-black">
      <button v-for="(items, index) in detailsList" :key="index" class="w3-bar-item w3-button"
        :class="{ 'w3-red': items.isActive }" @click="openItems(items.id)">
        {{ items.tab }}
      </button>
    </div>
    <div v-for="(items, index) in detailsList" :key="index" :id="items.id"
      class="w3-container w3-display-container city" :style="{ display: items.display }">
      <span @click="closeItems(items.id)" class="w3-button w3-large w3-display-topright">&times;</span>
      <h2 class="product-name">{{ items.name }}</h2>
      <p class="product-desp" v-if="items.id !== 'Specifications'">{{ items.description }}</p>
      <table v-else>
        <tr v-for="items in tableData" :key="items.id">
          <td class="list-type">{{ items.type }}</td>
          <td>{{ items.spec }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailsList: [
        {
          id: 'Overview',
          tab: 'Overview',
          name: 'Product Description',
          description: "Tees Collection specialize in making men's clothes with characteristics of fashionable, comfortable and elegant.To show a kind of fashionable and special dressing style, appear the person's vigorous and vitality personality, and express his active and optimistic attitude of life. Wear our professional design high quality men's shirts, you will become more elegant and fascinating.Our designers are attention to every detail of the design and pursue exquisite sewing process.', display: 'block', isActive: true",
          display: 'block',
          isActive: true
        },
        {
          id: 'Specifications',
          tab: 'Specifications',
          name: 'Specifications',
          description: "Tees Collection specialize in making men's clothes with characteristics of fashionable, comfortable and elegant.To show a kind of fashionable and special dressing style, appear the person's vigorous and vitality personality, and express his active and optimistic attitude of life. Wear our professional design high quality men's shirts, you will become more elegant and fascinating.Our designers are attention to every detail of the design and pursue exquisite sewing process.', display: 'block', isActive: true",
          display: 'none',
          isActive: false
        },
        {
          id: 'Reviews',
          tab: 'Reviews',
          name: 'Reviews',
          description: 'Customer like the quality, comfort, appearence and fabric of the t-shirt. They mention that the finishing is also very good,it provides a perfect balance between a relaxed feel and a stylish look, and that the fabric is smooth and unmatched. They appreciate the value,and fit. Opinions are mixed on the color.',
          display: 'none',
          isActive: false
        }
      ],
      tableData: [
        {
          id: 1,
          type: 'Type',
          spec: 'Mandarin Collar'
        },
        {
          id: 2,
          type: 'Sleeve',
          spec: 'Full Sleeve'
        },
        {
          id: 3,
          type: 'Fit',
          spec: 'Slim'
        },
        {
          id: 4,
          type: 'Fabric',
          spec: 'Pure Cotton'
        },
        {
          id: 5,
          type: 'Neck Type',
          spec: 'Mandarin Collar'
        },
        {
          id: 6,
          type: 'Ideal For',
          spec: 'Men'
        },
        {
          id: 7,
          type: 'Size',
          spec: 'S'
        },
        {
          id: 8,
          type: 'Pattern',
          spec: 'Checked'
        },
        {
          id: 9,
          type: 'Sleeve Type',
          spec: 'Narrow'
        },
        {
          id: 10,
          type: 'Fabric Care',
          spec: 'Machine Wash as per Tag'
        },
      ]
    };
  },
  methods: {
    openItems(items) {
      this.detailsList.forEach(data => {
        if (data.id === items) {
          data.display = 'block';
          data.isActive = true;
        } else {
          data.display = 'none';
          data.isActive = false;
        }
      });
    },
    closeItems(dataId) {
      const list = this.detailsList.find(c => c.id === dataId);
      if (list) {
        list.display = 'none';
        list.isActive = false;
      }
    }
  }
};
</script>
<style scoped>
.w3-bar-item {
  width: 103px;
  height: 32px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color:
    rgba(40, 116, 240, 0.05);
  color: rgba(250, 249, 246, 0.5);
}
.w3-container {
  padding: 20px;
}
.title {
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  margin: 0 0 30px 0;
}
.product-logo {
  text-align: center;
  padding-bottom: 15px;
  height: 40px;
  width: 40px;
  margin: 0 auto;
}
.w3-red {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(20, 20, 20, 1);
}
.product-name {
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 20px;
}
.product-desp {
  color: rgba(250, 249, 246, 0.5);
}
td,
th {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(250, 249, 246, 0.5);
  padding: 5px;
}
.list-type {
  color: rgba(255, 255, 255, 1);
}
.header-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width:992px) {
  .w3-container{
    padding: 0;
  }
}
</style>
