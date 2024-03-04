<script setup>
</script>

<template>
    <div id="skill">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <span class="fontMadimi-about-h-center">My Skill-Experiance</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="4">
                    <!-- Programming Lang -->
                    <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/image/pgl2.svg" 
                        title="Programming Language"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/javascript.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-1 pl-4"
                            text="JavaScript"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/typescript.svg"
                            text-color="white" 
                            class="ml-2 pl-4"
                            text="TypeScript"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/python.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-2 pl-4"
                            text="Python"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="https://www.r-project.org/logo/Rlogo.svg"
                            text-color="white" 
                            class="ml-2 mb-2 mt-1 pl-4"
                            text="R"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="15"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/lua.svg"
                            text-color="white" 
                            class="ml-2 mb-2 mt-1 pl-4"
                            text="Lua"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="4">
                    <!-- Style -->
                    <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/image/pgl4.svg" 
                        title="Style Language"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/css.svg"
                            text-color="white" 
                            class="mt-1 mb-1 ml-2 pl-4"
                            text="Css"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/sass.svg"
                            text-color="white" 
                            class="ml-2 pl-4"
                            text="Sass"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/tailwind.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-2 pl-4"
                            text="Tailwind Css"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="4">
                    <!-- FrameWork -->
                    <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/image/pgl3.svg" 
                        title="Framework"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/vue.svg"
                            text-color="white" 
                            class="mt-1 mb-1 ml-3 mr-1 pl-4"
                            text="Vue"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/image/nuxt.svg"
                            text-color="white" 
                            class="m-1 pl-4"
                            text="Nuxt"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/react.svg"
                            text-color="white" 
                            class="m-1 pl-4"
                            text="React"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-icon="$vuetify"
                            text-color="white" 
                            class="mt-1 mb-2 ml-3 mr-1 pl-4"
                            text="Vuetify3"
                            >
                            <template v-slot:prepend>
                                <v-icon rounded="0" size="20" color="info"></v-icon>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="4">
                     <!-- Database -->
                     <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/skill/database.svg" 
                        title="Database"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/mysql.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-1 pl-4"
                            text="MySQL"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/mariadb.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-1 pl-4"
                            text="MariaDB"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/postgresql.svg"
                            text-color="white" 
                            class="mt-1 mb-2 ml-2 pl-4"
                            text="PosgreSQL"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/prisma.svg"
                            text-color="white" 
                            class="mt-1 mb-2 ml-2 pl-4"
                            text="Prisma"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="4">
                    <!-- Cms & Visual -->
                    <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/skill/visual.svg" 
                        title="CMS & Visualization"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/starpi2.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-1 pl-4"
                            text="Strapi"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="16"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/docker.svg"
                            text-color="white" 
                            class="mt-1 mb-1 ml-2 pl-4"
                            text="Docker"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/powerbi.svg"
                            text-color="white" 
                            class="mt-1 mb-2 ml-2 pl-4"
                            text="PowerBi"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="4">
                    <!-- UX/UI -->
                    <v-card
                        color="#0F0F0F"
                        class="v-card-ex"
                        varaint="outlined"
                        prepend-avatar="/skill/ux.svg" 
                        title="UX / UI"                   
                        >
                        <template v-slot:prepend>
                            <v-avatar rounded="0"></v-avatar>
                        </template>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/figma.svg"
                            text-color="white" 
                            class="ml-2 mt-1 mb-1 pl-4"
                            text="Figma"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="16"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/photoshop.svg"
                            text-color="white" 
                            class="mt-1 mb-1 ml-2 pl-4"
                            text="Photoshop"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                        <v-chip 
                            variant="elevated" 
                            color="#FFFFFF" 
                            prepend-avatar="/skill/illustrator.svg"
                            text-color="white" 
                            class="mt-1 mb-2 ml-2 pl-4"
                            text="illustrator"
                            >
                            <template v-slot:prepend>
                                <v-avatar rounded="0" size="20"></v-avatar>
                            </template>
                        </v-chip>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>