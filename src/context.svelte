<script lang="ts">
import ContextUser from './contexts/ContextUser.svelte'
import { getContext } from 'svelte';

const user : IUser  = getContext('user')
</script>
<ContextUser>
    <slot></slot>
</ContextUser>