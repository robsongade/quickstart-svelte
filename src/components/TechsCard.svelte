<script lang="ts">
import { getContext } from "svelte";

import { ServiceApi } from "@src/services/ServiceApi";

const Techs = ServiceApi.Techs()
</script>
<div class="techs-card">
    <header>Techs</header>
    <ul id="techs">
        {#each Techs as tech}
        <li>{tech.name}</li>
        {/each}
    </ul>

</div>