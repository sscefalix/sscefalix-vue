import {defineStore} from "pinia";

type ConfigStore = {
    _darkTheme: boolean | undefined
}

export const useConfig = defineStore('config', {
    state: (): ConfigStore => ({
        _darkTheme: true
    }),
    getters: {
        darkTheme: (s): boolean | undefined => s._darkTheme
    },
    actions: {
        setTheme(isDark: boolean): void {
            this._darkTheme = isDark
        }
    },
    persist: true
})