<script lang="ts">

import { setContext } from 'svelte'

import { ServiceApi } from "@src/services/ServiceApi";

let user : any= ServiceApi.User()
user.LinkedIn = "https://www.linkedin.com/in/robson-gomesj/"
setContext('user',user)
</script>
<slot />