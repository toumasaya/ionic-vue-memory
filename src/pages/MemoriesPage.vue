<template>
  <base-layout pageTitle="All Memories">
    <ion-list>
      <ion-item router-link="/memories/1">Luffy</ion-item>
      <ion-item>Salt</ion-item>
      <ion-item>Toumasaya</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>

<style lang="scss" scoped></style>
