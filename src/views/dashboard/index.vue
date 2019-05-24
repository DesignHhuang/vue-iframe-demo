<template>
    <div class="dashboard-container">
        <div class="dashboard-editor-container">
            <el-row :gutter="12">
                <el-col :span="24">
                    <el-card shadow="always">无锡市民中心大数据平台展示首页</el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    components: {}
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
    margin: 24px;
    padding: 32px;
}
</style>
