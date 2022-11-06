<script lang="ts">
import './counter.scss'
import { getContext } from 'svelte';

const user : IUser  = getContext('user')
let count: number = 0
const increment = () => {
  count += 1
  user.data.idade+=1
}
</script>
{JSON.stringify(user)}
<button class="counter" on:click={increment}>
  counts is {count}

</button>
<h1>Minha idade {user.data.idade || 'nao definida'}</h1>

