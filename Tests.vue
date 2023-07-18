</style><template>
    <div>
    <h1>test</h1>
    <ul>
        <li v-for="test in tests">{{ test }}</li>
    </ul>
</div>
</template>

<script>
export default {
    data () {
        return {
          tests: ['test1', 'test2', 'test3']
        }
    }
}
</script>

<style scoped>
h1{
    color: aqua;
}
</style>
