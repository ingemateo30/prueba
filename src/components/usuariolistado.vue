<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>usuarios</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="product in usuarios" :key="product.ID">
                    <ion-label>
                        <h2>{{ product.NOMBRE_RAZON_SOCIAL }}</h2>
                        <p>{{ product.APELLIDOS }}</p>
                        <p>\${{ product.CORREO }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            usuarios: []
        };
    },
    async mounted() {
        const response = await axios.get('http://localhost:3000/usuarios');
        this.usuarios = response.data;
    }
};
</script>