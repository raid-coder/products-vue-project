<template>
    <div class="nevbar">
        <h1 class="title">
            <routerLink to="/">PANAFRICA</routerLink>
        </h1>
        <div class="links">
            <routerLink to="/products/homme">homme</routerLink>
            <routerLink to="/products/femme">femme</routerLink>
            <routerLink to="/products/manifeste">manifeste</routerLink>
            <routerLink to="/products/lookbook">lookbook</routerLink>
            <routerLink to="/products/live">live</routerLink>
            <routerLink to="/products/walksforschool">walksforschool</routerLink>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.nevbar{
    display: flex;
    align-items: center;
    gap: 30px;
}
.title{
    letter-spacing: 5px;
}
.title a{
    text-decoration: none;
    color: #490074;
}
.links{
    display: flex;
    gap: 20px;
}
.links a{
    text-decoration: none;
    color: black;
    text-transform: capitalize;
}

a.router-link-exact-active{
    color: orange;
    text-transform: uppercase;
    pointer-events: none;;

    &::before{
        content: "#";
    }
}
</style>