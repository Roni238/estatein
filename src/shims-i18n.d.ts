import 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: import('vue-i18n').Translate;
    $tm: import('vue-i18n').Translate;
    $d: import('vue-i18n').DateTimeFormat;
    $n: import('vue-i18n').NumberFormat;
  }
}