<template>
  <form action="" @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName" />
    </div>

    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>

    <div>
      <label for="">Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
  </form>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default newFriend({
  emits: ["add-cntacts"],

  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },

  method: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
});
</script>
