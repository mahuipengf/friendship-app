/// <reference types="vite/client" />
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<object, object, any>
    export default component
  }

  // 解决
  // declare global {
  //   namespace NodeJS {
  //     interface ImportMeta {
  //       GITHUB_AUTH_TOKEN: string;
  //       NODE_ENV: 'development' | 'production';
  //       PORT?: string;
  //       PWD: string;
  //       BASE_URL?: string;
  //     }
  //   }
  // }

  interface ImportMetaEnv {
  readonly BASE_URL?: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}