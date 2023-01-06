<template>
  <h2>
    <slot name="title"></slot>
  </h2>
  <button>
    <slot name="btn" msg="!!"></slot>
  </button>
  <h2>
    <slot msg="hello" :count="1"></slot>
  </h2>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
