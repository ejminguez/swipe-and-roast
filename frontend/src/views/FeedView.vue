<script setup lang="ts">
import Card from '@/components/Card.vue';
import testImage from '@/assets/dags.jpg'

const user = {
    name: 'Dags',
    age: 25,
    bio: 'brightens & evens skin in 5 days',
    image: testImage,
    rejection_count: 25,
    rank: 1,
}

</script>

<template>
<section class="h-screen">
    <Card :username="user.name" :age="user.age" :bio="user.bio" :img="user.image" :rejection_count="user.rejection_count" :rank="user.rank" :key="user.name" />
</section>
</template>