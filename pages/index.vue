<script setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const isLarge = computed(() => width.value < 1200);
const isMedium = computed(() => width.value < 962);
const isDark = ref(false);
const changeBackground = () => {
  isDark.value = !isDark.value;
};


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
        <div class="main2">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <SkillExperiance/>
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
        <div class="main4">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <Work/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

$font-family1: "Madimi One";
$font-family2: "Poppins";

.index {
  background-color: #D1D1D1;
}
.dark {
  .mainbox {
    padding: 10px 10px 10px 10px !important;
    background-color: #B5C0D0 !important;
    text-align: center;
    justify-items: center !important;
  }
  .mainbox2 {
    padding: 10px 10px 10px 10px !important;
    background-color: #B5C0D0 !important;
    text-align: center;
    justify-items: center !important;
  }
  .fontPoppin-nav {
    font-family: $font-family2 !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    color: rgb(75, 73, 73) !important;
   }
   .fontMadimi-about-h {
    font-family: $font-family1 !important;
    color: rgb(75, 73, 73) !important;
    font-size: 32px !important;
    font-weight: 500 !important;
    letter-spacing: 1.5px !important;
    }
    .fontMadimi-about-sh {
    font-family: $font-family1 !important;
    color: rgb(75, 73, 73) !important;
    font-size: 30px !important;
    letter-spacing: 1px !important;
    }
    .fontMadimi-about-p {
    font-family: $font-family1 !important;
    color: rgb(75, 73, 73) !important;
    font-size: 24px !important;
    letter-spacing: 1px !important;
    }
}
</style>
