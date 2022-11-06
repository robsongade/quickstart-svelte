<script>
    
import { ServiceApi } from "@src/services/ServiceApi";

let user = ServiceApi.User()
</script>
<div class="projects-header-card">
    <strong>My projects</strong>
    <a
        href="{user.url}"
        target="_blank"
        rel="noopener noreferrer"
        title="See all projects"
    >
        See all
    </a>
</div>