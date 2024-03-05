<script setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const isLarge = computed(() => width.value < 1200);
const isMedium = computed(() => width.value < 962);
const isDark = ref(false);
const changeBackground = () => {
  isDark.value = !isDark.value;
};

useHead({
    title: "My Portfolio",
    meta: [
        { 
          name: 'description', 
          content: 'portfolio, jakkrit wongjinda' 
        },
        {
          name: 'keywords',
          content: 'portfolio, jakkrit wongjinda'
        },
    ]
  })


</script>

<template>
    <div class="index" :class="{ dark: isDark }">
        <!-- v-if="!isLarge" -->
        <v-container fluid> 
            <v-row>
                <v-col cols="12">
                   <Navbar :isDark="isDark" :changeBackground="changeBackground" v-if="!isMedium"/> 
                   <Navbar2 :isDark="isDark" :changeBackground="changeBackground" v-if="isMedium"/> 
                </v-col>
            </v-row>
        </v-container>
        <div class="mainbox2">
            <v-container fluid> 
                <v-row>
                    <v-col cols="12">
                        <AboutText1/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="mainbox3">
            <v-container fluid> 
                <v-row no-gutters>
                    <v-col cols="12">
                        <AboutText2 v-if="!isLarge"/>
                        <AboutText3 v-if="isLarge"/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="main4">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <Work/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="main3">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <Certificate/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="main2">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <SkillExperiance/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>


