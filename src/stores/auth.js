import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            user: 'jon',
            currentAge: 55,
        }
    },
    actions: {}
});