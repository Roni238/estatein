//этот файл указывайт тип Store для pinia стейтов чтобы ts читал pinia файлы

declare module '@/*' {
    import type { Store } from 'pinia';
    const store: Store;
    export default store;
}
