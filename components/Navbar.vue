<script setup>
defineProps({
    isDark : Boolean,
    changeBackground : Function,
})

</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="7">
                <v-card class="mainbox" hover>
                    <NuxtLink v-slot="{ navigate }" to="#about" custom>
                        <span @click="navigate" class="fontPoppin-nav cursor-pointe text-white hover:underline">About</span>
                    </NuxtLink>
                    <NuxtLink v-slot="{ navigate }" to="#work" custom>
                        <span @click="navigate" class="fontPoppin-nav cursor-pointer ml-7 text-white hover:underline">Work</span>
                    </NuxtLink>
                    <NuxtLink v-slot="{ navigate }" to="#cer" custom>
                        <span @click="navigate" class="fontPoppin-nav cursor-pointer ml-7 text-white hover:underline">Certificate</span>
                    </NuxtLink>
                    <NuxtLink v-slot="{ navigate }" to="#skill" custom>
                        <span @click="navigate" class="fontPoppin-nav cursor-pointer ml-7 text-white hover:underline">Skill Experience</span>
                    </NuxtLink>
                </v-card>
            </v-col>
            <v-col cols="12" md="1">
                <v-switch  hide-details color="#92C7CF" inset value="sky" @change="changeBackground()"></v-switch>
            </v-col>
            <v-col cols="12" md="2"></v-col>
        </v-row>
    </v-container>
</template>
