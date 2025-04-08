<script lang="ts" setup>
import {pb} from '../lib/pocketbaseClient.ts'
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'
import { authLogin } from '@/utils/authLogin.ts'

onMounted(() => {
    console.log(pb)
})

const email = ref('')
const password = ref('')

const router = useRouter()

const login = async () => {

    if (!email.value || !password.value) {
        window.alert('Email and password are required.')
        throw new Error("Email and password are required.");
    }
    if (!email.value.includes('@')) {
        window.alert('Email must be a valid email address.')
        throw new Error("Email must be a valid email address.");
    }
    
    try {
        await authLogin(email.value, password.value)
        console.log('Login successful')
        router.push('/')
    } catch (error) {
        window.alert("Login failed. Please check your credentials.");
        email.value = ''
        password.value = ''
    }
}

</script>

<template>
    <!-- LOGIN VIEW -->
    <section>
        <form class="border-[1px] grid xl:w-[30%] p-4 mx-auto gap-4 rounded-lg bg-red-400 shadow-md" @submit.prevent>
            <h1 class="text-center text-white font-black">LOGIN</h1>
            <input type="text" placeholder="Email" v-model="email" autocomplete="email" class="py-2 px-4 bg-white" />
            <input type="password" placeholder="Password" v-model="password" autocomplete="current-password" class="py-2 px-4 bg-white" />
            <button type="submit" class="bg-white text-red-400 font-bold py-2 px-4 rounded cursor-pointer" @click="login">Login</button>
            <div class="flex justify-center gap-2 text-white">
                <p>Don't have an account?</p>
                <RouterLink to="/signup" class="font-semibold">Register</RouterLink>
            </div>
        </form>
    </section>
</template>