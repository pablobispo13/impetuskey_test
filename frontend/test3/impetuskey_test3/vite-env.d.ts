/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly ACESSTOKENAUTH: string
    // mais variáveis de ambiente...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }