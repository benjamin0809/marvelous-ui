import Vue from 'vue';

export class MlComponent extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
