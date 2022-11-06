<script>
    import { getContext } from "svelte";

    const user = getContext('user')

    
</script>
<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="profile-card">
    <div class="image-container">
        <img src="{user.avatar_url}" alt="{user.username || user.login}">

    </div>
    <strong>{user.name || user.login}</strong>
    <span>{user.bio || ""}</span>
</div>