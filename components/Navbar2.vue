<script setup>
defineProps({
    isDark : Boolean,
    changeBackground : Function,
})
</script>

<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="12" md="9">
                <v-bottom-navigation grow color="primary">
                    <v-btn to="#about">
                        <span class="fontPoppin-nav2">About</span>
                    </v-btn>
                    <v-btn to="#work">
                        <span class="fontPoppin-nav2">Work</span>
                    </v-btn>
                    <v-btn to="#cer">
                        <span class="fontPoppin-nav2">Certificate</span>
                    </v-btn>
                    <v-btn to="#skill">
                        <span class="fontPoppin-nav2">Skill Experiance</span>
                    </v-btn>
                </v-bottom-navigation>
            </v-col>
            <v-col cols="12" md="3">
                <v-switch hide-details color="#92C7CF" value="sky" label="light" inset @change="changeBackground()"></v-switch>
            </v-col>
        </v-row>
    </v-container>
</template>