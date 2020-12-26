<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All Memories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Luffy</ion-item>
        <ion-item>Salt</ion-item>
        <ion-item>Toumasaya</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonContent,
    IonToolbar,
    IonList,
    IonItem,
  },
};
</script>

<style lang="scss" scoped></style>
