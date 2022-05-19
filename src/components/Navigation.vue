<template>
    <header>
        <nav class="container">
            <div class="branding">
                <RouterLink class="header" to="/">FireBlogs</RouterLink>
            </div>
            <div class="nav-links">
                <ul>
                    <RouterLink class="link" to="/">Home</RouterLink>

                </ul>
            </div>
        </nav>

    </header>
</template>

<script>
export default {
    name: "navigation",
    components: {
    },
    data() {
        return {

        };
    },
}
</script>

<style scoped>
header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
}

.link:hover {
    color: #1eb8b8;
}

nav {
    display: flex;
    padding: 25px 0;
}

.nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}

.branding {
    display: flex;
    align-items: center;
}

ul {
    margin-right: 32px;
}

.link {
    margin-right: 32px;
}

.link:last-child {
    margin-right: 0;

}
</style>