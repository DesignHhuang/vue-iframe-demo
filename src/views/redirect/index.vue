<script>
export default {
    created() {
        const { params, query } = this.$route;
        console.log(this.$route);
        const { path } = params;
        this.$router.replace({ path: "/" + path, query });
        console.log(this.$route);
    },
    render: function(h) {
        return h(); // avoid warning message
    }
};
</script>
