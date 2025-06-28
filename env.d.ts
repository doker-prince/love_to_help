/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface Window {
    $message?: {
        success: (message: string) => void
        error: (message: string) => void
        info: (message: string) => void
        warning: (message: string) => void
    }
} 